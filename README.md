# Umbraco.ViteTailwind

A modern starter setup for Umbraco using:

- ⚡ Vite
- 🎨 TailwindCSS
- 🔥 Hot reload development workflow
- 🖥️ Umbraco 17+

Built to simplify modern frontend development inside Umbraco projects.

---

# Features

- Fast frontend builds with Vite
- TailwindCSS preconfigured
- Automatic asset bundling
- Hot reload for frontend development
- Clean structure for Umbraco projects
- Production-ready build pipeline

---

# Installation

## 1. Install the package

```bash
dotnet add package Umbraco.ViteTailwind
```

---

## 2. Install frontend dependencies

```bash
npm install
```

---

## 3. Run development mode

```bash
npm run dev
```

This will run:

- Umbraco via `dotnet watch`
- Vite dev server
- Tailwind watcher

---

# Project Structure

```txt
Frontend/
│
├── scripts/
│   │
│   ├── blocks/
│   ├── components/
│   ├── core/
│   ├── pages/
│   ├── vendors/
│   └── app.ts
│
├── styles/
│   │
│   ├── themes/
│   └── app.css
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

# Folder Overview

## scripts/

Contains all frontend TypeScript and JavaScript logic.

### blocks/

Reusable Umbraco block components.

Example:

- Hero block
- CTA block
- Feature grid

### components/

Shared UI components.

Example:

- Navbar
- Footer
- Modal
- Carousel

### core/

Core frontend utilities and global setup.

Example:

- API helpers
- Event handlers
- Config
- Global initialization

### pages/

Page-specific scripts.

Example:

- Home page
- Blog page
- Landing page

### vendors/

Third-party libraries and custom vendor integrations.

Example:

- Swiper setup
- GSAP config
- AlpineJS plugins

### app.ts

Frontend application entry point.

---

# styles/

Contains all styling assets.

## themes/

Theme variations and separated design systems.

Example:

- dark.css
- light.css
- corporate.css

## app.css

Main TailwindCSS and global styles entry.

---

# Root Files

## vite.config.ts

Vite configuration.

## tailwind.config.js

TailwindCSS configuration.

## tsconfig.json

TypeScript configuration.

## package.json

Frontend dependencies and scripts.

---

# Recommended Architecture

- Keep components reusable
- Separate page logic from shared logic
- Use blocks for Umbraco Block List editors
- Keep vendor libraries isolated
- Centralize app bootstrapping in `app.ts`

---

# Example Import Structure

```ts
// app.ts

import './styles/app.css'

import './components/navbar'
import './pages/home'
```

---

# Available Scripts

## Start Development

```bash
npm run dev
```

## Run Only Vite

```bash
npm run frontend
```

## Run Only Umbraco

```bash
npm run backend
```

## Production Build

```bash
npm run build
```

---

# Tailwind Usage

Example:

```html
<div class="bg-blue-600 text-white p-6 rounded-xl">
    Hello Umbraco + Tailwind
</div>
```

---

# Using Assets in Razor

Example:

```cshtml
<link rel="stylesheet" href="/dist/main.css" />
<script type="module" src="/dist/main.js"></script>
```

Or

```cshtml
@Html.ViteAssets()
```

---

# Development Workflow

Recommended workflow:

1. Run Umbraco backend
2. Run Vite frontend
3. Develop using hot reload
4. Build production assets using Vite

---

# Goals

Umbraco.ViteTailwind aims to provide:

- A clean modern frontend workflow
- Better developer experience
- Faster asset compilation
- Easier frontend scaling for Umbraco projects

---

# License

MIT

---

# Contributing

Contributions, issues, and feature requests are welcome.

---

# Author

Jace Maniquis
