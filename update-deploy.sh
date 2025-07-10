#!/bin/bash

echo "🔧 Updating GitHub deployment configuration..."

# Add all files
git add .

# Commit the deployment fix
git commit -m "Fix GitHub Pages deployment workflow"

# Push to GitHub
git push origin main

echo "✅ Deployment fix pushed to GitHub!"
echo "📝 The GitHub Actions workflow will now:"
echo "  - Build your React portfolio correctly"
echo "  - Deploy to GitHub Pages automatically"
echo "  - Your site will be live at: https://TejaMargam.github.io/portfolio/"
echo ""
echo "⏱️ Wait 2-3 minutes for the new deployment to complete."
echo "🔄 Check the Actions tab in your GitHub repository to monitor progress."