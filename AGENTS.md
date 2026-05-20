# AGENTS.md

This file provides guidance to AI coding agents (e.g. OpenAI Codex, Cursor, Copilot) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** marketing site for Cassad, a legal and real estate services firm based in Monterrey, México. The site is entirely in Spanish (es-MX).

### Routing

Pages use the App Router with folder-based routing. Each content route (e.g. `/servicios`, `/estrategias`, `/administracion`, `/conocenos`) has two files:
- `layout.tsx` — exports `Metadata` for page-specific SEO (title, description, OpenGraph, canonical URL)
- `page.tsx` — the page content

The root `app/layout.tsx` sets the global metadata and renders `<JsonLd />` for structured data on every page.

### SEO pattern

All metadata derives from `lib/seo.ts` (`siteConfig`), which holds the site name, URL, contact email, and default title/description. Page layouts import `siteConfig` to build their OpenGraph and Twitter card metadata. `app/ui/JsonLd.tsx` injects Schema.org JSON-LD (Organization + ProfessionalService) into the document head.

### Contact form

`app/ui/ContactForm.tsx` uses `react-hook-form` and calls `app/utils/send-email.ts`, which POSTs to the API route `app/api/email/route.ts`. That route uses **nodemailer** with Gmail SMTP. It requires two environment variables:

```
MY_EMAIL=      # Gmail address used to send and receive
MY_PASSWORD=   # Gmail app password (not the account password)
```

### Shared UI components

Located in `app/ui/`:
- `NavBar.tsx` / `NavLink.tsx` — navigation
- `Footer.tsx` — site footer
- `ContactForm.tsx` — contact form (client component)
- `JsonLd.tsx` — structured data script tag

### Styling

Tailwind CSS with one custom color token: `mainAzul-100` (`#0c4068`), the primary brand blue used for buttons, accents, and interactive states.
