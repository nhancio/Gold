# OMV Gold Buyers - Deployment Guide

## Netlify Deployment Configuration

### Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: `18`

### Environment Variables
No environment variables required for this project.

### Netlify Configuration Files
The project includes the following configuration files:

1. **netlify.toml** - Main Netlify configuration
2. **public/_redirects** - SPA routing redirects
3. **package.json** - Updated with proper name and homepage

### Deployment Steps

1. **Connect Repository**
   - Connect your GitHub repository to Netlify
   - Or drag and drop the `dist` folder for manual deployment

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Deploy**
   - Netlify will automatically build and deploy
   - The site will be available at your Netlify subdomain

### Troubleshooting

If you see an empty screen on Netlify:

1. **Check Build Logs**
   - Go to Netlify dashboard → Deploys → Click on latest deploy
   - Check if build completed successfully

2. **Verify Build Output**
   - Ensure `dist` folder contains `index.html` and assets
   - Check that all files are properly generated

3. **Check Console Errors**
   - Open browser developer tools
   - Look for JavaScript errors in console
   - Check network tab for failed requests

4. **Common Issues**
   - Missing `_redirects` file (fixed)
   - Incorrect build command (should be `npm run build`)
   - Wrong publish directory (should be `dist`)
   - Node version mismatch (use Node 18)

### File Structure After Build
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── logo white copy.png
```

### Performance Optimizations
- Images are optimized by Vite
- CSS and JS are minified and compressed
- Assets are cached with proper headers
- SPA routing is handled with redirects

### Security Headers
The netlify.toml includes security headers:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Manual Deployment
If automatic deployment fails:

1. Run `npm run build` locally
2. Upload the `dist` folder to Netlify
3. Set up redirects manually in Netlify dashboard
