# Imal Zaya Harahap — Senior Software Engineer & Product Architect Portfolio

A premium, production-ready personal profile and technical portfolio website built for **Imal Zaya Harahap** (Senior Full-Stack Software Engineer & Product Architect). 

Designed with a modern editorial aesthetic, clean typography, generous whitespace, strict TypeScript type safety, and a fully decoupled content architecture.

---

## 🌟 Key Highlights

- **Authentic Engineering Narrative:** Real verified case studies across enterprise digital banking (Bank Mandiri WebRTC video KYC), high-growth fintech (Paper.id KYC re-architecture & A/B testing), multi-vendor platforms (weddingMarket web & mobile for 572 vendors), and financial accounting engines (LedgerOne double-entry bookkeeping).
- **Decoupled Architecture:** All profile data, projects, experiences, technical skills, and social links are managed completely separate from UI components in `src/data/` and strictly typed in `src/types/portfolio.ts`.
- **In-Depth Technical Case Studies:** Detailed breakdowns for each project with Problem & Context, Product Goals, My Role, Technical Challenges, Architecture Decisions & Trade-offs, Implementation, Results & Impact, and Lessons Learned.
- **Dynamic Category Filtering:** Project filtering with real-time category counts that only renders categories with active projects.
- **Honest Contact Experience:** Client-side form validation via Zod with accessible feedback and a transparent fallback mechanism (pre-filled `mailto:` generator and one-click formatted message clipboard copy).
- **Accessible Dark & Light Modes:** Smooth theme switching with automatic `prefers-color-scheme` system detection and `localStorage` persistence.
- **Performance & SEO Foundations:** Dynamic route titles, meta descriptions, and Open Graph tags powered by `react-helmet-async`, automatic route-level code splitting via `React.lazy`, plus `robots.txt` and `sitemap.xml`.
- **Automated Testing Suite:** 15 unit and integration tests powered by Vitest verifying project data integrity, dynamic filtering, safe URL handling, and Zod validation.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework & Build** | React 19, TypeScript, Vite 8 |
| **Routing** | React Router v7 with route code splitting |
| **Styling** | Tailwind CSS v4, `@tailwindcss/vite` |
| **Icons** | Lucide React + custom inline brand SVGs |
| **Animation** | Framer Motion (with `prefers-reduced-motion` support) |
| **Validation** | Zod v4 |
| **SEO & Meta** | React Helmet Async |
| **Testing** | Vitest |
| **Linting** | Oxlint |

---

## 📁 Architecture & File Structure

```
my-web-porto/
├── public/
│   ├── favicon.svg          # Minimalist geometric monogram favicon
│   ├── robots.txt           # Search engine crawler directives
│   ├── sitemap.xml          # Canonical XML sitemap for SEO
│   └── resume.pdf           # Place your PDF resume here
├── src/
│   ├── app/
│   │   ├── App.tsx          # Root app wrapper (HelmetProvider & Router)
│   │   └── router.tsx       # Route definitions with lazy loading & Suspense
│   ├── components/
│   │   ├── common/          # Reusable UI elements (SEOHead, ThemeToggle, SocialLinks, ExternalLink)
│   │   ├── contact/         # ContactForm (Zod schema) & DirectContact details
│   │   ├── experience/      # ExperienceTimeline & ExperienceCard
│   │   ├── layout/          # Navbar, Footer, PageContainer, MobileNav drawer
│   │   ├── projects/        # ProjectCard, ProjectGrid, ProjectFilters, ProjectCaseStudy
│   │   └── skills/          # SkillGroup & TechPill tags
│   ├── config/
│   │   └── site.ts          # Site metadata and global defaults
│   ├── data/
│   │   ├── experience.ts    # Career records & verified contributions
│   │   ├── navigation.ts    # Main navigation menu links
│   │   ├── profile.ts       # Full profile bio, availability, location, contact
│   │   ├── projects.ts      # Detailed technical projects & case studies
│   │   ├── skills.ts        # Categorized technical competencies
│   │   └── socialLinks.ts   # Centralized social & external link registry
│   ├── hooks/
│   │   └── useTheme.ts      # Theme state management & system preference sync
│   ├── lib/
│   │   ├── external-links.ts# URL security & target=_blank validation
│   │   ├── project-utils.ts # Dynamic category computation
│   │   ├── utils.ts         # Class merging & date formatting
│   │   └── validation.ts    # Zod form validation schemas
│   ├── pages/
│   │   ├── AboutPage.tsx    # Editorial profile, engineering principles, capabilities
│   │   ├── ContactPage.tsx  # Direct channels & validated inquiry form
│   │   ├── ExperiencePage.tsx # Chronological career history & impact
│   │   ├── HomePage.tsx     # Hero, focus highlights, featured work, skills, CTA
│   │   ├── NotFoundPage.tsx # Custom 404 recovery page
│   │   ├── ProjectDetailPage.tsx # Deep-dive case study reader
│   │   └── ProjectsPage.tsx # Filterable project catalog with search
│   ├── styles/
│   │   └── globals.css      # Tailwind v4 styles, custom scrollbar & dark mode tokens
│   ├── types/
│   │   └── portfolio.ts     # Strict TypeScript domain interfaces
│   └── main.tsx             # Application bootstrap
├── tests/
│   ├── external-links.test.ts # Tests for URL security and attribute handling
│   ├── project-filters.test.ts# Tests for unique slugs and category filtering
│   └── validation.test.ts   # Tests for Zod contact validation
├── vercel.json              # Static hosting SPA client-side rewrite rules
├── index.html               # HTML entry with font preconnections and meta tags
├── package.json             # Scripts and dependencies
├── tsconfig.app.json        # Strict TypeScript compiler options with @/* paths
└── vite.config.ts           # Vite + Tailwind + Vitest configuration
```

---

## 🚀 Getting Started

### 1. Installation

Ensure Node.js (v20+ recommended) is installed.

```bash
cd /Users/imalzy/Documents/MYAPP/my-web-porto
npm install
```

### 2. Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### 3. Run Automated Tests

Execute the unit test suite:

```bash
npm run test
```

### 4. Code Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

### 5. Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✏️ How to Customize Your Content

All website content is strictly isolated from presentation components. You can customize the entire site without touching React JSX:

### 1. Profile & Bio (`src/data/profile.ts`)
Update your name, title, headline, location, availability badge, and editorial bio paragraphs:
```typescript
export const profile: Profile = {
  fullName: 'Imal Zaya Harahap',
  displayName: 'Imal Zaya',
  title: 'Senior Full-Stack Software Engineer | Product Architect',
  headline: 'Building resilient digital products with thoughtful engineering.',
  // ...
  availability: 'Open to select opportunities & technical leadership',
}
```

### 2. Adding or Editing Projects (`src/data/projects.ts`)
To add a new project or case study, append a new object to the `projects` array:
```typescript
{
  id: 'my-project-id',
  slug: 'my-project-slug',
  name: 'Project Title',
  summary: 'Short summary for card previews',
  description: 'Detailed description',
  category: 'Web Applications', // 'Web Applications' | 'Mobile Applications' | 'Full-Stack Applications' | 'Personal Projects'
  role: 'Frontend Architect',
  technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
  featured: true,
  displayOrder: 1,
  status: 'Production',
  caseStudy: {
    overview: '...',
    problemAndContext: '...',
    productGoals: ['...'],
    myRole: '...',
    technicalChallenges: ['...'],
    architectureAndDecisions: [
      { title: '...', description: '...', tradeoffs: '...' }
    ],
    implementation: ['...'],
    keyFeatures: ['...'],
    resultsAndImpact: ['...'],
    lessonsLearned: ['...']
  }
}
```

### 3. Adding or Updating Experience (`src/data/experience.ts`)
Add or edit career positions, responsibilities, accomplishment bullet points, and verified metrics.

### 4. Updating Skills (`src/data/skills.ts`)
Adjust the categories and technology pills displayed on the homepage.

### 5. Social Links (`src/data/socialLinks.ts`)
Manage your LinkedIn, GitHub, email, and any other professional profile links. Any link with `visible: false` or an empty URL will be automatically hidden from the UI.

### 6. Attaching Your Resume
Drop your real resume PDF into:
```
public/resume.pdf
```
It is already wired to the "Resume (PDF)" links on the Hero section and Experience page.

---

## 📬 Connecting a Form Backend (Optional)

The contact form currently validates inputs on the client using Zod and provides an honest, reliable fallback:
1. Generates a pre-filled `mailto:` link opening the user's default email client.
2. Allows one-click copying of the formatted subject and message to the clipboard.

If you wish to receive form submissions directly via an email service without a custom backend:
- **Formspree:** Change the form submit action to post to `https://formspree.io/f/{your_id}`.
- **EmailJS:** Install `@emailjs/browser` and trigger `emailjs.send()` in `handleSubmit` in `src/components/contact/ContactForm.tsx`.
- **Cloudflare Worker:** Create a small serverless proxy that forwards requests to Resend or SendGrid.

---

## 🌐 Deployment Instructions

### Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. The project will auto-detect Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. The included `vercel.json` ensures all client-side routes (`/projects/:slug`, `/about`, `/experience`) resolve cleanly without 404 errors on direct navigation.

### Netlify / Cloudflare Pages

For Netlify, ensure a `_redirects` file exists in `public/_redirects`:
```
/*    /index.html   200
```
For Cloudflare Pages, configure Single Page Application routing in dashboard settings or use `_redirects`.

---

## 📄 License

MIT © Imal Zaya Harahap
