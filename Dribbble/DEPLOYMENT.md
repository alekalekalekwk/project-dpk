# 🚀 GitHub Deployment Guide

Step-by-step guide to upload your portfolio to GitHub and deploy it online.

## Step 1: Initialize Git Repository

Open Terminal in your project folder and run:

```bash
cd /Users/macbook/Dribbble
git init
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in top right → **"New repository"**
3. Fill in:
   - **Repository name**: `portfolio` (or any name you like)
   - **Description**: "My personal portfolio website"
   - **Public** or **Private**: Choose Public for GitHub Pages
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

## Step 3: Add Files to Git

In Terminal, run these commands:

```bash
# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio website"
```

## Step 4: Connect to GitHub

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/alek1979-cod/portfolio.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy with GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

## 🔄 Update Your Website (Future Changes)

Whenever you make changes:

```bash
# See what changed
git status

# Add changes
git add .

# Commit with a message
git commit -m "Updated skills section"

# Push to GitHub
git push
```

GitHub Pages will automatically update your live site!

## ⚠️ Important Notes

### Before Uploading:
- [ ] Make sure your profile image is in the `asset` folder
- [ ] Update all personal information (name, email, social links)
- [ ] Test the website locally to ensure everything works
- [ ] Update the README.md with your actual GitHub username

### After Uploading:
- [ ] Update the live demo link in README.md
- [ ] Test all links on the live site
- [ ] Share your portfolio link!

## 🐛 Troubleshooting

### Images Not Showing
- Make sure the image path in `index.html` is correct
- Check that the `asset` folder is uploaded to GitHub

### GitHub Pages Not Working
- Ensure repository is Public (or you have GitHub Pro for private Pages)
- Wait a few minutes after enabling Pages
- Check Settings → Pages for any error messages

### Can't Push to GitHub
- Make sure you're logged in to GitHub
- You might need to set up SSH keys or use a Personal Access Token

## 📞 Need Help?

If you encounter issues, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Help](https://docs.github.com)

---

**Good luck with your deployment! 🎉**
