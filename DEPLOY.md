# Red and In — Deployment Guide

## What's in this folder

```
red-and-in/
├── index.html          ← App entry point
├── package.json        ← Project config
├── vite.config.js      ← Build config
├── src/
│   ├── main.jsx        ← React entry
│   └── App.jsx         ← The full app
└── public/
    ├── manifest.json   ← Makes it installable as a PWA
    └── icon.svg        ← App icon (see step 1 below)
```

---

## Step 1 — Create app icons (5 minutes)

You need two PNG icon files: `icon-192.png` and `icon-512.png`

1. Open the file `public/icon.svg` in a browser
2. Take a screenshot, or use a free converter like **svgtopng.com**
3. Save as `public/icon-192.png` (192×192 pixels)
4. Save as `public/icon-512.png` (512×512 pixels)

Or use any archery image you like — just name them icon-192.png and icon-512.png.

---

## Step 2 — Upload to GitHub (5 minutes)

1. Go to **github.com** and create a free account if you don't have one
2. Click the **+** button → **New repository**
3. Name it `red-and-in`, leave it Public, click **Create repository**
4. Click **uploading an existing file**
5. Drag the entire contents of this folder into the upload area
6. Click **Commit changes**

---

## Step 3 — Deploy on Vercel (5 minutes)

1. Go to **vercel.com** and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `red-and-in` repository
4. Vercel will detect it's a Vite project automatically
5. Click **Deploy**
6. In about 60 seconds you'll get a link like `red-and-in.vercel.app`

---

## Step 4 — Share with club members

Send them the link. On their phone:

**iPhone:** Open the link in Safari → tap the Share button (box with arrow) → tap **Add to Home Screen** → tap **Add**

**Android:** Open in Chrome → tap the three dots menu → tap **Add to Home screen**

The app will appear on their home screen with the Red and In icon. It works offline once installed.

---

## Updating the app

Whenever you want to add new features, just replace App.jsx in GitHub with the new version. Vercel automatically rebuilds and deploys within a minute.

---

## Custom domain (optional)

If you want `redandin.com` or similar:
1. Buy the domain from Namecheap or GoDaddy (~£10/year)
2. In Vercel → your project → Settings → Domains → add your domain
3. Follow the DNS instructions Vercel gives you

---

## Cost summary

- GitHub: **Free**
- Vercel hosting: **Free** (up to 100GB bandwidth/month — more than enough for a club)
- Custom domain: ~£10/year (optional)
- Apple Developer account (if you later want App Store): £99/year
- Google Play (if you later want Android store): £20 one-time

