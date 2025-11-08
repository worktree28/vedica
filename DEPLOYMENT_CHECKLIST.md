# Deployment Checklist - jsDelivr Optimization

## Pre-Deployment Checklist

### 1. Repository Setup ✓

- [ ] Repository is public on GitHub (jsDelivr requires public repos)
- [ ] All images in `src/assets/` are committed
- [ ] All images are pushed to GitHub
- [ ] Repository is accessible at: `https://github.com/hmishra/vedica`

### 2. Local Testing ✓

- [ ] Run development server: `npm run dev`
- [ ] Verify all images load correctly in development
- [ ] Build for production: `npm run build`
- [ ] Preview production build: `npm run preview`
- [ ] Open http://localhost:4173 and verify:
  - [ ] All images load correctly
  - [ ] Images load from cdn.jsdelivr.net (check Network tab)
  - [ ] No 404 errors in browser console
  - [ ] Lazy loading works (scroll to test)
  - [ ] Error placeholders work (test with invalid image)

### 3. Image Optimization ✓

- [ ] Images are compressed (< 200KB for regular, < 500KB for hero)
- [ ] Images are properly sized (max 1920px width)
- [ ] Image formats are web-friendly (JPG, PNG, WebP)
- [ ] File names don't have special characters or spaces

### 4. Performance Testing ✓

- [ ] Run Lighthouse in Chrome DevTools
- [ ] Performance score > 85 (mobile), > 95 (desktop)
- [ ] LCP < 2.5s
- [ ] FCP < 1.8s
- [ ] CLS < 0.1
- [ ] No console errors or warnings

## Deployment Steps

### For GitHub Pages (Recommended)

1. **Push to Main Branch**

   ```bash
   git add .
   git commit -m "Deploy with jsDelivr optimization"
   git push origin main
   ```

2. **GitHub Actions Deploys Automatically**

   - Workflow is already configured in `.github/workflows/main.yml`
   - No environment variables needed!

3. **Verify**
   - Visit your GitHub Pages URL
   - Check Network tab for cdn.jsdelivr.net requests
   - Run PageSpeed Insights

### For Vercel

1. **Deploy**

   ```bash
   git push origin main
   # Or use Vercel CLI
   vercel --prod
   ```

   No environment variables needed!

2. **Verify**
   - Visit deployed URL
   - Check Network tab for cdn.jsdelivr.net requests
   - Run PageSpeed Insights

### For Netlify

1. **Deploy**

   ```bash
   git push origin main
   # Or use Netlify CLI
   netlify deploy --prod
   ```

   No environment variables needed!

2. **Verify**
   - Visit deployed URL
   - Check Network tab for cdn.jsdelivr.net requests
   - Run PageSpeed Insights

### For Other Hosting Providers

1. **Build Locally**

   ```bash
   npm run build
   ```

2. **Upload**

   - Upload the `dist` folder to your hosting provider

3. **Verify**
   - Visit deployed URL
   - Check Network tab for cdn.jsdelivr.net requests

## Post-Deployment Verification

### Immediate Checks (Within 5 minutes)

- [ ] Site loads without errors
- [ ] All images are visible
- [ ] No 404 errors in browser console
- [ ] Images load from cdn.jsdelivr.net (check Network tab)
- [ ] Fonts load correctly
- [ ] Mobile view works correctly
- [ ] Desktop view works correctly

### Performance Checks (Within 30 minutes)

- [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev/

  - [ ] Mobile score > 85
  - [ ] Desktop score > 95
  - [ ] LCP < 2.5s
  - [ ] FCP < 1.8s
  - [ ] CLS < 0.1

- [ ] Run GTmetrix: https://gtmetrix.com/

  - [ ] Performance grade A or B
  - [ ] Structure grade A or B
  - [ ] Load time < 3s

- [ ] Test on Real Devices
  - [ ] iPhone/iOS Safari
  - [ ] Android Chrome
  - [ ] Desktop Chrome
  - [ ] Desktop Firefox
  - [ ] Desktop Safari

### CDN Verification

- [ ] Open browser DevTools → Network tab
- [ ] Filter by "Img"
- [ ] Verify images load from: `cdn.jsdelivr.net/gh/{user}/{repo}@{branch}/`
- [ ] Check response headers for CDN cache hits
- [ ] Verify image load times (should be < 500ms)

### Functional Testing

- [ ] Hero image loads immediately (priority image)
- [ ] Gallery images lazy load as you scroll
- [ ] Image modal/lightbox works correctly
- [ ] Thumbnails load correctly
- [ ] Logo and branding images load
- [ ] All project images display correctly

## Troubleshooting

### Images Not Loading

**Symptom**: Broken image icons or placeholders

**Solutions**:

1. Check browser console for 404 errors
2. Verify GitHub repo is public
3. Confirm images are pushed to GitHub
4. Check GitHub username/repo/branch in `imageConfig.js`
5. Wait 5-10 minutes for jsDelivr cache to update
6. Try accessing image URL directly in browser

**Test URL Format**:

```
https://cdn.jsdelivr.net/gh/{user}/{repo}@{branch}/src/assets/{image-path}
```

### Slow Image Loading

**Symptom**: Images take > 2 seconds to load

**Solutions**:

1. Compress images (use TinyPNG, ImageOptim, or Squoosh)
2. Resize images to appropriate dimensions
3. Check jsDelivr status: https://status.jsdelivr.com/
4. Verify lazy loading is enabled
5. Check network throttling in DevTools

### Mixed Content Errors

**Symptom**: HTTPS site showing HTTP warnings

**Solutions**:

1. Ensure all jsDelivr URLs use HTTPS
2. Check for hardcoded HTTP URLs in code
3. Verify hosting provider supports HTTPS

### Cache Issues

**Symptom**: Old images showing after update

**Solutions**:

1. Use specific commit hash instead of branch name
2. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
3. Wait for jsDelivr cache to expire (24 hours)
4. Purge jsDelivr cache via API

## Rollback Plan

If issues occur, you can quickly rollback:

### Option 1: Disable jsDelivr (Quick)

Edit `src/config/imageConfig.js`:

```javascript
mode: 'LOCAL',  // Force local mode
```

Then rebuild and redeploy:

```bash
npm run build
# Redeploy
```

### Option 2: Revert Fonts Only

Replace font links in `index.html` with Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Option 3: Full Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

## Monitoring Setup

### Set Up Alerts

1. **Uptime Monitoring**

   - Use UptimeRobot, Pingdom, or similar
   - Monitor main URL
   - Alert on downtime

2. **Performance Monitoring**

   - Use Google Search Console
   - Monitor Core Web Vitals
   - Set up weekly reports

3. **CDN Monitoring**
   - Subscribe to jsDelivr status updates
   - Check https://status.jsdelivr.com/ weekly

### Regular Checks (Weekly)

- [ ] Run PageSpeed Insights
- [ ] Check Google Search Console for errors
- [ ] Review Core Web Vitals in Search Console
- [ ] Check jsDelivr status
- [ ] Review browser console for errors

## Success Criteria

Your deployment is successful when:

✅ **All images load correctly** from cdn.jsdelivr.net  
✅ **PageSpeed score** > 85 (mobile), > 95 (desktop)  
✅ **LCP** < 2.5 seconds  
✅ **FCP** < 1.8 seconds  
✅ **CLS** < 0.1  
✅ **No console errors** related to images or fonts  
✅ **Mobile and desktop** views work correctly  
✅ **Lazy loading** works as expected  
✅ **Load time** < 3 seconds on 3G

## Next Steps After Deployment

1. **Monitor Performance**

   - Check PageSpeed Insights daily for first week
   - Review Core Web Vitals in Google Search Console
   - Monitor user feedback

2. **Optimize Further** (Optional)

   - Convert images to WebP format
   - Implement responsive images with srcset
   - Add service worker for offline support
   - Implement critical CSS

3. **Document**
   - Note deployment date and performance metrics
   - Document any issues encountered
   - Update team on new optimization features

## Support

If you encounter issues:

1. Check browser console for errors
2. Review `OPTIMIZATION_SUMMARY.md`
3. Check `IMAGE_OPTIMIZATION_SETUP.md`
4. Test with different browsers/devices
5. Verify jsDelivr status: https://status.jsdelivr.com/

---

**Last Updated**: 2025-11-08  
**Status**: Ready for Deployment  
**Estimated Time**: 30-60 minutes for full deployment and verification
