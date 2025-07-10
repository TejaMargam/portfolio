#!/bin/bash

# Portfolio Deployment Script
# Run this script to deploy your portfolio to GitHub Pages

echo "🚀 Starting Portfolio Deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git branch -M main
fi

# Configure git user (update with your details)
git config user.email "tejamargam.vi@gmail.com"
git config user.name "Margam Vishwateja"

# Add all files
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy portfolio website - $(date)"

# Add remote origin (if not already added)
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "Adding remote origin..."
    git remote add origin https://github.com/TejaMargam/portfolio.git
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "✅ Portfolio pushed to GitHub!"
echo "📝 Next steps:"
echo "1. Go to https://github.com/TejaMargam/portfolio"
echo "2. Click Settings → Pages"
echo "3. Select 'GitHub Actions' as source"
echo "4. Wait 2-3 minutes for deployment"
echo "5. Your site will be live at: https://TejaMargam.github.io/portfolio/"
echo ""
echo "🎉 Your portfolio is ready to go live!"