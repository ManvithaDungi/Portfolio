# Deployment Guide

This guide explains how the automatic deployment works and how to customize it for your needs.

## Current Setup: GitHub Pages

Your portfolio is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### How It Works

1. **Trigger**: Push to `main` branch → GitHub Actions workflow starts
2. **Build**: Node.js 18 installs dependencies and builds the project
3. **Deploy**: Built files (`dist/`) are deployed to GitHub Pages
4. **Live**: Your portfolio is live at `https://ManvithaDungi.github.io/Portfolio/`

### Initial Setup (One-time)

1. Go to your repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: Should auto-detect `main`
4. Save and wait for first deployment

### Status & Monitoring

- Check deployment status in the **Actions** tab
- Green checkmark = successful deployment
- Click on any workflow run to see detailed logs

## Alternative Deployment Options

### Option 1: Vercel (Recommended for VPS)

**Setup:**

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Generate authentication token:
   - Vercel Dashboard → Settings → Tokens → Create
3. Add to GitHub secrets:
   - **Settings** → **Secrets and variables** → **Actions**
   - Add `VERCEL_TOKEN` and `VERCEL_ORG_ID`
4. Enable workflow:
   ```bash
   mv .github/workflows/deploy-vercel.yml.example .github/workflows/deploy-vercel.yml
   ```
5. Disable GitHub Pages workflow:
   ```bash
   rm .github/workflows/deploy.yml
   ```

**Benefits:**
- Free tier with generous limits
- Automatic previews for pull requests
- Global CDN for faster loads

### Option 2: Netlify

**Setup:**

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Generate authentication token:
   - Account settings → Applications → Personal access tokens
3. Get Site ID:
   - Deployed site → Site settings → General
4. Add to GitHub secrets:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
5. Enable workflow:
   ```bash
   mv .github/workflows/deploy-netlify.yml.example .github/workflows/deploy-netlify.yml
   ```
6. Disable GitHub Pages workflow:
   ```bash
   rm .github/workflows/deploy.yml
   ```

**Benefits:**
- Excellent build logs and error reporting
- Form handling and serverless functions
- Built-in analytics

## Manual Deployment

If you prefer manual deploys:

### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Update build"
git push origin main
# GitHub Pages auto-deploys when Actions workflow completes
```

### Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Workflow Configuration

### GitHub Pages (`deploy.yml`)

The workflow:
1. Checks out your code
2. Installs Node.js 18
3. Installs dependencies with `npm ci`
4. Builds the project (`npm run build`)
5. Sets environment variable `DEPLOY_ENV=github-pages`
6. Uploads built files to GitHub Pages

**Auto-triggers on:**
- Push to `main` branch

**Skips deployment on:**
- Pull requests (still builds to check for errors)

### Environment Variables

Vite build respects `DEPLOY_ENV`:
- `DEPLOY_ENV=github-pages` → Sets base URL to `/Portfolio/`
- No `DEPLOY_ENV` → Sets base URL to `/` (for root domains)

Edit `vite.config.js` to customize:
```javascript
base: process.env.DEPLOY_ENV === 'github-pages' ? '/Portfolio/' : '/',
```

## Troubleshooting

### Workflow fails to run
- Check **Settings** → **Actions** → ensure "General" allows workflows
- Check branch is `main` (not `master`)

### Build fails
- Check **Actions** tab for error logs
- Common causes:
  - Missing dependencies: `npm install`
  - Wrong Node version: Update in workflow
  - Build script error: Run `npm run build` locally

### Site content not updating
- Check `dist/` folder is building correctly
- Clear browser cache (Ctrl+Shift+Delete)
- Check GitHub Pages domain is correct

### Base URL issues
- If assets load with 404, check `vite.config.js`
- For project repos, base should be `/Portfolio/`
- For user/org sites, base should be `/`

## Security Best Practices

✓ Never commit secrets (tokens, API keys) to repository
✓ Add sensitive data only via GitHub Secrets
✓ Use environment-specific secrets
✓ Rotate tokens periodically
✓ Review workflow permissions in `permissions:` section

## Quick Reference

| Service | Default URL | Setup Time | Cost |
|---------|------------|-----------|------|
| GitHub Pages | `github.io/Portfolio` | 5 min | Free |
| Vercel | vercel domain | 10 min | Free tier available |
| Netlify | netlify domain | 10 min | Free tier available |

## More Information

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Netlify CLI](https://docs.netlify.com/cli/overview/)

---

**Questions?** Check the Actions tab logs or open an issue on GitHub.
