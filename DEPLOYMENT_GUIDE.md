# 🚀 Deployment Guide — Priyanshu Patil Portfolio

Your portfolio is ready to go live! Choose one of these free deployment options:

---

## **OPTION 1: GitHub Pages (Recommended - 100% Free)**

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create repository: `your-username.github.io` (replace with your username)
   - Example: `priyanshuu-06.github.io`
3. Click **Create Repository**

### Step 2: Push Your Code to GitHub
Run these commands in PowerShell:

```powershell
cd "d:\portfolio profile"

# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username**

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to **Pages** section
3. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Click **Save**

### Result
Your portfolio will be live at: **https://your-username.github.io/**

---

## **OPTION 2: Netlify (Very Easy - Free Tier)**

### Step 1: Deploy via Netlify CLI
```powershell
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Go to your project
cd "d:\portfolio profile"

# Deploy
netlify deploy --prod --dir=.
```

### Step 2: Follow Prompts
- Select "Create & configure a new site"
- Choose a site name (e.g., `priyanshu-patil-portfolio`)
- Confirm deployment

### Result
Your portfolio will be live at: **https://your-site-name.netlify.app/**

---

## **OPTION 3: Vercel (Free - Very Fast)**

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project**
3. Select **Import Git Repository**
4. Paste your GitHub repo URL
5. Click **Import**

### Result
Auto-deploys every time you push to GitHub!

---

## **Quick Comparison**

| Platform | Cost | Setup Time | Custom Domain | Auto-Deploy |
|----------|------|------------|--------------|-------------|
| GitHub Pages | Free | 5 min | Yes | Yes |
| Netlify | Free | 2 min | Yes | Yes |
| Vercel | Free | 3 min | Yes | Yes |

---

## **RECOMMENDED: GitHub Pages Setup (Fastest)**

### Quick Setup in 3 Commands:

```powershell
cd "d:\portfolio profile"

# 1. Add your GitHub repo
git remote add origin https://github.com/priyanshuu-06/priyanshuu-06.github.io.git

# 2. Push to GitHub
git push -u origin main

# 3. Enable Pages in GitHub repo settings (branch: main, root folder)
```

**Your site will be live at:** `https://priyanshuu-06.github.io/`

---

## **After Deployment**

### Update Your Portfolio
Every time you make changes:

```powershell
cd "d:\portfolio profile"
git add -A
git commit -m "Update portfolio"
git push
```

The site updates automatically within seconds!

---

## **Custom Domain (Optional)**

### Connect Your Own Domain
1. Buy a domain from:
   - GoDaddy
   - Namecheap
   - Google Domains

2. In GitHub Settings → Pages:
   - Add your domain name
   - Follow DNS setup instructions

3. DNS Records to add:
   ```
   CNAME → your-site.github.io
   ```

---

## **Need Help?**

- **GitHub Pages Help:** https://pages.github.com/
- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Guide:** https://vercel.com/docs

---

## **Your Current Status**

✅ Portfolio built and tested locally  
✅ Git repository initialized  
✅ Ready to deploy!

**Next Step:** Choose your deployment method above and follow the steps! 🚀
