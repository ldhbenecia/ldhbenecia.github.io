# ldhbenecia.github.io

Portfolio of Donghyeok Lim, backend engineer.

🔗 [ldhbenecia.github.io](https://ldhbenecia.github.io)

## Stack

Next.js 16 (static export) · React 19 · TypeScript · CSS Modules · GitHub Pages

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static output in out/
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Structure

```
app/                 layout, page, design tokens (tokens.css), global styles
components/
  layout/            navigation, footer
  sections/          one section per file, styles in a matching .module.css
  motion/            scroll-reveal observer
content/             all resume data — edit here, not in components
docs/adr.md          design and technical decisions
public/images/       product screenshots
DESIGN.md            design system (tokens + usage rules)
```
