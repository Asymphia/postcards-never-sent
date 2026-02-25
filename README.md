# Postcards Never Sent

**Postcards Never Sent** is a full-stack Next.js web application for creating and publishing anonymous, text-based postcards. The platform allows users to write messages that were never delivered — confessions, apologies, thank-yous, unfinished conversations — and share them publicly without creating an account.

The application intentionally avoids social mechanics: there are no profiles, likes, comments, followers, or direct messaging. There is no delivery system. Every postcard exists in a shared, anonymous space — meant to be read, not responded to.

The project focuses on simplicity, emotional expression, clean UI, and modern full-stack architecture using server actions and a PostgreSQL database.

## Tech Stack

- **Next.js (App Router, Fullstack)**
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (animations)
- **PostgreSQL**
- Prisma ORM

## Features

### Core Functionality

- Adding anonymous postcards
- Browsing all postcards
- Searching postcards
- Viewing single postcard pages

### Moderation & Reporting

- Bug report system (server-side validation + enum types)
- Postcard reporting system with predefined reasons
- Status-based moderation system (OPEN / RESOLVED)

### Next.js Architecture

- Fullstack Next.js with Server Actions
- App Router
- `useActionState` and `useFormStatus`
- Intercepted routes with parallel routes (single postcard modal experience)

### UI/UX

- GSAP-powered animations
- Responsive design with TailwindCSS
- Drag & drop stamp selection when creating postcards
- Copy-to-clipboard functionality on single postcard page

## Pages

### Home
- Simple animated slider (carousel)
- CTA buttons leading to main actions

### Postcards
- All published postcards
- Search functionality (dynamic search with debounce)

### Single Postcard
- Dedicated page per postcard
- Copy message feature
- Report postcard option
- Modal version via intercepted routes

### Create Postcard
- Anonymous postcard creation
- Stamp selection (drag & drop)
- Server-side validation

### Contact
- Bug report form
- Enum-based validation (device, page, etc.)
- Terms agreement checkbox

### Terms & Conditions
- Usage rules
- Content guidelines

### About
- Project description and concept explanation

## Getting Started

### Install dependencies 

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The app will be available at:
```bash
http://localhost:3000
```

## Live demo
[Click for live demo](https://postcards-never-sent.vercel.app/)
