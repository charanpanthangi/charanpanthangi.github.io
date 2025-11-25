# Personal Profile Site

Static single-page profile site for Charan Panthangi. Built with plain HTML, CSS, and vanilla JavaScript so it works seamlessly on GitHub Pages.

## Folder structure
- `index.html` — main page markup and section scaffolding.
- `assets/css/style.css` — all styles (layout, typography, responsive rules).
- `assets/images/.gitkeep` — placeholder; replace with `profile.jpg` for your portrait at `assets/images/profile.jpg`.
- `config/config.js` — single `SITE_CONFIG` object that stores all editable content (profile, experience, projects, writing, talks, contact text and social links).
- `config/render.js` — reads `SITE_CONFIG` and injects content into the DOM.

## Updating content
1. Open `config/config.js` and edit the `SITE_CONFIG` object.
2. Add or update:
   - **Profile**: name, role, location, email, `profileImage` path.
   - **Intro/About**: update `intro.paragraphs` with new text.
   - **Experience, Projects, Writing, Talks**: append new objects to the respective `items` arrays; each object renders in order.
   - **Links**: update LinkedIn/GitHub/Medium/Kaggle URLs.
   - **Contact**: adjust `contact.text`, `emailLabel`, or `linksLabel` if desired.
3. Save changes; no build step required.

## Previewing locally
Open `index.html` directly in your browser. All assets load locally without a server.

## Deploying to GitHub Pages
1. Commit and push your changes to the repository branch you want to publish.
2. If this is the main site, set the branch as the GitHub Pages source in repository settings (or make it the default branch).
3. Wait for GitHub Pages to build, then visit your site at `https://<username>.github.io/`.
