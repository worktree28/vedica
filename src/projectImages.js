/**
 * Project Images Configuration
 *
 * This file manages all project images with support for both:
 * 1. Local imports (development) - Vite handles bundling
 * 2. jsDelivr CDN (production) - Fast global delivery
 *
 * To switch between modes, set VITE_IMAGE_MODE environment variable:
 * - LOCAL: Use local imports (default for development)
 * - JSDELIVR: Use jsDelivr CDN (recommended for production)
 */

// Import local images for development (Vite will bundle these)
import trivarna1 from './assets/trivarna/p1.JPG';
import trivarna2 from './assets/trivarna/p2.JPG';
import trivarna3 from './assets/trivarna/p3.JPG';
import trivarna4 from './assets/trivarna/p4.JPG';
import trivarna5 from './assets/trivarna/p5.JPG';
import trivarna6 from './assets/trivarna/p6.JPG';
import trivarna7 from './assets/trivarna/p7.JPG';
import trivarna8 from './assets/trivarna/p8.JPG';
import trivarna9 from './assets/trivarna/p9.JPG';
import trivarna10 from './assets/trivarna/p10.JPG';
import trivarna11 from './assets/trivarna/p11.JPG';
import trivarna12 from './assets/trivarna/p12.JPG';
import trivarna13 from './assets/trivarna/p13.JPG';

import retreat1 from './assets/retreat/p1.JPG';
import retreat2 from './assets/retreat/p2.JPG';
import retreat3 from './assets/retreat/p3.JPG';
import retreat4 from './assets/retreat/p4.JPG';
import retreat6 from './assets/retreat/p6.JPG';
import retreat7 from './assets/retreat/p7.JPG';
import retreat8 from './assets/retreat/p8.JPG';
import retreat9 from './assets/retreat/p9.JPG';
import retreat10 from './assets/retreat/p10.JPG';
import retreat11 from './assets/retreat/p11.JPG';
import retreat13 from './assets/retreat/p13.JPG';
import retreat14 from './assets/retreat/p14.JPG';
import retreat15 from './assets/retreat/p15.JPG';
import retreat16 from './assets/retreat/p16.JPG';
import retreat17 from './assets/retreat/p17.JPG';
import retreat18 from './assets/retreat/p18.JPG';
import retreat19 from './assets/retreat/p19.jpg';
import retreat20 from './assets/retreat/p20.jpg';
import retreat21 from './assets/retreat/p21.jpg';
import retreat22 from './assets/retreat/p22.jpg';
import retreat23 from './assets/retreat/p23.jpg';
import retreat24 from './assets/retreat/p24.jpg';
import retreat25 from './assets/retreat/p25.jpg';

import seconddraft1 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57 2.jpeg';
import seconddraft2 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57 3.jpeg';
import seconddraft3 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57 4.jpeg';
import seconddraft4 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57 5.jpeg';
import seconddraft5 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57 6.jpeg';
import seconddraft6 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57 7.jpeg';
import seconddraft7 from './assets/seconddraft/PHOTO-2025-06-15-11-45-57.jpeg';

import ashandamber1 from "./assets/ashandamber/VEDICA'S ROOM-1.jpg";
import ashandamber2 from "./assets/ashandamber/VEDICA'S ROOM-2.jpg";
import ashandamber3 from "./assets/ashandamber/VEDICA'S ROOM-3.jpg";
import ashandamber4 from "./assets/ashandamber/VEDICA'S ROOM-4.jpg";
import ashandamber5 from "./assets/ashandamber/VEDICA'S ROOM-5.jpg";

import guak1 from './assets/guak/44752329-4664-4949-8ebf-ae74f7471ead.JPG';
import guak2 from './assets/guak/IMG_0097.JPG';
import guak3 from './assets/guak/IMG_0098.JPG';
import guak4 from './assets/guak/IMG_0099.JPG';
import guak5 from './assets/guak/IMG_0100.JPG';
import guak6 from './assets/guak/IMG_0101.JPG';

import malabarroom1 from './assets/themalabarroom/525b7e13-6afd-48f2-a6ee-5d4d3e0863dd.JPG';
import malabarroom2 from './assets/themalabarroom/56f4c8ed-8d6a-4967-b778-5bc10afd6b7c.JPG';
import malabarroom3 from './assets/themalabarroom/5fb231ac-5df5-44ff-b7d3-cf04e6f7c9f3.JPG';
import malabarroom4 from './assets/themalabarroom/918305b7-c3f5-42e5-a849-fd026b031917.JPG';
import malabarroom5 from './assets/themalabarroom/a83065c4-bc8e-483c-ac3c-657de422696a.JPG';
import malabarroom6 from './assets/themalabarroom/e74e1f0a-75a9-43c4-924c-c631170710a1.JPG';

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

// Revised Retreat project images array
const retreatImages = [
  retreat1,
  retreat2,
  retreat3,
  retreat4,
  retreat6,
  retreat7,
  retreat8,
  retreat9,
  retreat10,
  retreat11,
  retreat13,
  retreat14,
  retreat15,
  retreat16,
  retreat17,
  retreat18,
  retreat19,
  retreat20,
  retreat21,
  retreat22,
  retreat23,
  retreat24,
  retreat25,
];

// The Second Draft project images array
const seconddraftImages = [
  seconddraft5,
  seconddraft6,
  seconddraft7,
  seconddraft2,
  seconddraft1,
  seconddraft3,
  seconddraft4,

];

// Ash And Amber project images array
const ashandamberImages = [
  ashandamber1,
  ashandamber2,
  ashandamber3,
  ashandamber4,
  ashandamber5,
];

// Guak – Indo-Mexican Eatery project images array
const guakImages = [guak1, guak2, guak3, guak4, guak5, guak6];

// Malabar Room project images array
const malabarroomImages = [
  malabarroom1,
  malabarroom2,
  malabarroom3,
  malabarroom4,
  malabarroom5,
  malabarroom6,
];

// Export all image arrays
export {
  trivarnaImages,
  retreatImages,
  seconddraftImages,
  ashandamberImages,
  guakImages,
  malabarroomImages,
};

