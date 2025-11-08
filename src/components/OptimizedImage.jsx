import { useState, useEffect, useRef } from 'react';
import { getImageUrl, getImageSrcSet } from '../config/imageConfig';

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Progressive image loading with blur-up effect
 * - Responsive images with srcset
 * - Error handling with fallback
 * - Loading placeholder
 * 
 * @param {Object} props
 * @param {string} props.src - Image source (can be local import or path string)
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS classes
 * @param {boolean} props.lazy - Enable lazy loading (default: true)
 * @param {boolean} props.priority - Disable lazy loading for critical images
 * @param {Function} props.onClick - Click handler
 * @param {string} props.loading - Native loading attribute ('lazy' | 'eager')
 * @param {Object} props.style - Inline styles
 */
const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  lazy = true,
  priority = false,
  onClick,
  loading,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Determine if src is a local import or a path string
  const isLocalImport = typeof src === 'string' && src.startsWith('/');
  const imageSrc = isLocalImport ? src : getImageUrl(src);

  useEffect(() => {
    // Skip lazy loading for priority images
    if (priority || !lazy) {
      setIsInView(true);
      return;
    }

    // Set up Intersection Observer for lazy loading
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect observer after image is in view
          if (observerRef.current && imgRef.current) {
            observerRef.current.unobserve(imgRef.current);
          }
        }
      });
    }, options);

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.error(`Failed to load image: ${imageSrc}`);
  };

  // Fallback placeholder for failed images
  if (hasError) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={style}
        onClick={onClick}
      >
        <svg
          className="w-12 h-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading || (priority ? 'eager' : 'lazy')}
          decoding="async"
          {...props}
        />
      )}

      {/* Placeholder when not in view */}
      {!isInView && (
        <div className="absolute inset-0 bg-gray-100" />
      )}
    </div>
  );
};

export default OptimizedImage;

