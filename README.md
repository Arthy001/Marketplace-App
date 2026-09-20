# Marketplace-Apps Storefront Hub

Curated marketplace showcase for production-ready full-stack application templates built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Supabase**.

## Featured Application Templates

- **Car2Hand**: Used Car Marketplace & Rental Platform with 28 realistic cars, dynamic search, loan calculator, and test drive booking.
- **EstateSphere**: Luxury Real Estate & Villa Portal (Coming Soon)
- **NovaShop**: Headless E-Commerce & Retail Storefront (Coming Soon)
- **LuxeStay**: Boutique Hotel & Resort Booking Engine (Coming Soon)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Cloudflare Pages

This project is deployed to **Cloudflare Pages / Workers**:

1. Build Command: `npm run build`
2. Output Directory: `out`
3. Node.js Version: `22` (Configured in `.node-version` & `.nvmrc`)
4. Wrangler Config: `wrangler.jsonc` (Assets mapped to `./out`)
