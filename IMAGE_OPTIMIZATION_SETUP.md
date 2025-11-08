# Image Optimization Setup Guide

## Quick Start

This project now supports optimized image loading via jsDelivr CDN for production deployments.

### Development (Local Images)
```bash
npm run dev
```
Images will load from your local `src/assets` folder.

### Production (jsDelivr CDN)
```bash
VITE_IMAGE_MODE=JSDELIVR npm run build
npm run preview
```
Images will load from jsDelivr CDN for faster global delivery.

## How It Works

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Image Loading Flow                       │
└─────────────────────────────────────────────────────────────┘

Development Mode (LOCAL):
  App Component → OptimizedImage → Local Assets (/src/assets)
                                    ↓
                              Vite Dev Server
                                    ↓
                              Browser Display

Production Mode (JSDELIVR):
  App Component → OptimizedImage → jsDelivr CDN
                                    ↓
                    cdn.jsdelivr.net/gh/user/repo@branch/...
                                    ↓
                              Browser Display
```

### Key Components

1. **imageConfig.js** (`src/config/imageConfig.js`)
   - Central configuration for image loading
   - Switches between LOCAL and JSDELIVR modes
   - Provides helper functions for image URLs

2. **OptimizedImage.jsx** (`src/components/OptimizedImage.jsx`)
   - React component for optimized image loading
   - Features lazy loading, error handling, placeholders
   - Automatically uses correct image source based on mode

3. **Environment Variables** (`.env.production`)
   - Controls image loading mode
   - Stores GitHub repository information

## Step-by-Step Setup

### Step 1: Update GitHub Repository Info

Edit `src/config/imageConfig.js`:

```javascript
github: {
  user: 'your-github-username',  // ← Update this
  repo: 'your-repo-name',         // ← Update this
  branch: 'main',                 // ← Update if different
}
```

### Step 2: Ensure Images Are in Repository

Make sure all images in `src/assets/` are committed and pushed to GitHub:

```bash
git add src/assets/
git commit -m "Add project images"
git push origin main
```

### Step 3: Test Locally with jsDelivr Mode

```bash
# Build with jsDelivr mode
VITE_IMAGE_MODE=JSDELIVR npm run build

# Preview the build
npm run preview
```

Open http://localhost:4173 and verify:
- ✅ All images load correctly
- ✅ No 404 errors in browser console
- ✅ Images load from cdn.jsdelivr.net (check Network tab)

### Step 4: Deploy to Production

When deploying, ensure `VITE_IMAGE_MODE=JSDELIVR` is set in your hosting environment.

**For Vercel:**
```bash
# Add environment variable in Vercel dashboard
VITE_IMAGE_MODE=JSDELIVR
```

**For Netlify:**
```bash
# Add to netlify.toml or dashboard
[build.environment]
  VITE_IMAGE_MODE = "JSDELIVR"
```

**For other hosts:**
Set the environment variable according to your hosting provider's documentation.

## Using OptimizedImage Component

### Basic Usage

Replace standard `<img>` tags with `<OptimizedImage>`:

**Before:**
```jsx
<img 
  src={landingImage} 
  alt="Landing" 
  className="hero-image"
/>
```

**After:**
```jsx
import OptimizedImage from './components/OptimizedImage';

<OptimizedImage 
  src="landing.jpeg"  // Path relative to src/assets/
  alt="Landing" 
  className="hero-image"
  priority={true}     // For above-the-fold images
/>
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Image path relative to `src/assets/` or local import |
| `alt` | string | '' | Alt text for accessibility |
| `className` | string | '' | CSS classes |
| `lazy` | boolean | true | Enable lazy loading |
| `priority` | boolean | false | Disable lazy loading for critical images |
| `loading` | string | auto | Native loading attribute ('lazy' \| 'eager') |
| `onClick` | function | - | Click handler |
| `style` | object | - | Inline styles |

### Examples

**Critical Hero Image (No Lazy Loading):**
```jsx
<OptimizedImage 
  src="landing.jpeg"
  alt="Hero section"
  priority={true}
  className="w-full h-screen object-cover"
/>
```

**Gallery Images (With Lazy Loading):**
```jsx
{images.map((img, index) => (
  <OptimizedImage 
    key={index}
    src={img}
    alt={`Gallery image ${index + 1}`}
    lazy={true}
    className="gallery-item"
    onClick={() => openModal(index)}
  />
))}
```

**Thumbnail Images:**
```jsx
<OptimizedImage 
  src="trivarna/p1.JPG"
  alt="Thumbnail"
  lazy={true}
  className="w-16 h-16 rounded"
/>
```

## Migration Guide

### Migrating Existing Images

**Current Code (App.jsx):**
```jsx
import landingImage from './assets/landing.jpeg';

<img src={landingImage} alt="Landing" />
```

**Migrated Code:**
```jsx
import OptimizedImage from './components/OptimizedImage';

<OptimizedImage src="landing.jpeg" alt="Landing" priority={true} />
```

### Migrating Project Images

**Current Code (projectImages.js):**
```jsx
import trivarna1 from './assets/trivarna/p1.JPG';

const trivarnaImages = [trivarna1, trivarna2, ...];
```

**Option 1: Keep Local Imports (Recommended for Development)**
```jsx
// Keep existing imports for LOCAL mode
import trivarna1 from './assets/trivarna/p1.JPG';

const trivarnaImages = [trivarna1, trivarna2, ...];
```

**Option 2: Use Path Strings (For JSDELIVR Mode)**
```jsx
import { IMAGE_PATHS } from './config/imageConfig';

const trivarnaImages = IMAGE_PATHS.trivarna;
```

## Performance Optimization Tips

### 1. Prioritize Critical Images

Only set `priority={true}` for above-the-fold images:
- Hero/landing image
- Logo
- First visible project image

### 2. Optimize Image Files

Before committing images:
- **Resize**: Scale to appropriate dimensions (max 1920px width)
- **Compress**: Use tools like ImageOptim, TinyPNG, or Squoosh
- **Format**: Consider WebP for better compression
- **Target Size**: < 200KB for regular images, < 500KB for hero images

### 3. Use Lazy Loading

Enable lazy loading for all images except critical ones:
```jsx
<OptimizedImage lazy={true} ... />
```

### 4. Preload Critical Images

For the most important images, add preload hints in `index.html`:
```html
<link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/user/repo@main/src/assets/landing.jpeg" />
```

## Troubleshooting

### Images Not Loading in Production

**Problem:** Images show placeholder or 404 errors

**Solutions:**
1. Verify repository is public (jsDelivr requires public repos)
2. Check GitHub username, repo name, and branch in `imageConfig.js`
3. Ensure images are committed and pushed to GitHub
4. Wait 5-10 minutes for jsDelivr cache to update
5. Try accessing image URL directly: `https://cdn.jsdelivr.net/gh/user/repo@main/src/assets/image.jpg`

### Images Load Slowly

**Problem:** Images take long to load even with CDN

**Solutions:**
1. Optimize image file sizes (compress and resize)
2. Check jsDelivr status: https://status.jsdelivr.com/
3. Verify lazy loading is enabled for non-critical images
4. Use browser DevTools Network tab to identify bottlenecks

### Mixed Content Errors

**Problem:** HTTPS site loading HTTP images

**Solutions:**
1. Ensure jsDelivr URLs use HTTPS (they should by default)
2. Check for hardcoded HTTP URLs in code
3. Verify hosting provider supports HTTPS

### Cache Issues

**Problem:** Old images showing after update

**Solutions:**
1. Use specific commit hash instead of branch name:
   ```javascript
   branch: 'abc123def456',  // commit hash
   ```
2. Purge jsDelivr cache via their API
3. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

## Testing Checklist

Before deploying to production:

- [ ] All images load correctly in development mode
- [ ] All images load correctly in production build (jsDelivr mode)
- [ ] No 404 errors in browser console
- [ ] Images load from cdn.jsdelivr.net (check Network tab)
- [ ] Lazy loading works (images load as you scroll)
- [ ] Critical images load immediately
- [ ] Error placeholders show for missing images
- [ ] Images work on mobile devices
- [ ] Images work on slow network (throttle in DevTools)
- [ ] PageSpeed Insights score improved

## Monitoring

### Performance Metrics

Track these metrics before and after optimization:

- **Largest Contentful Paint (LCP)**: Should improve by 200-500ms
- **First Contentful Paint (FCP)**: Should improve by 100-300ms
- **Total Page Size**: Should reduce if images are optimized
- **Number of Requests**: May increase slightly (CDN requests)
- **Load Time**: Should improve by 30-50%

### Tools

- Google PageSpeed Insights: https://pagespeed.web.dev/
- Chrome DevTools Lighthouse
- WebPageTest: https://www.webpagetest.org/

## Support

For issues or questions:
1. Check this guide and JSDELIVR_OPTIMIZATION.md
2. Review browser console for errors
3. Test with different browsers and devices
4. Check jsDelivr status: https://status.jsdelivr.com/

---

**Last Updated:** 2025-11-08  
**Status:** ✅ Ready for Production

