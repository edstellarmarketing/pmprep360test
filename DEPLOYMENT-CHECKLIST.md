# 🚀 Deployment Checklist - PMPrep360 Landing Page

## Pre-Deployment Tasks

### 1. Content Updates ✏️

#### Replace Placeholder Content
- [ ] **Phone Number** (appears 2x)
  - Location: Line ~950 in `index.html`
  - Find: `+1-XXX-XXX-XXXX`
  - Replace with: Your actual phone number

- [ ] **Email Address** (appears 2x)
  - Location: Line ~952 in `index.html`
  - Find: `support@pmprep360.com`
  - Verify or update to correct support email

#### Add Logo Images
- [ ] **Main Logo** (navbar)
  - Create folder: `images/`
  - Add file: `images/pmprep360-logo.png`
  - Update HTML line ~25:
    ```html
    <a href="#" class="logo">
        <img src="images/pmprep360-logo.png" alt="PMPrep360" height="40">
    </a>
    ```

- [ ] **Accreditation Badges** (5 images)
  - Add to `images/` folder:
    - `pmi-atp-badge.png`
    - `iso-9001-badge.png`
    - `iso-27001-badge.png`
    - `peoplecert-badge.png`
    - `axelos-badge.png`
  - Update HTML line ~385-395 with `<img>` tags

#### Add Testimonial Photos (Optional)
- [ ] Create `images/testimonials/` folder
- [ ] Add 3 professional headshots
- [ ] Update testimonial sections with photos

---

### 2. Form Configuration 📧

#### Backend Integration

**Option A: Using a Form Service (Recommended for Quick Launch)**

Services like Formspree, Basin, or Netlify Forms:

```html
<!-- Replace line ~980 in index.html -->
<form id="contactForm" class="contact-form" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
```

**Option B: Custom API Endpoint**

Update `js/main.js` around line 350:

```javascript
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('https://your-api.com/submit-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': 'your-csrf-token' // If using CSRF protection
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            alert('Thank you! We will contact you soon.');
            closeContactForm();
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please check your connection.');
        console.error('Form submission error:', error);
    }
});
```

#### Email Configuration
- [ ] Set up email notifications for form submissions
- [ ] Test with a real submission
- [ ] Configure auto-responder (optional)
- [ ] Set up CRM integration (optional)

---

### 3. Analytics & Tracking 📊

#### Google Analytics 4

Add before `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Google Tag Manager (Alternative)

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add after `<body>` tag:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

#### Facebook Pixel (If Running Ads)

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/></noscript>
```

#### Custom Event Tracking

Add to `js/main.js` for career track selections:

```javascript
function updateCareerTrack(roleKey) {
    // ... existing code ...
    
    // Track career track selection
    if (typeof gtag !== 'undefined') {
        gtag('event', 'career_track_selected', {
            'event_category': 'Career Tracks',
            'event_label': roleKey,
            'value': 1
        });
    }
    
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', 'CareerTrackSelected', {role: roleKey});
    }
}
```

---

### 4. SEO Configuration 🔍

#### Meta Tags

Add/update in `<head>` section of `index.html`:

```html
<!-- Primary Meta Tags -->
<title>PMP Certification Training - Lifetime Access | PMPrep360</title>
<meta name="title" content="PMP Certification Training - Lifetime Access | PMPrep360">
<meta name="description" content="Pass your PMP Certification on your first try with lifetime access. No subscriptions. 99.6% pass rate. PMI Premier ATP authorized. One payment, own it forever.">
<meta name="keywords" content="PMP certification, project management training, PMI ATP, PMP exam prep, lifetime access, no subscription">
<link rel="canonical" href="https://pmprep360.com/">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://pmprep360.com/">
<meta property="og:title" content="PMP Certification Training - Lifetime Access | PMPrep360">
<meta property="og:description" content="Pass your PMP Certification on your first try with lifetime access. No subscriptions. 99.6% pass rate. One payment, own it forever.">
<meta property="og:image" content="https://pmprep360.com/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://pmprep360.com/">
<meta property="twitter:title" content="PMP Certification Training - Lifetime Access | PMPrep360">
<meta property="twitter:description" content="Pass your PMP Certification on your first try with lifetime access. No subscriptions. 99.6% pass rate.">
<meta property="twitter:image" content="https://pmprep360.com/images/twitter-card.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

#### Schema Markup (JSON-LD)

Add before `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "PMPrep360",
  "description": "PMI Premier Authorized Training Partner offering lifetime access to PMP certification training",
  "url": "https://pmprep360.com",
  "logo": "https://pmprep360.com/images/pmprep360-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "Customer Service",
    "email": "support@pmprep360.com",
    "areaServed": "Worldwide",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/pmprep360",
    "https://www.linkedin.com/company/pmprep360",
    "https://twitter.com/pmprep360"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "699",
    "highPrice": "2499",
    "offerCount": "3"
  }
}
</script>
```

#### Sitemap.xml

Create `sitemap.xml` in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pmprep360.com/</loc>
    <lastmod>2026-01-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add other pages here -->
</urlset>
```

#### Robots.txt

Create `robots.txt` in root:

```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://pmprep360.com/sitemap.xml
```

---

### 5. Performance Optimization ⚡

#### Image Optimization
- [ ] Compress all images (TinyPNG, ImageOptim)
- [ ] Use WebP format for modern browsers
- [ ] Add `loading="lazy"` to images below fold
- [ ] Set explicit width/height on images

#### Code Minification

**CSS Minification:**
```bash
# Using online tool: https://cssminifier.com/
# Or command line:
npm install -g clean-css-cli
cleancss -o css/style.min.css css/style.css
```

**JavaScript Minification:**
```bash
# Using online tool: https://javascript-minifier.com/
# Or command line:
npm install -g terser
terser js/main.js -o js/main.min.js --compress --mangle
```

Update HTML to use minified files:
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

#### Font Optimization

Current font loading (already optimized):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

Optional: Self-host fonts for better performance

#### Enable GZIP Compression

**.htaccess** (Apache):
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>
```

**nginx.conf** (Nginx):
```nginx
gzip on;
gzip_types text/html text/css application/javascript application/json;
gzip_min_length 1000;
```

---

### 6. Security Configuration 🔒

#### SSL Certificate
- [ ] Install SSL certificate (Let's Encrypt free)
- [ ] Force HTTPS redirect
- [ ] Update all URLs to HTTPS

#### Security Headers

**.htaccess** (Apache):
```apache
Header set X-XSS-Protection "1; mode=block"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-Content-Type-Options "nosniff"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
```

**nginx.conf** (Nginx):
```nginx
add_header X-XSS-Protection "1; mode=block";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

#### Content Security Policy

Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;">
```

---

### 7. Hosting Setup 🌐

#### Option A: Netlify (Recommended - Free)

1. **Create account** at netlify.com
2. **Connect Git repository** or drag-and-drop files
3. **Configure:**
   - Build command: (leave empty for static)
   - Publish directory: `/` (root)
4. **Custom domain:**
   - Add domain: pmprep360.com
   - Configure DNS
   - SSL auto-enabled

**netlify.toml** (optional):
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
```

#### Option B: Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel --prod
```

3. **Configure domain** in Vercel dashboard

#### Option C: GitHub Pages

1. Create GitHub repository
2. Push files
3. Go to Settings → Pages
4. Select branch: `main`
5. Custom domain: Add CNAME file

#### Option D: Traditional Hosting (cPanel)

1. **Upload via FTP:**
   - Host: ftp.yourdomain.com
   - Username: your-username
   - Upload all files to `public_html/`

2. **File structure:**
```
public_html/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

---

### 8. Domain Configuration 🌍

#### DNS Settings

Point your domain to hosting:

**Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**Custom Server:**
```
Type: A
Name: @
Value: [Your Server IP]

Type: CNAME
Name: www
Value: yourdomain.com
```

#### Email Configuration

Set up email forwarding or Google Workspace:
```
Type: MX
Priority: 1
Value: aspmx.l.google.com
```

---

### 9. Testing Before Launch 🧪

Run through [TESTING.md](TESTING.md) checklist:

#### Critical Tests
- [ ] All 27 career tracks work
- [ ] Form submission works
- [ ] Analytics tracking fires
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Page loads < 2 seconds

#### Tools to Use
- [ ] **Google PageSpeed Insights**: https://pagespeed.web.dev/
- [ ] **GTmetrix**: https://gtmetrix.com/
- [ ] **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- [ ] **SSL Check**: https://www.ssllabs.com/ssltest/

---

### 10. Launch Day Checklist 🎉

#### Final Checks
- [ ] Remove any test/staging banners
- [ ] Verify all links work
- [ ] Test form submissions (3x)
- [ ] Check analytics in real-time
- [ ] Monitor server logs
- [ ] Verify DNS propagation (24-48 hours)

#### Communication
- [ ] Announce on social media
- [ ] Email existing subscribers
- [ ] Update Google Business Profile
- [ ] Submit to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

#### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure error alerts
- [ ] Set up Google Search Console
- [ ] Enable analytics real-time view

---

### 11. Post-Launch Tasks 📈

#### Week 1
- [ ] Monitor analytics daily
- [ ] Check for 404 errors
- [ ] Review form submissions
- [ ] A/B test different CTAs
- [ ] Gather user feedback

#### Month 1
- [ ] Analyze conversion rates
- [ ] Review heatmaps (Hotjar)
- [ ] Optimize underperforming sections
- [ ] Add testimonials from new customers
- [ ] Update career track data if needed

#### Ongoing
- [ ] Monthly analytics review
- [ ] Quarterly content updates
- [ ] Annual salary data refresh
- [ ] Add new career tracks as needed
- [ ] Update certifications when PMI changes

---

## 📋 Quick Launch Commands

### If Using Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### If Using Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### If Using Git

```bash
# Initialize repository
git init

# Add files
git add .

# Commit
git commit -m "Initial launch - PMP landing page with career tracks"

# Push to remote
git remote add origin https://github.com/yourusername/pmprep360.git
git push -u origin main
```

---

## 🆘 Troubleshooting

### Common Issues

**Issue:** Form not submitting
- Check console for errors
- Verify API endpoint URL
- Test with Postman first
- Check CORS settings

**Issue:** Career tracks not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Check console for JS errors
- Verify main.js loaded correctly
- Test in incognito mode

**Issue:** Slow page load
- Compress images
- Enable GZIP
- Use CDN for fonts
- Minify CSS/JS

**Issue:** Mobile layout broken
- Check viewport meta tag
- Test responsive CSS
- Verify media queries
- Use browser dev tools (F12 → Device toolbar)

---

## ✅ Final Pre-Launch Checklist

Print this and check off each item:

```
☐ Phone number updated (2 locations)
☐ Email address verified
☐ Logo images added
☐ Accreditation badges added
☐ Form submission configured
☐ Form tested 3x successfully
☐ Google Analytics installed
☐ Analytics tested (real-time view)
☐ Meta tags added
☐ Schema markup added
☐ Sitemap.xml created
☐ Robots.txt created
☐ SSL certificate installed
☐ HTTPS forced
☐ Security headers configured
☐ Images compressed
☐ Code minified (optional)
☐ GZIP enabled
☐ DNS configured
☐ Domain pointed to hosting
☐ All 27 career tracks tested
☐ Mobile responsive verified
☐ Cross-browser tested
☐ PageSpeed score 90+
☐ No console errors
☐ Forms sending emails
☐ Uptime monitoring set up
☐ Search Console configured
☐ Backup of site saved
☐ Launch announcement ready
☐ Team notified
☐ Customer support ready
```

---

## 🎉 You're Ready to Launch!

Once all checkboxes are complete:

1. **Flip the DNS switch** (if staged on subdomain)
2. **Announce the launch** on social media
3. **Monitor analytics closely** for first 24 hours
4. **Respond to form submissions** within 1 hour
5. **Celebrate!** 🎊

---

## 📞 Need Help?

If you run into issues during deployment:

1. Check [TESTING.md](TESTING.md) for specific test cases
2. Review [README.md](README.md) for technical documentation
3. Search browser console errors on Stack Overflow
4. Test in incognito mode to rule out cache issues

---

**Good luck with your launch! 🚀**