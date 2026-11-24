# Rique DeCoder — Portfolio

Personal portfolio built with HTML, CSS and vanilla JavaScript. It is designed to be hosted on GitHub Pages and includes Portuguese/English language switching.

## Preview locally

No build tools or dependencies are required. Open `index.html` in your browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository. For a personal site, the recommended name is `rique-decoder.github.io` (replace `rique-decoder` if your GitHub username changes).
2. Upload the contents of this folder to the repository root. `index.html` must be at the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for the deployment. The site should be available at `https://rique-decoder.github.io/`.

You can also use any repository name and publish from its `main` branch; the URL will then include `/<repository-name>/`.

## Before publishing

- Review the biography and project descriptions.
- Confirm that each project link points to the intended repository. The HMAC/RSA and AES cards currently link to the GitHub profile because their exact repository URLs were not supplied.
- Add a professional contact email if you want direct email contact.
- Replace the page title and social preview description if desired.
- Check the page on mobile and desktop.

## Customize

- `index.html`: page structure and content.
- `styles.css`: visual identity, layout and responsive behavior.
- `script.js`: translations and language toggle.
- `assets/favicon.svg`: browser icon.

Fonts are loaded from Google Fonts. If unavailable, the page falls back to system sans-serif and monospace fonts.
