# ASAPAY (آساپی) — Base44 Dev Environment

## Stack
- **Vite 5 + React 18 + TypeScript** — frontend framework
- **Tailwind CSS 3** — styling (custom brand colors defined in `tailwind.config.js`)
- **react-router-dom v6** — client-side routing
- **lucide-react** — icons
- **Vazirmatn** font loaded from Google Fonts CDN in `index.html`

## Running the app
```
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server runs on port 5173 inside the container, mapped to host port 3000.
Dependencies install automatically on container startup (`npm install` in the command).

## Project structure
- `src/main.tsx` — entry point with BrowserRouter
- `src/App.tsx` — routes + layout (Header/Footer)
- `src/components/` — Header, Footer, ScrollToTop, home sections
- `src/pages/` — Home, Services, Merchants, BecomeMerchant, FAQ, Contact
- `src/hooks/useScrollReveal.ts` — IntersectionObserver scroll-reveal hook
- `src/data/merchants.ts` — mock merchant data

## Key notes
- Fully RTL (`dir="rtl"` on `<html>`)
- No backend — forms show client-side success states only
- No external credentials needed — pure static marketing site
