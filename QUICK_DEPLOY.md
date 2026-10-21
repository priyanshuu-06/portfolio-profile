# ⚡ QUICK DEPLOY — 5 Minutes to Live

## Your Portfolio → Live on GitHub Pages

### What You Need:
- Your GitHub account (already have: `priyanshuu-06`)
- PowerShell terminal
- This portfolio folder

---

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. **Repository name:** `priyanshuu-06.github.io`
3. Keep it **Public**
4. Click **Create repository**

---

## Step 2: Deploy Your Portfolio

Open PowerShell and run:

```powershell
cd "d:\portfolio profile"

git remote add origin https://github.com/priyanshuu-06/priyanshuu-06.github.io.git
git branch -M main
git push -u origin main
```

⏱️ This takes 30 seconds

---

## Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/priyanshuu-06/priyanshuu-06.github.io
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
5. Click **Save**

⏱️ This takes 1 minute

---

## ✅ DONE! Your Site is LIVE

### Your Portfolio URL:
```
https://priyanshuu-06.github.io/
```

**Check it in 30 seconds!** (GitHub takes a moment to build)

---

## Making Updates

After you make changes to your portfolio:

```powershell
cd "d:\portfolio profile"
git add -A
git commit -m "Update: [describe change]"
git push
```

Your site updates automatically! 🚀

---

## Troubleshooting

### "I see a 404 error"
- Wait 1-2 minutes for GitHub to build
- Refresh the page (Ctrl+Shift+R for hard refresh)

### "Changes aren't showing"
- Hard refresh: Ctrl+Shift+R
- Clear browser cache
- Changes take 30-60 seconds to deploy

### Repository not found error
- Make sure you created the repo with exact name: `priyanshuu-06.github.io`
- Check you're authenticated with GitHub

---

## Optional: Custom Domain

Want to use your own domain like `priyanshu.com`?

1. Buy a domain from GoDaddy/Namecheap
2. In GitHub Settings → Pages → Add custom domain
3. Add these DNS records to your domain:
   ```
   CNAME → priyanshuu-06.github.io
   ```

---

## You're All Set! 🎉

Your engineering portfolio is now live for the world to see!

**Share your link:**
```
https://priyanshuu-06.github.io/
```
