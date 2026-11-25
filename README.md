# Raju Navghare Website

Responsive React + TypeScript website built with Vite.

The homepage opens with a full-screen photo poster; scrolling reveals the existing website.
The next section uses the supplied procession photo as its background and layers the supplied
public-event photo on top. Photos are used as supplied without facial edits.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Pushing to `main` builds and deploys the site to GitHub Pages using `.github/workflows/deploy.yml`.

Original website photography and publicly available photos from the official Instagram account are stored in `public/images/`. Source image files are kept unchanged; layout and cropping are handled in CSS.
