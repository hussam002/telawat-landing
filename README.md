# Telawat — Landing Page

> A clean, fast, bilingual (Arabic / English) landing page for the **Telawat** Quran app.
> Built with Vite + Vue 3 + Tailwind CSS v4. Deployed on GitHub Pages.

[![Deploy to GitHub Pages](https://github.com/hussam002/telawat-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/hussam002/telawat-landing/actions/workflows/deploy.yml)

**Live:** [hussam002.github.io/telawat-landing](https://hussam002.github.io/telawat-landing/)

---

## Download

<p align="center">
  <a href="https://hussam002.github.io/telawat-landing/#download">
    <img alt="Get it on Google Play" height="46" src="https://img.shields.io/badge/Google_Play-Download-414141?style=for-the-badge&logo=googleplay&logoColor=white">
  </a>
  <a href="https://hussam002.github.io/telawat-landing/#download">
    <img alt="Explore it on AppGallery" height="46" src="https://img.shields.io/badge/AppGallery-Explore-C8102E?style=for-the-badge&logo=huawei&logoColor=white">
  </a>
  <a href="https://hussam002.github.io/telawat-landing/#download">
    <img alt="Direct APK download" height="46" src="https://img.shields.io/badge/Direct-APK-3DDC84?style=for-the-badge&logo=android&logoColor=white">
  </a>
</p>

> Store and APK links are configured per-deployment via the `VITE_*` environment
> variables (see [Configure environment variables](#2-configure-environment-variables)).

---

## Features

| Feature | Detail |
|---|---|
| **Framework** | Vue 3 with `<script setup>` Composition API + TypeScript |
| **Styling** | Tailwind CSS v4 — CSS-first config, no `tailwind.config.js` |
| **Identity** | Real app palette (teal `#006A62`), prayer-sky scenes, and the mosque-city skyline, ported from the Android app |
| **Dark / Light Theme** | Class-based (`dark` on `<html>`), persisted to `localStorage` |
| **Bilingual** | Arabic (RTL) + English (LTR) via `vue-i18n`, auto-detects browser language |
| **Motion** | Calm only — honours `prefers-reduced-motion` globally |
| **Routing** | Vue Router 4 — hash mode for zero-config GitHub Pages |
| **Deployment** | GitHub Actions → GitHub Pages (`gh-pages` branch) |

---

## Project Structure

```
telawat-landing/
├── .github/workflows/deploy.yml   # CI/CD: build → gh-pages branch
│
├── public/
│   ├── logo.svg                   # App logo (header / footer / favicon)
│   ├── scenes/                    # Wide mosque-city skyline silhouettes
│   ├── badges/                    # Store badge + icon assets
│   ├── screenshots/               # featured.* — real app screenshot for the phone mockup
│   ├── 404.html                   # SPA redirect for GitHub Pages
│   └── robots.txt
│
├── src/
│   ├── assets/main.css            # Tailwind v4 import + theme tokens (teal, ink, sky)
│   ├── components/
│   │   ├── layout/                # AppHeader, AppFooter
│   │   ├── sections/              # Hero, Features, Download, Permissions, Support
│   │   └── ui/                    # StoreBadges, IslamicDivider, Theme/Language toggles
│   ├── composables/               # useTheme, useScrollReveal
│   ├── locales/                   # ar.ts, en.ts (all copy lives here)
│   ├── pages/                     # HomePage, PrivacyPolicyPage
│   ├── plugins/i18n.ts
│   ├── router/index.ts
│   ├── App.vue
│   └── main.ts
│
├── docs/SITE_NOTES.md             # Living design notes (palette, fonts, assets, decisions)
├── index.html                     # SEO meta + Google Fonts
├── .env.example                   # Environment variables template
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** ≥ 9

### 1. Clone & install

```bash
git clone https://github.com/hussam002/telawat-landing.git
cd telawat-landing
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your URLs:

```env
VITE_BASE_URL=/telawat-landing/
VITE_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.yourapp
VITE_HUAWEI_URL=https://appgallery.huawei.com/app/C12345678
VITE_APK_URL=https://github.com/you/repo/releases/latest/download/telawat.apk
VITE_DONATION_URL=https://ko-fi.com/yourprofile   # optional — hides the donate button if unset
```

### 3. Run locally

```bash
npm run dev          # http://localhost:5173
```

### 4. Build for production

```bash
npm run build        # type-checks, then outputs to dist/
npm run preview      # preview the production build
```

---

## Deploying to GitHub Pages

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to the `gh-pages` branch.

**One-time setup:**

1. **Enable Pages:** `Settings → Pages → Source → Deploy from a branch → gh-pages`.
2. **Set the base URL** in the workflow to match the repo name: `VITE_BASE_URL: /telawat-landing/`.
3. **Add store links** as repository secrets (`Settings → Secrets and variables → Actions`):
   `VITE_GOOGLE_PLAY_URL`, `VITE_HUAWEI_URL`, `VITE_APK_URL`, and optionally `VITE_DONATION_URL`.
4. Push to `main` — the workflow runs automatically.

---

## Customization

- **Colors / fonts / tokens:** `src/assets/main.css` (`@theme {}` block).
- **Logo:** replace `public/logo.svg`.
- **App screenshot:** the phone mockup in the hero uses `public/screenshots/featured.*`
  (it auto-detects `.jpg` / `.png` / `.webp`; a clean fallback shows if none is found).
- **Skyline scenes:** `public/scenes/`.
- **Copy:** `src/locales/ar.ts` and `src/locales/en.ts`.
- **Design decisions:** documented in `docs/SITE_NOTES.md`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check then build for production |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Run `vue-tsc` without emitting files |

---

## About

**Telawat** is a charitable project — a *sadaqah jariyah* (ongoing charity) for all Muslims.
The app is 100% free, ad-free, subscription-free, and collects zero user data.

If this project helps you, please remember the developer and their family in your du'a.

---

## License

This landing page source code is released under the [MIT License](LICENSE).
The Telawat app itself is a separate project.
