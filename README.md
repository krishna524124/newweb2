# Krishna Yadav — Ultra-Premium Portfolio

> Physics Graduate · Data Science Builder · AI Innovator · Future Founder

A world-class Next.js 15 portfolio website with dark luxury aesthetics,
Framer Motion animations, glassmorphism, particle background, and full
TypeScript/Tailwind CSS architecture.

---

## 🚀 Quick Start (3 Steps)

### Step 1 — Scaffold a fresh Next.js project

```bash
npx create-next-app@latest krishna-portfolio \
  --typescript --tailwind --app --src-dir=false \
  --import-alias "@/*"
cd krishna-portfolio
```

### Step 2 — Install extra dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### Step 3 — Replace/add all files from this repo

Copy every file from this archive into the matching path inside `krishna-portfolio/`.
Then run:

```bash
npm run dev
# → http://localhost:3000
```

---

## 📁 File Structure

```
krishna-portfolio/
│
├── app/
│   ├── layout.tsx          Root layout (Navbar, Footer, Cursor, Particles)
│   ├── page.tsx            Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── resume/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      Sticky blur nav + mobile drawer + easter egg
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Cursor.tsx      Custom magnetic cursor (desktop only)
│   │   ├── Particles.tsx   Canvas particle background
│   │   ├── PageHeader.tsx  PageHeader + ScrollBar + BackToTop + Reveal + Section
│   │   ├── ScrollBar.tsx   (re-export)
│   │   └── BackToTop.tsx   (re-export)
│   └── sections/
│       ├── HeroSection.tsx         Typewriter + parallax glow + CTAs
│       ├── StatsSection.tsx        Animated counters
│       ├── AboutPreview.tsx        Homepage about block
│       ├── SkillsPreview.tsx       Homepage skills preview
│       ├── FeaturedProjects.tsx    Homepage featured projects
│       ├── QuoteSection.tsx        Philosophy quote + CTA
│       ├── CtaSection.tsx          (re-export)
│       ├── AboutStory.tsx          Full about + Timeline + Vision
│       ├── TimelineSection.tsx     (re-export)
│       ├── VisionSection.tsx       (re-export)
│       ├── ProjectsGrid.tsx        Filterable project cards with tilt
│       ├── SkillsDisplay.tsx       Animated skill bars + tech cloud
│       ├── ResumeSection.tsx       Download + education + certifications
│       └── ContactSection.tsx      Form + success animation + socials
│
├── lib/
│   ├── data.ts             ALL site content (edit this to personalize)
│   └── utils.ts            cn() helper
│
├── styles/
│   └── globals.css         Tailwind + Google Fonts + custom CSS
│
├── public/
│   └── resume.pdf          ← Add your actual PDF here
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## ✏️ Personalizing Content

**All your personal data lives in ONE file: `lib/data.ts`**

Edit these objects:
- `siteConfig`   → name, email, social links, location
- `stats`        → counter numbers
- `projects`     → your actual projects
- `skillGroups`  → your skill levels
- `timeline`     → your journey

---

## 🎨 Features

| Feature | Details |
|---------|---------|
| Design | Dark luxury, glassmorphism, gold accents |
| Fonts | Cormorant Garamond (display) + Syne (UI) + JetBrains Mono |
| Animations | Framer Motion — stagger, reveal, tilt, typewriter |
| Particles | Canvas particle network (gold + blue) |
| Cursor | Custom magnetic cursor with ring follower (desktop) |
| Scroll | Progress bar + Back-to-top button |
| Projects | Filterable grid with 3D hover tilt |
| Skills | Animated bars triggered on scroll |
| Contact | Form with success animation |
| Easter Egg | Click logo 5× for a surprise |
| SEO | Full metadata on every page |
| Mobile | Native-app quality responsive layout |

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts — done in 60 seconds
```

Or push to GitHub and connect at vercel.com/new.

---

## 📄 Adding Your Resume PDF

Place your resume at `public/resume.pdf`.
The download button on `/resume` will link to it automatically.

---

Built with ♦ by Krishna Yadav
