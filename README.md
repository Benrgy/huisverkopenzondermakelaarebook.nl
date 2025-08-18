# Succesvol Uw Huis Verkopen

Static affiliate landing page for the Dutch real estate eBook.

## Structure
- `index.html` — main page (Tailwind via CDN, JSON-LD, canonical)
- `styles.css` — custom styles (focus, gradients, skip link)
- `app.js` — dynamic sections, FAQ toggles, smooth scroll, urgency timer
- `.nojekyll` — disable Jekyll for GitHub Pages

## Deploy to GitHub Pages (quick UI method)
1. Create a new repository on GitHub (Public). Example: `succesvol-uwhuis-verkopen`.
2. Upload all files from this folder: `index.html`, `styles.css`, `app.js`, `.nojekyll`.
3. Commit to the `main` branch.
4. Go to Settings → Pages → Build and deployment → Source: `Deploy from a branch`.
5. Branch: `main`, Folder: `/root`. Save.
6. Wait 1–2 minutes. Your site will be live at:
   - `https://<username>.github.io/<repo>/`
   - Live URL for this project: https://benrgy.github.io/huisverkopenzondermakelaarebook.nl/

## Optional
- Custom domain: add a `CNAME` file in the repo root with your domain (e.g., `succesvoluwhuisverkopen.nl`) and set DNS `CNAME` to `<username>.github.io`.
- Google Analytics: replace `G-XXXXXXXXXX` in `index.html` with your real GA ID.
- Social preview: ensure `og:image` is reachable; replace with your own hosted image if needed.

## Notes
- All CTAs use the PayPro affiliate URL.
- Contact details removed; informational affiliate model with GEO/SEO sections.
- Images use lazy-loading where applicable; hero image prioritized.
