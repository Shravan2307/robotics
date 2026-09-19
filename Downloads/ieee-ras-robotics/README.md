# IEEE RAS Website

## Overview

A dark, technical, responsive frontend for an IEEE Robotics and Automation Society student chapter. The site is designed as a mission-control-style editorial experience: it introduces IEEE RAS, maps the robotics stack, provides an event surface, showcases example projects, links students to legitimate public resources, and clearly separates verified organizational information from chapter-specific placeholders.

## Features

- Responsive, mobile-first single-page layout
- Sticky navigation with active-section indicator and mobile menu
- Lightweight SVG robotics visualization with technical status labels
- RAS command-center status panel
- Interactive robotics discipline system map
- Functional event filter tabs
- Project detail modal with overview, technologies, implementation, and result states
- Responsive robotics history timeline
- Team structure with explicit verified-information placeholders
- Official resource cards linking to IEEE RAS, ROS 2, OpenCV, DeepLearning.AI, control tutorials, and IEEE RAS publications
- Accessible focus states and `prefers-reduced-motion` support
- SEO metadata, robots.txt, and dynamic copyright year
- Vercel-ready static deployment structure

## Content accuracy

The organization-level copy and external links were based on publicly available official IEEE RAS sources, including the [IEEE RAS homepage](https://www.ieee-ras.org/), [RAS Students](https://www.ieee-ras.org/students/), and [RAS Chapter Events](https://www.ieee-ras.org/ras-chapters/chapter-events/). No chapter-specific names, events, project results, contact details, or statistics were invented. Replace bracketed placeholders only after confirming the relevant chapter's official public source.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting Started

```bash
pnpm install
pnpm run dev
```

The local development server starts on port 3000 by default.

## Build

```bash
pnpm run check
pnpm run build
```

## Deployment

This is a static Vite project and can be deployed to Vercel with the default Vite settings. Set the framework preset to **Vite** if Vercel does not detect it automatically. No API keys or server-side environment variables are required. Add a sitemap and `og:url` only after the chapter has a confirmed deployment domain.

## Project Structure

```text
client/
  public/          robots.txt and other small deployment metadata
  src/
    pages/         page-level experiences
    components/    reusable UI and scaffold components
    contexts/      theme context
    hooks/         reusable hooks
    App.tsx        top-level application shell
    index.css      design system and responsive styles
server/            scaffold compatibility server
shared/            scaffold compatibility types
```

## Sources

- [IEEE Robotics and Automation Society](https://www.ieee-ras.org/)
- [IEEE RAS Students](https://www.ieee-ras.org/students/)
- [IEEE RAS Chapter Events](https://www.ieee-ras.org/ras-chapters/chapter-events/)
- [IEEE RAS Membership](https://www.ieee-ras.org/membership/)
- [ROS 2 Documentation](https://docs.ros.org/en/jazzy/)
- [OpenCV](https://opencv.org/)
- [DeepLearning.AI](https://www.deeplearning.ai/)
- [Control Tutorials for MATLAB and Simulink](https://ctms.engin.umich.edu/CTMS/index.php?example=Introduction&section=ControlPID)
