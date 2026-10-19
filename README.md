# Gautami's Coffee Lab ☕

React + Vite interactive AI engineer portfolio.

## Run locally
1. Install Node.js 22 LTS or newer.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the URL Vite prints (typically http://localhost:5173).
4. Run `npm run build` to create the production site under `dist/`.

## Customize
- `src/App.jsx`: text, links, project cards, experience, and interaction.
- `src/style.css`: color palette, fonts, and layout.
- `index.html`: site title and SEO description.
- Verify project copy, replace the placeholder LinkedIn link, and replace each generic project link with a direct repository link.

## Deploy on GitHub Pages
1. Create a public repository named `gautamikh.github.io` on GitHub.
2. Push **all** project source code to the `main` branch. The `.github/workflows/deploy.yml` workflow is already included.
3. Under repository Settings → Pages, choose **GitHub Actions** as the source.
4. The Actions workflow will build the site and publish the `dist` artifact. URL: https://gautamikh.github.io/.
5. For a custom domain, enter it under Settings → Pages and configure DNS according to GitHub docs.

### Important
For a different repository (e.g. `coffee-portfolio` published at `https://gautamikh.github.io/coffee-portfolio/`), set `base: '/coffee-portfolio/'` in `vite.config.js` before deploying. With the user-site repo `gautamikh.github.io` or a custom domain, keep `base: '/'`.

## Interactive cafe
- Motion animates the illustrated cup and reveals sections and project cards on scroll.
- Select a project drink to open its keyboard-accessible details dialog. Escape closes it.
- Enable the optional bean trail from the footer on desktop. Reduced-motion preferences disable it and decorative Motion animations.
- Edit case-study notes in `src/Cafe.jsx` and project metadata in `src/App.jsx`. Architecture outlines are conceptual; add verified implementation details, evaluation results, and direct repository URLs before sharing as completed case studies.
- The AI assistant remains a future stage; no chatbot or backend is included.
- On PowerShell systems that block npm.ps1, use `npm.cmd run dev` and `npm.cmd run build`.
