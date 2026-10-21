# 📸 Image Usage Guide

## Your Uploaded Photos

```
assets/
├── vanrakshak/
│   └── van.jpeg ✓ Used in:
│       - Project Card #1
│       - Hero Preview Thumbnail
│       - Dashboard Tile (Hardware)
│       - Gallery
│
├── vision-stick/
│   └── vision.jpeg ✓ Used in:
│       - Project Card #2
│       - Hero Preview Thumbnail
│       - Gallery
│
├── kisan-credit/
│   └── kisan.jpeg ✓ Used in:
│       - Project Card #3
│       - Gallery
│
├── sanket-edge/
│   └── sanket.png ✓ Used in:
│       - Project Card #5 (wide)
│       - Gallery
│
├── field-visit/
│   ├── van-bhavan-1.jpg ✓ Used in:
│   │   - Hero Preview Thumbnail
│   │   - Gallery (Large)
│   │   - Field Visit Section
│   │
│   └── vanbhavab.jpeg ✓ Used in:
│       - Gallery
│
├── van-bhavan/
│   └── van-bhavan-01.jpg (stored, not currently displayed)
│
└── hero/
    └── profile.jpeg ✓ Used in:
        - Hero Main Photo
        - About Section Photo
```

---

## Current Display Map

| Section | Image File | Dimensions |
|---------|-----------|-----------|
| **Hero Main** | `assets/hero/profile.jpeg` | ~600x500px |
| **Hero Thumbnail 1** | `assets/vanrakshak/van.jpeg` | ~280x140px |
| **Hero Thumbnail 2** | `assets/field-visit/van-bhavan-1.jpg` | ~250x125px |
| **Hero Thumbnail 3** | `assets/vision-stick/vision.jpeg` | ~245x118px |
| **Project Card 1** | `assets/vanrakshak/van.jpeg` | 100% width |
| **Project Card 2** | `assets/vision-stick/vision.jpeg` | 100% width |
| **Project Card 3** | `assets/kisan-credit/kisan.jpeg` | 100% width |
| **Project Card 4** | (none - placeholder) | 100% width |
| **Project Card 5** | `assets/sanket-edge/sanket.png` | 100% width (wide) |
| **Dashboard Tile 1** | `assets/vanrakshak/van.jpeg` | 100% tile |
| **Gallery Item 1** | `assets/field-visit/van-bhavan-1.jpg` | 2x2 grid |
| **Gallery Item 2** | `assets/vision-stick/vision.jpeg` | 1x1 grid |
| **Gallery Item 3** | `assets/vanrakshak/van.jpeg` | 1x1 grid |
| **Gallery Item 4** | `assets/sanket-edge/sanket.png` | 1x1 grid |
| **Gallery Item 5** | `assets/kisan-credit/kisan.jpeg` | 1x1 grid |
| **Gallery Item 6** | `assets/field-visit/vanbhavab.jpeg` | 1x1 grid |
| **About Photo** | `assets/hero/profile.jpeg` | 230px max-width |

---

## Adding More Images

### For Urban Lake Project (empty)
1. Create/update: `assets/urban-lake/urban-lake.jpg`
2. Update in `index.html` line ~445:
   ```html
   <img src="assets/urban-lake/urban-lake.jpg" alt="Urban Lake..." class="proj-card-img" />
   ```

### For Gallery Items
1. Add image to appropriate folder
2. Add item to gallery in `index.html` around line 580-620
3. Use this template:
   ```html
   <div class="gallery-item" data-category="category" data-src="path/to/image.jpg">
     <img src="path/to/image.jpg" alt="Description" />
     <div class="gallery-cap">
       <span class="gallery-cap-tag">Category</span>
       <span class="gallery-cap-title">Title</span>
     </div>
   </div>
   ```

---

## Image Specifications

### Recommended Sizes
- **Project Cards**: 800×600px (16:10 aspect ratio)
- **Hero Preview Thumbnails**: 400×200px+ 
- **Gallery Full**: 1200×800px+
- **Gallery Thumbnails**: 600×600px
- **Portrait Photos**: 600×700px

### Formats Supported
- ✅ JPG / JPEG
- ✅ PNG
- ✅ WebP
- ✅ GIF

### Optimization
- Compress images for web (use TinyPNG or ImageOptim)
- Use next-gen formats (WebP) where possible
- Max file size: 500KB per image recommended

---

## Fallback Behavior

If an image fails to load:
1. Gallery item shows placeholder class styling
2. Project card shows gray background
3. No JS errors thrown (graceful degradation)

To test: Try temporarily renaming an image file and refresh the page.

---

## Live Preview

**Server Running:** `http://localhost:5500`

All images are now being served from your `/assets/` folders and will display:
- ✅ On local development
- ✅ When pushed to GitHub Pages
- ✅ When uploaded to any web host

