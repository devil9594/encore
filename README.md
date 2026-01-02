# Company SPA

A production-ready Single Page Application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive design (desktop + mobile)
- Sticky header with navigation
- SPA routing with React Router v6
- GitHub Pages compatible
- SEO-friendly

## Getting Started

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

1. Update `your-repo-name` in:
   - `vite.config.ts` (line 7)
   - `src/App.tsx` (line 15)
   - `index.html` (og:url, canonical)

2. Build the project:
   ```sh
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages

## Tech Stack

- Vite
- React 18
- TypeScript
- React Router v6
- Tailwind CSS
- shadcn/ui
