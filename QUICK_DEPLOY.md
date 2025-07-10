# 🚀 Quick Deploy Your Portfolio

## Method 1: Run the Deployment Script

Open terminal in your project directory and run:

```bash
./deploy.sh
```

## Method 2: Manual Git Commands

If the script doesn't work, run these commands one by one:

```bash
# Initialize git (if needed)
git init
git branch -M main

# Configure git
git config user.email "tejamargam.vi@gmail.com"
git config user.name "Margam Vishwateja"

# Add all files
git add .

# Commit
git commit -m "Deploy portfolio website"

# Add remote
git remote add origin https://github.com/TejaMargam/portfolio.git

# Push to GitHub
git push -u origin main
```

## After Pushing to GitHub:

1. **Go to**: https://github.com/TejaMargam/portfolio
2. **Click**: Settings → Pages (in left sidebar)
3. **Under Source**: Select "GitHub Actions"
4. **Wait**: 2-3 minutes for automatic deployment
5. **Your live site**: https://TejaMargam.github.io/portfolio/

## That's it! Your portfolio will be live automatically.