import './App.css';
import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import logoSvg from './assets/logo.svg';
import landingImage from './assets/landing.JPG';

// Import Trivarna project images
import trivarna1 from './assets/trivarna/PHOTO-2024-04-26-17-03-33 2.JPG';
import trivarna2 from './assets/trivarna/PHOTO-2024-04-26-17-03-33.JPG';
import trivarna3 from './assets/trivarna/PHOTO-2024-04-26-17-03-34.JPG';
import trivarna4 from './assets/trivarna/PHOTO-2024-04-26-17-03-35.JPG';
import trivarna5 from './assets/trivarna/PHOTO-2024-05-09-20-19-15 2.JPG';
import trivarna6 from './assets/trivarna/PHOTO-2024-05-09-20-19-15 3.JPG';
import trivarna7 from './assets/trivarna/PHOTO-2024-05-09-20-19-15.JPG';
import trivarna8 from './assets/trivarna/PHOTO-2024-05-09-20-19-16.JPG';
import trivarna9 from './assets/trivarna/PHOTO-2024-05-25-23-50-42.JPG';
import trivarna10 from './assets/trivarna/PHOTO-2024-05-27-12-53-39 2.JPG';
import trivarna11 from './assets/trivarna/PHOTO-2024-05-27-12-53-39 3.JPG';
import trivarna12 from './assets/trivarna/PHOTO-2024-05-27-12-53-39 4.JPG';
import trivarna13 from './assets/trivarna/PHOTO-2024-05-27-12-53-39.JPG';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [colors] = useState({
    lightBg: '#E9E3DB',
    darkBg: '#CABBA4',
    header: '#ffffff',
    footer: '#212429',
    text: '#531516',
  });

  // Trivarna project images array
  const trivarnaImages = [
    trivarna1,
    trivarna2,
    trivarna3,
    trivarna4,
    trivarna5,
    trivarna6,
    trivarna7,
    trivarna8,
    trivarna9,
    trivarna10,
    trivarna11,
    trivarna12,
    trivarna13,
  ];

  const projects = [
    {
      id: 1,
      title: 'Trivarna',
      client: 'Private Residence, Bangalore',
      requirement:
        'A comprehensive interior design project featuring modern aesthetics and functional spaces with emphasis on natural lighting and sustainable materials.',
      completedTime: 'Completed: March 2024',
      images: trivarnaImages,
    },
    {
      id: 2,
      title: 'Modern Villa',
      client: 'Luxury Estate, Mumbai',
      requirement:
        'Contemporary villa design with open-plan living spaces, integrating indoor-outdoor flow and premium finishes throughout.',
      completedTime: 'Completed: January 2024',
      images: [], // Placeholder for future images
    },
    {
      id: 3,
      title: 'Urban Apartment',
      client: 'High-rise Residence, Delhi',
      requirement:
        'Compact urban living space maximizing functionality while maintaining elegant minimalist aesthetics and smart storage solutions.',
      completedTime: 'Completed: November 2023',
      images: [], // Placeholder for future images
    },
  ];

  const goToGalleryImage = (index) => {
    setCurrentGalleryImage(index);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) =>
      prev < trivarnaImages.length - 1 ? prev + 1 : prev
    );
  };

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Apply colors to CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  // Loading screen timer with animation phases
  useEffect(() => {
    // Start exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2000);

    // Remove loader from DOM after animation completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Extra 1 second for exit animation

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Scroll detection for magazine cover effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show header and content after scrolling 100px
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect for landing image
  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const landingSection = document.querySelector('.landing-hero-section');
      const landingImage = document.querySelector('.landing-hero-image');

      if (landingSection && landingImage) {
        const sectionHeight = landingSection.offsetHeight;

        // Only apply parallax while landing section is visible
        if (scrolled < sectionHeight) {
          // Move image slower than scroll (parallax effect)
          landingImage.style.transform = `translateY(${
            scrolled * 0.5
          }px) scale(1.1)`;
        }
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  // Keyboard navigation for gallery
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextGalleryImage();
      } else if (e.key === 'ArrowLeft') {
        prevGalleryImage();
      } else if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <>
      {/* Loading screen overlay - renders on top of main content */}
      {isLoading && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 loader-overlay ${
            loadingComplete ? 'loader-exit' : ''
          }`}
          style={{ backgroundColor: colors.lightBg }}
        >
          <div
            className={`text-center loader-content ${
              loadingComplete ? 'loader-content-exit' : ''
            }`}
          >
            {/* Animated Logo */}
            <div className='relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 loader-logo'>
              <img
                src={logoSvg}
                alt='THE TEXTURE TROVE'
                className='w-full h-full'
              />
            </div>

            {/* Animated Text */}
            <div className='loader-text-wrapper'>
              <h2
                className='text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4'
                style={{ color: colors.text }}
              >
                THE TEXTURE TROVE
              </h2>
              <div className='loader-progress-bar'>
                <div className='loader-progress-fill'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content - always rendered */}
      <div
        className='min-h-screen'
        style={{ backgroundColor: colors.lightBg, color: colors.text }}
      >
        {/* Unified Header - Transitions from transparent to solid */}
        <header
          className='fixed top-0 left-0 right-0 shadow-sm transition-all duration-500 z-40'
          style={{
            backgroundColor: scrolled ? colors.header : 'transparent',
            boxShadow: scrolled ? undefined : 'none',
          }}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              {/* Logo - Transitions from white to colored */}
              <div className='flex-shrink-0'>
                <div className='flex items-center space-x-3'>
                  <img
                    src={logo}
                    alt='THE TEXTURE TROVE Logo'
                    className={`h-15 w-auto transition-all duration-500 ${
                      scrolled ? '' : 'brightness-0 invert'
                    }`}
                  />
                  <h1
                    className='text-2xl font-bold transition-colors duration-500'
                    style={{ color: scrolled ? colors.text : '#ffffff' }}
                  >
                    THE TEXTURE TROVE
                  </h1>
                </div>
              </div>

              {/* Navigation - Fades in on scroll */}
              <nav
                className={`hidden md:flex space-x-8 transition-opacity duration-500 ${
                  scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <a
                  href='#'
                  className='font-medium opacity-70 hover:opacity-100'
                  style={{ color: colors.text }}
                >
                  Home
                </a>
                <a
                  href='#contact'
                  className='font-medium opacity-70 hover:opacity-100'
                  style={{ color: colors.text }}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Landing Hero Section - Magazine Cover */}
        <section className='relative w-full h-screen overflow-hidden landing-hero-section'>
          <img
            src={landingImage}
            alt='THE TEXTURE TROVE Landing'
            className='w-full h-full object-cover landing-hero-image'
          />
          <div
            className='absolute inset-0 landing-gradient-overlay'
            style={{
              background: `linear-gradient(to bottom,
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.1) 40%,
                rgba(0, 0, 0, 0.3) 70%,
                ${colors.darkBg} 100%)`,
            }}
          >
            <div
              className='absolute left-0 p-8 md:p-12 lg:p-16 max-w-4xl'
              style={{ top: '75%', transform: 'translateY(-50%)' }}
            >
              <div className='text-left text-white'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-light mb-4 tracking-wide landing-text-heading'>
                  Reimagining Interiors
                </h1>
                <p className='text-lg md:text-xl lg:text-2xl font-light opacity-90 landing-text-tagline'>
                  Transforming spaces into timeless expressions of elegance and
                  functionality
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section - Wraps all content below landing */}
        <div className='min-h-screen'>
          {/* Projects Section */}
          <section
            className='relative py-20'
            style={{ backgroundColor: colors.darkBg }}
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h2
                className='text-4xl md:text-5xl font-light mb-16 text-center'
                style={{ color: colors.text }}
              >
                Projects
              </h2>

              <div className='space-y-20'>
                {projects.map((project, projectIndex) => {
                  const isEven = projectIndex % 2 === 0;

                  return (
                    <div
                      key={project.id}
                      className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'
                    >
                      {/* Project Information - Order changes based on index */}
                      <div
                        className={`lg:col-span-4 flex flex-col justify-center space-y-6 ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <h3
                          className='text-3xl md:text-4xl font-light'
                          style={{ color: colors.text }}
                        >
                          {project.title}
                        </h3>

                        <div className='space-y-4'>
                          <div>
                            <p
                              className='text-sm font-semibold uppercase tracking-wide opacity-60'
                              style={{ color: colors.text }}
                            >
                              Client
                            </p>
                            <p
                              className='text-lg mt-1'
                              style={{ color: colors.text }}
                            >
                              {project.client}
                            </p>
                          </div>

                          <div>
                            <p
                              className='text-sm font-semibold uppercase tracking-wide opacity-60'
                              style={{ color: colors.text }}
                            >
                              Requirement
                            </p>
                            <p
                              className='text-base md:text-lg mt-1 leading-relaxed'
                              style={{ color: colors.text }}
                            >
                              {project.requirement}
                            </p>
                          </div>

                          <div>
                            <p
                              className='text-sm font-semibold uppercase tracking-wide opacity-60'
                              style={{ color: colors.text }}
                            >
                              Timeline
                            </p>
                            <p
                              className='text-lg mt-1'
                              style={{ color: colors.text }}
                            >
                              {project.completedTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Project Images - Order changes based on index */}
                      <div
                        className={`lg:col-span-8 min-h-[400px] lg:min-h-[500px] ${
                          isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        {project.images.length > 0 ? (
                          <div className='w-full h-full grid grid-cols-2 gap-3'>
                            {project.images.slice(0, 4).map((img, index) => (
                              <div
                                key={index}
                                className='relative overflow-hidden rounded-lg shadow-lg cursor-pointer'
                                onClick={() => {
                                  setCurrentGalleryImage(index);
                                  setShowModal(true);
                                }}
                              >
                                <img
                                  src={img}
                                  alt={`${project.title} ${index + 1}`}
                                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                                    index === 3 ? 'brightness-50' : ''
                                  }`}
                                />
                                {index === 3 && project.images.length > 4 && (
                                  <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                                    <span className='text-white text-lg md:text-xl font-semibold drop-shadow-lg'>
                                      +{project.images.length - 4} more
                                    </span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className='w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg flex items-center justify-center'>
                            <span
                              className='text-lg font-medium opacity-50'
                              style={{ color: colors.text }}
                            >
                              Images Coming Soon
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Trivarna Gallery Fullscreen Carousel */}
          {showModal && (
            <div className='fixed inset-0 bg-black z-50 flex flex-col h-screen w-screen overflow-hidden'>
              {/* Header */}
              <div className='relative flex justify-center items-center p-3 md:p-4 text-white flex-shrink-0'>
                <h2 className='text-lg md:text-xl font-bold text-center'>
                  <span className='text-gray-300'>Gallery</span>
                  <span className='mx-2'>:</span>
                  <span className='text-white'>Trivarna</span>
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className='absolute right-3 md:right-4 text-white hover:text-gray-300 text-2xl md:text-3xl font-bold'
                >
                  ×
                </button>
              </div>

              {/* Main Image Display */}
              <div className='flex-1 relative flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-0'>
                <img
                  src={trivarnaImages[currentGalleryImage]}
                  alt={`Trivarna Project ${currentGalleryImage + 1}`}
                  className='max-w-[95%] max-h-[95%]'
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevGalleryImage}
                  className='absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-xl md:text-3xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center'
                >
                  ❮
                </button>
                <button
                  onClick={nextGalleryImage}
                  className='absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-xl md:text-3xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center'
                >
                  ❯
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className='p-4 md:p-5 bg-black bg-opacity-80 flex-shrink-0'>
                <div className='flex justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto py-1'>
                  {trivarnaImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToGalleryImage(index)}
                      className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg transition-all duration-200 ${
                        currentGalleryImage === index
                          ? 'ring-4 ring-white'
                          : 'ring-2 ring-gray-700 hover:ring-gray-500'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer
            id='contact'
            className='text-white py-16'
            style={{ backgroundColor: colors.footer }}
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Company Info */}
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <img
                      src={logo}
                      alt='THE TEXTURE TROVE Logo'
                      className='h-12 w-auto'
                    />
                    <h5 className='text-xl font-bold'>THE TEXTURE TROVE</h5>
                  </div>
                  <p className='text-stone-300'>
                    Creating beautiful, functional furniture for modern living
                    spaces since 2020.
                  </p>
                </div>

                {/* Socials & Contact */}
                <div className='space-y-4'>
                  <h6 className='font-semibold'>Connect With Us</h6>

                  {/* Social Media Icons */}
                  <div className='flex space-x-4'>
                    {/* Instagram */}
                    <a
                      href='https://instagram.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-stone-300 hover:text-white transition-colors'
                      aria-label='Instagram'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href='https://wa.me/15551234567'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-stone-300 hover:text-white transition-colors'
                      aria-label='WhatsApp'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                      </svg>
                    </a>

                    {/* Google Maps */}
                    <a
                      href='https://maps.google.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-stone-300 hover:text-white transition-colors'
                      aria-label='Google Maps'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                      </svg>
                    </a>

                    {/* Phone */}
                    <a
                      href='tel:+15551234567'
                      className='text-stone-300 hover:text-white transition-colors'
                      aria-label='Phone'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
                      </svg>
                    </a>

                    {/* Email */}
                    <a
                      href='mailto:info@thetexturetrove.com'
                      className='text-stone-300 hover:text-white transition-colors'
                      aria-label='Email'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                      </svg>
                    </a>
                  </div>

                  {/* Contact Details */}
                  <ul className='space-y-2 text-stone-300 text-sm'>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Email: info@thetexturetrove.com</li>
                  </ul>
                </div>

                {/* Google Map */}
                <div className='space-y-4'>
                  <h6 className='font-semibold'>Find Us</h6>
                  <div className='w-full h-48 rounded-lg overflow-hidden'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555634!2d-73.98823492346618!3d40.75889797138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
                      width='100%'
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen=''
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      title='Google Maps Location'
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className='border-t border-stone-700 mt-12 pt-8 text-center text-stone-400'>
                <p>&copy; 2024 THE TEXTURE TROVE. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
