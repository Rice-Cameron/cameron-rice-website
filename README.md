# Cameron Rice — Portfolio & Engineering Website

Welcome to the portfolio website of **Cameron Rice**, Software Engineer at Open Dental Software. Hosted at [www.cameronrice.net](https://www.cameronrice.net).

## Overview

Built with Next.js (App Router), React, and Tailwind CSS. The website showcases software engineering projects across Windows desktop development, full-stack web applications, distributed backend services, and cloud infrastructure.

### Key Features

- **Automated Resume Sync**: Never edit React component text when updating your resume! Drop an updated PDF into `public/CameronRiceResume.pdf`, and the build/dev workflow automatically parses and renders your latest experience, education, and skills.
- **Dual Resume Viewer**: Visitors and recruiters can switch between an ATS-friendly structured web view and an embedded PDF viewer with one click.
- **Refined Engineering Aesthetic**: Clean, modern typography and layout designed without generic AI templates or arbitrary skill percentage bars.
- **Detailed Project Case Studies**: Direct links to live demos, architecture overviews, and source repositories.

---

## Updating Your Resume

Updating your resume on this website requires zero edits to React components or JSON files:

1. Replace `public/CameronRiceResume.pdf` with your new resume PDF.
2. Run `npm run dev` or `npm run build` (or `npm run sync-resume`).
   - The automated `sync-resume.mjs` script parses your PDF using `pdf-parse` and updates `src/data/resumeData.json`.
3. When you push to GitHub, Vercel automatically runs `prebuild` (`node scripts/sync-resume.mjs`), building the live site with your latest resume data.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (automatically syncs resume PDF)
npm run dev

# Run manual resume synchronization
npm run sync-resume

# Build for production
npm run build

# Start production build
npm start
```

---

## Featured Projects

- **[Lavender](https://lavender-sleep.web.app/)**: Shift Work Sleep Disorder sleep-scheduling web application built with React and Google Firebase. Developed as an Oregon State University Senior Capstone project in partnership with sleep psychology researchers.
- **[LeetLog](https://leetlog-livid.vercel.app/)**: Full-stack application for tracking algorithm solutions, time/space complexity, and pattern tags. Built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL (Neon).
- **[API Rate Limiter Microservice](https://github.com/Rice-Cameron/api-rate-limiter-microservice)**: High-throughput token bucket rate limiter in Go and Redis with Docker containerization.
- **[Time-Tracked Invoice Generator](https://github.com/Rice-Cameron/invoice-generator)**: Django-based backend for freelance client management, time logging, Stripe webhooks, and Celery PDF generation.
- **[Automated Minecraft Server Deployment](https://github.com/Rice-Cameron/CS312CourseProjectPt2)**: Infrastructure as Code (IaC) DevOps automation using Terraform and Ansible on AWS EC2.
- **[Kotlin Planet App](https://github.com/Rice-Cameron/kotlin-planet-app)**: Native Android mobile application in Kotlin exploring astronomical REST APIs.

---

## Deployment

Continuously deployed via **Vercel**. Build commands:
- Prebuild: `node scripts/sync-resume.mjs`
- Build: `next build`