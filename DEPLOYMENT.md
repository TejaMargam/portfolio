# 🚀 Deployment Guide: GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your local machine

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or any name you prefer)
3. Set it to **Public** (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

## Step 2: Push Code to GitHub

Open terminal in your project directory and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

## Step 4: Access Your Live Website

After the GitHub Action completes (usually 2-3 minutes):
- Your website will be available at: `https://YOUR_USERNAME.github.io/portfolio/`

## GitHub Actions Workflow

The included workflow (`.github/workflows/deploy.yml`) will:
- ✅ Install dependencies
- ✅ Build the React application
- ✅ Copy the resume file to the correct location
- ✅ Deploy to GitHub Pages automatically

## Important Notes

### Custom Domain (Optional)
To use a custom domain:
1. In repository Settings → Pages
2. Add your custom domain
3. Update DNS records to point to GitHub Pages

### Repository Name
If you name your repository `YOUR_USERNAME.github.io`, your site will be available at `https://YOUR_USERNAME.github.io/` (without the repository name).

### Contact Form
The contact form currently uses in-memory storage. For production:
- Consider using a service like Netlify Forms, Formspree, or EmailJS
- Or deploy the backend to a service like Vercel, Railway, or Heroku

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository
- Ensure all dependencies are listed in package.json
- Review the error logs in the failed action

### Site Not Loading
- Wait 5-10 minutes for DNS propagation
- Check if GitHub Pages is enabled in Settings
- Verify the workflow completed successfully

### Resume Download Not Working
- Ensure the resume file exists in `attached_assets/`
- Check the GitHub Action logs to confirm file copying

## Files Created for Deployment

- ✅ `README.md` - Project documentation
- ✅ `.gitignore` - Git ignore rules
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `client/public/resume.pdf` - Resume file for download
- ✅ `DEPLOYMENT.md` - This deployment guide

## Next Steps After Deployment

1. **Test the live site** thoroughly
2. **Update contact information** if needed
3. **Add Google Analytics** (optional)
4. **Set up custom domain** (optional)
5. **Share your portfolio** with potential employers!

---

Your portfolio is now ready for deployment to GitHub Pages! 🎉