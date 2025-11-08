# TODO Before Deployment - SEO Checklist

## Critical Tasks

### 1. Update Domain URLs
Replace all instances of `https://www.thetexturetrove.com` with your actual domain in:
- [ ] `index.html` - All meta tags
- [ ] `public/sitemap.xml` - All URL entries

### 2. Create Social Media Images
Create and add these images to the `/public` folder:

- [ ] **og-image.jpg** (1200x630px)
  - For Facebook, LinkedIn, and other Open Graph platforms
  - Should be a high-quality project image with your logo
  - File size: < 1MB
  - Location: `/public/og-image.jpg`

- [ ] **twitter-image.jpg** (1200x600px)
  - For Twitter cards
  - Should be a high-quality project image with your logo
  - File size: < 1MB
  - Location: `/public/twitter-image.jpg`

**Design Tips:**
- Use your best project photo
- Add The Texture Trove logo in a corner
- Include text overlay: "Boutique Interior Design Studio | Kolkata"
- Ensure text is readable at small sizes
- Use high contrast for visibility

### 3. Verify Business Information
Double-check these details in `index.html`:

- [ ] Phone number: +918100355234
- [ ] Email: thetexturetrove@gmail.com
- [ ] Address: Blob CoWorking Space, Kolkata
- [ ] Postal code: Update "700000" to actual postal code
- [ ] Business hours: Verify "10:00-18:00, Mon-Sat"
- [ ] Coordinates: 22.594607, 88.3970224

### 4. Set Up External Services

- [ ] **Google Search Console**
  1. Verify domain ownership
  2. Submit sitemap.xml
  3. Monitor for crawl errors

- [ ] **Google My Business**
  1. Create/claim business listing
  2. Add photos
  3. Add business hours
  4. Add services
  5. Encourage client reviews

- [ ] **Google Analytics** (Optional but recommended)
  1. Create GA4 property
  2. Add tracking code to index.html
  3. Set up conversion goals

- [ ] **Bing Webmaster Tools** (Optional)
  1. Verify domain
  2. Submit sitemap

### 5. SSL Certificate
- [ ] Ensure HTTPS is enabled on your domain
- [ ] Update all URLs to use https:// (not http://)
- [ ] Set up automatic HTTP to HTTPS redirect

### 6. Test Before Launch

- [ ] **Mobile Responsiveness**
  - Test on actual mobile devices
  - Use Chrome DevTools mobile emulator
  - Check all breakpoints

- [ ] **Page Speed**
  - Run Google PageSpeed Insights
  - Aim for 90+ score on mobile and desktop
  - Optimize any flagged issues

- [ ] **SEO Validation**
  - Use Google Rich Results Test for schema validation
  - Check meta tags with Facebook Sharing Debugger
  - Validate with Twitter Card Validator

- [ ] **Accessibility**
  - Run WAVE accessibility checker
  - Ensure all images have alt text
  - Check keyboard navigation

- [ ] **Cross-Browser Testing**
  - Chrome
  - Safari
  - Firefox
  - Edge

### 7. Content Review

- [ ] Proofread all text for typos
- [ ] Verify all project information is accurate
- [ ] Check all links work (especially portfolio link)
- [ ] Verify contact information is correct
- [ ] Test contact forms/links

### 8. Image Optimization

- [ ] Compress all project images (use TinyPNG or similar)
- [ ] Consider converting to WebP format for better performance
- [ ] Ensure images are properly sized (not oversized)
- [ ] Add descriptive filenames (e.g., "trivarna-living-room-kolkata.jpg")

## Optional Enhancements

### Content Marketing
- [ ] Set up a blog section
- [ ] Write 3-5 initial blog posts about interior design
- [ ] Create project case studies

### Social Media
- [ ] Set up Instagram Business account
- [ ] Create Facebook Business Page
- [ ] Add Pinterest for visual content
- [ ] Create LinkedIn Company Page

### Local SEO
- [ ] Get listed in local business directories
- [ ] Create Justdial listing
- [ ] Create IndiaMART listing
- [ ] Join local chamber of commerce

### Performance
- [ ] Set up CDN for images (Cloudinary, ImageKit, etc.)
- [ ] Enable Gzip compression on server
- [ ] Set up browser caching headers
- [ ] Minify CSS and JavaScript

## Post-Launch Tasks

### Week 1
- [ ] Monitor Google Search Console for errors
- [ ] Check analytics for traffic
- [ ] Test all forms and contact methods
- [ ] Monitor page load speed

### Month 1
- [ ] Review keyword rankings
- [ ] Analyze user behavior in analytics
- [ ] Collect and respond to any client feedback
- [ ] Update sitemap if content changed

### Ongoing
- [ ] Add new projects as completed
- [ ] Update portfolio regularly
- [ ] Respond to reviews
- [ ] Monitor and improve SEO rankings
- [ ] Create fresh content (blog posts, case studies)

## Quick Reference

### Tools to Use
- **SEO Testing**: Google Search Console, Bing Webmaster Tools
- **Schema Validation**: Google Rich Results Test
- **Social Media Preview**: Facebook Sharing Debugger, Twitter Card Validator
- **Page Speed**: Google PageSpeed Insights, GTmetrix
- **Accessibility**: WAVE, axe DevTools
- **Image Compression**: TinyPNG, Squoosh, ImageOptim
- **Mobile Testing**: BrowserStack, Chrome DevTools

### Important URLs
- Sitemap: `https://yourdomain.com/sitemap.xml`
- Robots: `https://yourdomain.com/robots.txt`
- Google Search Console: https://search.google.com/search-console
- Google My Business: https://business.google.com
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

## Notes
- Keep this checklist updated as you complete tasks
- Document any issues or changes needed
- Save all login credentials securely
- Keep backup of all original images

