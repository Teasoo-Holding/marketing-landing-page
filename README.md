# ESG Horizon — Marketing Site

Marketing and landing page for ESG Horizon, Nigeria's IFRS-ready ESG reporting platform.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3, Radix UI, Lucide icons
- **Language:** TypeScript 5
- **Runtime:** Bun

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server (port 3001)
bun dev

# Build for production
bun run build

# Start production server
bun start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
├── assets/           # SVGs, images, icons
├── components/
│   ├── layout/       # Navbar, Footer, PageShell
│   ├── sections/     # Landing page sections (Hero, Problem, etc.)
│   └── ui/           # Shared UI primitives (Button, etc.)
├── lib/              # Utilities (cn, etc.)
└── styles/           # Global CSS & animations
```
