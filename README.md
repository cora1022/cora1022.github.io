# 황영연 프로필

Static GitHub Pages profile for 황영연, with a GitHub repository gallery, project modals, skills, contact links, and an outbound development-log entry point.

## Local Preview

Open `index.html` directly in a browser.

Main local entry points:

- `index.html`
- `projects/index.html`
- Development log repository target: `https://cora1022.com/blog/`

## Publish

This site is published from:

- Repository: `https://github.com/cora1022/cora1022.github.io`
- Public profile URL: `https://cora1022.com/profile/`
- Origin Pages URL: `https://cora1022.github.io/`
- Service home: `https://cora1022.com/` (`cora1022/service-page` on Netlify)
- Deployment: GitHub Actions workflow at `.github/workflows/pages.yml`

If this folder is recreated somewhere else, connect it with:

```powershell
git init
git add .
git commit -m "Create GitHub Pages hub"
git branch -M main
git remote add origin https://github.com/cora1022/cora1022.github.io.git
git push -u origin main
```

Then enable GitHub Pages from the repository settings if it is not enabled automatically.

## Edit Points

- Site identity: `황영연`
- Positioning: backend developer in progress
- Hero background: animated CSS day/night scene
- Development log URL: `https://cora1022.com/blog/`
- Development log source folder: `../blog`
- Project modal data: `assets/js/main.js`
- Project/front-page rendering: `index.html` and `projects/index.html`
- YouTube links: add URLs to each project's `youtube` field in `assets/js/main.js`
- Public scope: full disclosure for NYPC strategy, experiments, and engineering process
