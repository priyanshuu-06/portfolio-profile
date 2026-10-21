# Priyanshu Patil — Engineering Portfolio

A complete, responsive portfolio website. Open `index.html` in any browser — no build step required.

---

## How to add your photographs

Drop images into the matching folder below and name them exactly as shown. The site will pick them up automatically.

```
assets/
├── hardware/
│   ├── profile.jpeg          ✅ supplied — used in hero + about
│   ├── ieee-image.jpeg       ✅ supplied — used in gallery
│   ├── hardware-1.jpg        ← add: any hardware prototype photo
│   ├── raspberry-pi.jpg      ← add: Raspberry Pi setup
│   └── lora-module.jpg       ← add: LoRa module
│
├── vanrakshak/
│   ├── vanrakshak-main.jpg   ← add: best Vanrakshak photo (project card)
│   ├── vanrakshak-1.jpg      ← add: edge node hardware
│   ├── vanrakshak-2.jpg      ← add: LoRa setup
│   └── vanrakshak-3.jpg      ← add: sensor integration
│
├── vision-stick/
│   └── vision-stick-main.jpg ← add: Vision Stick prototype photo (project card)
│
├── satellite-projects/
│   ├── urban-lake-main.jpg   ← add: satellite map / GEE screenshot (project card)
│   ├── kisan-credit-main.jpg ← add: Kisan Credit screenshot (project card)
│   └── ndvi-map.jpg          ← add: NDVI analysis output screenshot
│
├── field-visit/
│   ├── van-bhavan-1.jpg      ✅ supplied — used in field visit section + gallery
│   ├── van-bhavan-2.jpg      ← add: second Van Bhavan photo
│   └── van-bhavan-3.jpg      ← add: third Van Bhavan photo
│
├── achievements/
│   ├── national-hackathon-cert.jpg  ← add: Skillstation hackathon certificate
│   ├── hacksagon-cert.jpg           ← add: Hacksagon certificate
│   └── hackathon-cert.jpg           ← add: any hackathon photo for gallery
│
└── certificates/
    ├── patent-vision-stick.jpg/.pdf    ← add when available
    ├── patent-vanrakshak-lora.jpg/.pdf ← add when available
    ├── patent-vanrakshak-lpwan.jpg/.pdf← add when available
    ├── national-hackathon-2026.jpg/.pdf← add when available
    └── hacksagon-2026.jpg/.pdf         ← add when available
```

After adding a certificate file, open `data/certificates.js` and set `available: true` for that entry.

---

## Resume

Place your resume PDF at:
```
assets/Priyanshu_Patil_Resume.pdf
```

All three "Download Resume" buttons will then work automatically.

---

## Updating project details

Edit `data/projects.js` — each project has clearly labelled fields for problem, objective, hardware, software, results, and future work.

## Updating GitHub repos

Edit `data/github-repos.js` to add, remove, or update repository cards.

## Updating certificates list

Edit `data/certificates.js` to add new documents.

---

## File structure

```
index.html          — complete single-page portfolio
css/style.css       — all styles, design tokens, responsive rules
js/main.js          — all interactions (nav, modals, gallery, lightbox, form, GitHub)
data/projects.js    — project case study content
data/certificates.js— certificates and document metadata
data/github-repos.js— GitHub repository cards
assets/             — all images and documents
```
