# Joselle Ann Zulueta — Portfolio

Static portfolio matching https://joselleannzuluetaportfolio.netlify.app/.
No build step, package installation, or API keys are required.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8000`
and visit http://localhost:8000.

## Files

- `index.html`: page content and semantic markup.
- `css/styles.css`: responsive layout, themes, and animations.
- `js/theme-init.js`: restores the theme before the page renders.
- `js/main.js`: portfolio data, navigation, filters, and core interactions.
- `js/features.js`: project finder, skill details, statistics, and inquiry wizard.
- `js/portfolio-assistant.js`: local portfolio questions and answers.
- `images/`: portrait and icons extracted from the original embedded images.
- `.github/workflows/deploy.yml`: GitHub Pages deployment on pushes to `main`.

The assistant runs locally rather than using the live site's Netlify AI function.
Google Fonts requires an internet connection. Images are served locally.

Keep `theme-init.js` in the head and load the deferred scripts in their existing
order: `main.js`, `features.js`, then `portfolio-assistant.js`. They share the
portfolio data declared in `main.js`.
