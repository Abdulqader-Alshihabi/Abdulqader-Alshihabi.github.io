<div align="center">

# Abdulqader Alshihabi | 3D Interactive Portfolio

**Software & AI Engineer | Computer Science (Graduation: January 2027)**  
Interactive 3D WebGL Portfolio showcasing enterprise applications, AI semantic search pipelines, and full-stack systems.

### [Explore Live Portfolio](https://abdulqader-alshihabi.github.io/)

[![Live Deployment](https://img.shields.io/badge/Live-abdulqader--alshihabi.github.io-00f0ff?style=flat-square&logo=github)](https://abdulqader-alshihabi.github.io/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?style=flat-square&logo=three.js)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## Executive Overview

This repository powers the official personal engineering portfolio of **Abdulqader Alshihabi**. Built on **Next.js 16**, **React 19**, **Three.js**, and **GSAP**, it delivers an immersive 3D interactive user experience while maintaining static export performance, search engine optimization (SEO), and responsive usability across desktop and mobile devices.

### Key Capabilities

- **Interactive 3D WebGL Canvas**: Custom 3D interactive elements powered by `@chibi3d/runtime`, `@react-three/fiber`, and `three.js`.
- **Comprehensive Project Showcase**: Detailed breakdowns of architectural decisions, problem-solution statements, and live demos for production systems.
- **Integrated Résumé Experience**: In-browser PDF preview with instant download of the latest ATS-optimized CV (`/me/cv.pdf`).
- **Smooth Animations**: High-performance scroll-driven and interactive transitions orchestrated with GSAP and Motion.
- **Enterprise Grade CI/CD**: Automated static export and deployment pipeline via GitHub Actions to GitHub Pages.

---

## Featured Engineering Projects

| Project | Domain | Tech Stack | Highlights |
|---|---|---|---|
| **[CRIS Platform](https://github.com/Abdulqader-Alshihabi/Islamic-University-CRIS)** | Research Intelligence | React, TypeScript, Python, PostgreSQL | Centralized 7,000+ publications and 70,000+ citations; automated Scopus/OpenAlex ETL deduplication and quartile analytics. |
| **[Saaed ERP](https://github.com/Abdulqader-Alshihabi/Sync-ERP-HR)** | Enterprise HR & Payroll | Django REST Framework, React, PostgreSQL | Engineered Saudi WPS payroll compliance, attendance automation, and automated ledger handoffs for 30+ employees. |
| **[res-handler](https://github.com/Abdulqader-Alshihabi/res-handler)** | AI & Semantic Search | Python, Go, PostgreSQL, pgvector, Azure OpenAI | 1,536-dimensional vector search matching industrial problem briefs to university research with sub-200ms latency. |
| **[Shakkel Learn](https://learn.shakkel.store/)** | Corporate LMS | React, TypeScript, Supabase, Tailwind, Tiptap | Multi-tenant corporate training LMS with 15+ PostgreSQL RLS security policies, bilingual UI, and automated evaluations. |
| **[Shakkel Industrial Store](https://shakkel.store/)** | B2B & Retail E-Commerce | React, TypeScript, Supabase, Tailwind | Dynamic automated RFQ quotation calculation with 15% VAT and real-time inventory management. |
| **[LearnHub](https://github.com/Abdulqader-Alshihabi/LearningHub)** | LMS Platform | React, TypeScript, Supabase | High-availability corporate learning platform with graceful offline seed fallback layer. |
| **[CineVault](https://github.com/Abdulqader-Alshihabi/Movie-Organizer-Desktop-App)** | Web & Desktop Application | JavaScript, Python, Electron/Tkinter | Responsive desktop and web movie management system with SHA-256 secure user profiles. |

---

## Technical Stack & Architecture

- **Core Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack, Static Export)
- **UI Library**: [React 19](https://react.dev) with [TypeScript](https://www.typescriptlang.org)
- **3D & Graphics**: [Three.js](https://threejs.org), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@chibi3d/runtime](https://chibi3d.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), [Aceternity UI](https://ui.aceternity.com)
- **Animation**: [GSAP](https://greensock.com/gsap/), [Motion](https://motion.dev)
- **Static Export**: Prerendered static HTML/CSS/JS deployed to GitHub Pages

---

## Local Development Setup

### Prerequisites

- **Node.js**: `v20.9.0` or higher
- **Package Manager**: `npm` or `pnpm`

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abdulqader-Alshihabi/Abdulqader-Alshihabi.github.io.git
   cd Abdulqader-Alshihabi.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   # or
   pnpm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Static Export:**
   ```bash
   npm run build
   ```
   The static build output is generated in the `./out` directory.

---

## Deployment Pipeline

This repository uses automated GitHub Actions CI/CD to build and publish static assets to GitHub Pages on every push to the `main` branch.

- **Production URL**: [https://abdulqader-alshihabi.github.io/](https://abdulqader-alshihabi.github.io/)
- **Workflow configuration**: `.github/workflows/deploy.yml`

---

## Contact & Links

- **Portfolio**: [https://abdulqader-alshihabi.github.io](https://abdulqader-alshihabi.github.io)
- **LinkedIn**: [linkedin.com/in/abdulqader-alshihabi-859b19260](https://www.linkedin.com/in/abdulqader-alshihabi-859b19260)
- **GitHub**: [github.com/Abdulqader-Alshihabi](https://github.com/Abdulqader-Alshihabi)
- **Email**: [abdulqader.moh.2003@gmail.com](mailto:abdulqader.moh.2003@gmail.com)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
