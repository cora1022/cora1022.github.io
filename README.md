# Cora1022 GitHub Pages

Static GitHub Pages hub for blog posts, project front pages, and competition retrospectives.

## Local Preview

Open `index.html` directly in a browser.

## Publish

This site is published from:

- Repository: `https://github.com/cora1022/cora1022.github.io`
- Pages URL: `https://cora1022.github.io/`
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

- Blog/site name: `Cora1022 Lab` confirmed
- Main retrospective: `posts/nypc-next-nation-84th.html`
- Development replay: `posts/nypc-next-nation-replay.html`
- Project/front-page links: `projects/index.html`
- Public scope: full disclosure for NYPC strategy, experiments, and engineering process
