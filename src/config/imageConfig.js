/**
 * Image Configuration for jsDelivr CDN Optimization
 *
 * This configuration enables serving images from jsDelivr CDN for faster load times.
 *
 * Usage Modes:
 * 1. LOCAL: Serve images from local assets (development - npm run dev)
 * 2. JSDELIVR: Serve images from jsDelivr CDN (production - npm run build)
 *
 * Mode is automatically detected:
 * - Development (npm run dev): Uses LOCAL mode
 * - Production (npm run build): Uses JSDELIVR mode
 */

// Configuration
const IMAGE_CONFIG = {
  // Automatically detect mode: development uses LOCAL, production uses JSDELIVR
  mode: import.meta.env.MODE === 'production' ? 'JSDELIVR' : 'LOCAL',

  // GitHub repository information (required for jsDelivr)
  github: {
    user: 'hmishra',
    repo: 'vedica',
    branch: 'main',
  },

  // jsDelivr CDN base URL
  jsdelivrBase: 'https://cdn.jsdelivr.net/gh',

  // Image quality settings
  quality: {
    thumbnail: 60,  // Quality for thumbnails
    preview: 80,    // Quality for preview images
    full: 90,       // Quality for full-size images
  },

  // Lazy loading settings
  lazyLoad: {
    enabled: true,
    rootMargin: '50px',  // Start loading 50px before image enters viewport
    threshold: 0.01,
  },

  // Preload critical images
  preloadCritical: true,
};

/**
 * Get the base URL for images based on current mode
 */
export const getImageBaseUrl = () => {
  if (IMAGE_CONFIG.mode === 'JSDELIVR') {
    const { user, repo, branch } = IMAGE_CONFIG.github;
    return `${IMAGE_CONFIG.jsdelivrBase}/${user}/${repo}@${branch}/src/assets`;
  }
  return '/src/assets'; // Local development path
};

/**
 * Get the full URL for an image
 * @param {string} imagePath - Path relative to assets folder (e.g., 'trivarna/p1.JPG')
 * @returns {string} Full image URL
 */
export const getImageUrl = (imagePath) => {
  const baseUrl = getImageBaseUrl();
  return `${baseUrl}/${imagePath}`;
};

/**
 * Generate srcset for responsive images
 * @param {string} imagePath - Path relative to assets folder
 * @param {Array<number>} widths - Array of widths for responsive images
 * @returns {string} srcset string
 */
export const getImageSrcSet = (imagePath, widths = [640, 768, 1024, 1280, 1920]) => {
  const baseUrl = getImageBaseUrl();

  if (IMAGE_CONFIG.mode === 'JSDELIVR') {
    // jsDelivr doesn't automatically resize images, so we return the same URL
    // In production, you might want to use an image optimization service
    return widths.map(w => `${baseUrl}/${imagePath} ${w}w`).join(', ');
  }

  // For local development, return single source
  return `${baseUrl}/${imagePath}`;
};

/**
 * Preload critical images
 * @param {Array<string>} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths) => {
  if (!IMAGE_CONFIG.preloadCritical) return;

  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getImageUrl(path);
    document.head.appendChild(link);
  });
};

/**
 * Image path mappings for all project images
 * This makes it easy to reference images throughout the app
 */
export const IMAGE_PATHS = {
  // Logo images
  logo: 'logo.png',
  logoSvg: 'logo.svg',
  logo2: 'logo2.png',
  logo3: 'logo3.png',
  landing: 'landing.jpeg',

  // Trivarna project
  trivarna: [
    'trivarna/p1.JPG',
    'trivarna/p2.JPG',
    'trivarna/p3.JPG',
    'trivarna/p4.JPG',
    'trivarna/p5.JPG',
    'trivarna/p6.JPG',
    'trivarna/p7.JPG',
    'trivarna/p8.JPG',
    'trivarna/p9.JPG',
    'trivarna/p10.JPG',
    'trivarna/p11.JPG',
    'trivarna/p12.JPG',
    'trivarna/p13.JPG',
  ],

  // Retreat project
  retreat: [
    'retreat/p1.JPG',
    'retreat/p2.JPG',
    'retreat/p3.JPG',
    'retreat/p4.JPG',
    'retreat/p6.JPG',
    'retreat/p7.JPG',
    'retreat/p8.JPG',
    'retreat/p9.JPG',
    'retreat/p10.JPG',
    'retreat/p11.JPG',
    'retreat/p13.JPG',
    'retreat/p14.JPG',
    'retreat/p15.JPG',
    'retreat/p16.JPG',
    'retreat/p17.JPG',
    'retreat/p18.JPG',
    'retreat/p19.jpg',
    'retreat/p20.jpg',
    'retreat/p21.jpg',
    'retreat/p22.jpg',
    'retreat/p23.jpg',
    'retreat/p24.jpg',
    'retreat/p25.jpg',
  ],

  // Second Draft project
  seconddraft: [
    'seconddraft/PHOTO-2025-06-15-11-45-57 6.jpeg',
    'seconddraft/PHOTO-2025-06-15-11-45-57 7.jpeg',
    'seconddraft/PHOTO-2025-06-15-11-45-57.jpeg',
    'seconddraft/PHOTO-2025-06-15-11-45-57 3.jpeg',
    'seconddraft/PHOTO-2025-06-15-11-45-57 2.jpeg',
    'seconddraft/PHOTO-2025-06-15-11-45-57 4.jpeg',
    'seconddraft/PHOTO-2025-06-15-11-45-57 5.jpeg',
  ],

  // Ash and Amber project
  ashandamber: [
    "ashandamber/VEDICA'S ROOM-1.jpg",
    "ashandamber/VEDICA'S ROOM-2.jpg",
    "ashandamber/VEDICA'S ROOM-3.jpg",
    "ashandamber/VEDICA'S ROOM-4.jpg",
    "ashandamber/VEDICA'S ROOM-5.jpg",
  ],

  // Guak project
  guak: [
    'guak/44752329-4664-4949-8ebf-ae74f7471ead.JPG',
    'guak/IMG_0097.JPG',
    'guak/IMG_0098.JPG',
    'guak/IMG_0099.JPG',
    'guak/IMG_0100.JPG',
    'guak/IMG_0101.JPG',
  ],

  // Malabar Room project
  malabarroom: [
    'themalabarroom/525b7e13-6afd-48f2-a6ee-5d4d3e0863dd.JPG',
    'themalabarroom/56f4c8ed-8d6a-4967-b778-5bc10afd6b7c.JPG',
    'themalabarroom/5fb231ac-5df5-44ff-b7d3-cf04e6f7c9f3.JPG',
    'themalabarroom/918305b7-c3f5-42e5-a849-fd026b031917.JPG',
    'themalabarroom/a83065c4-bc8e-483c-ac3c-657de422696a.JPG',
    'themalabarroom/e74e1f0a-75a9-43c4-924c-c631170710a1.JPG',
  ],
};

export default IMAGE_CONFIG;

