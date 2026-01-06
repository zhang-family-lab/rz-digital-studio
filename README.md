# RZ Digital Studio

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS for showcasing web design and AI services.

## Features

- **Component-based architecture**: Modular React components for easy maintenance.
- **TypeScript**: Type-safe development with better IDE support.
- **Responsive design**: Optimized for all devices using Tailwind CSS.
- **Fast performance**: Built on Next.js for optimal loading speeds.

## Quick Start (Development)

1. Install Node.js (18+ recommended).
2. Clone or navigate to the project root.
3. Run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000 to view the site.

## Build for Production

```bash
npm run build
npm start
```

This starts the production server on http://localhost:3000.

## Deployment

### Option 1: Vercel (Recommended for Next.js)

1. Push your code to GitHub.
2. Connect your repo to [Vercel](https://vercel.com).
3. Deploy automatically on every push.

### Option 2: Netlify

1. Build the project: `npm run build`.
2. Upload the `.next` folder or use Netlify's build command: `npm run build`.
3. Set publish directory to `.next` (or use static export if needed).

### Option 3: Static Export

For static hosting (e.g., GitHub Pages):

1. Add to `package.json`:

```json
"scripts": {
  "export": "next build && next export"
}
```

2. Run `npm run export`.
3. Upload the `out/` folder to your hosting provider.

## Project Structure

- `components/`: Reusable React components (Header, Hero, etc.)
- `pages/`: Next.js pages (_app.tsx, index.tsx, _document.tsx)
- `styles/`: Global CSS (globals.css)
- `public/`: Static assets

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details. This ensures that any modifications or derivatives must also be open-source under the same license.
