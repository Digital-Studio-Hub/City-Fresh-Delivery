# CityFresh - Fresh Fruit Delivery Website

## Overview
Premium fruit delivery website for CityFresh, based in Somerset West, Cape Town. The site drives WhatsApp orders as the primary conversion channel.

## Tech Stack
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js (Node.js)
- **Routing**: wouter (frontend)
- **Email**: ZeptoMail API for contact form submissions
- **Styling**: Custom green/orange theme with Plus Jakarta Sans font

## Project Structure
```
client/src/
├── App.tsx              # Main app with routing
├── components/
│   ├── Navigation.tsx   # Sticky nav with mobile menu
│   ├── Footer.tsx       # Footer with Lekker Network logo + badge
│   └── WhatsAppFAB.tsx  # Floating WhatsApp button
├── pages/
│   ├── Home.tsx         # Landing page with hero, features, produce preview
│   ├── About.tsx        # Company overview and values
│   ├── Produce.tsx      # Fruit & vegetable categories and products
│   ├── DeliveryAreas.tsx # Delivery zones with map
│   ├── HowItWorks.tsx   # 3-step ordering process + FAQ
│   ├── Contact.tsx      # Contact form + info cards
│   ├── Privacy.tsx      # Privacy policy
│   └── Terms.tsx        # Terms & conditions
server/
├── routes.ts            # /api/send-mail endpoint (ZeptoMail)
```

## Key Features
- WhatsApp ordering (069 319 3534) as primary CTA
- Floating WhatsApp button with pulse animation
- Contact form with ZeptoMail email delivery
- Local SEO (LocalBusiness schema, meta tags)
- Mobile-first responsive design
- Lekker Network footer integration (logo + verified badge)

## Environment Variables
- `ZEPTOMAIL_TOKEN` - ZeptoMail API key for email delivery

## Running
- `npm run dev` starts the Express + Vite dev server on port 5000
