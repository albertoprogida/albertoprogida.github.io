# Alberto Progida Portfolio Site

## Project Overview
Personal portfolio website built with Tailwind CSS, showcasing projects in aerospace engineering and rocketry. Includes detailed project pages, blog, and technical documentation.

## Recent Work (2026)
- **Flexure.html** — Renamed from `materials.html`. Added comprehensive summary of CEAS Space Journal paper on integrated electrical connections in deployable composite tube flexures. Includes 5 image placeholders in `images/paper/` folder.
- **Darwin III.html** — Expanded with full technical content from EuRoC 2022 competition. Added 8 images (`images/darwin/`), payload setup, team photos, and PDF download links for technical and post-flight reports.
- **LERTA.html** — Updated with latest project information.

## Site Structure
```
├── index.html                 (Landing page)
├── experience.html            (Experience/background)
├── projects.html              (Project grid)
├── blog/                      (Blog posts)
├── portfolio/
│   ├── flexure.html          (Composite tube flexures - CEAS 2026)
│   ├── darwin-iii.html       (EuRoC 2022 rocket)
│   ├── lerta.html            (UAV platform)
│   ├── avionics.html         (Avionics subsystem - TODO)
│   └── ... (other projects)
├── assets/                    (PDFs, documents)
├── images/
│   ├── paper/                (Flexure paper figures)
│   ├── darwin/               (EuRoC 2022 photos)
│   └── project pics/         (Project cover images)
└── styles.css, script.js     (Shared assets)
```

## HTML/CSS Conventions
- **Color scheme**: Custom Tailwind with CSS variables (--color-primary, --color-secondary)
- **Dark mode**: Supported via `dark:` Tailwind classes
- **Typography**: 
  - Headings: Space Grotesk font (serif class)
  - Body: Inter font (sans class)
- **Spacing**: `fade-in`, `delay-50`, `delay-100` classes for animations
- **Image figures**: Use `<figure>` with `<figcaption>` for captions; images point to `images/` subfolders by category

## Project Pages Structure
Standard article layout:
1. Header (category badge, title, subtitle)
2. Cover image
3. Overview section
4. Main content sections with interspersed images
5. Key findings/outcomes (bullet list)
6. Optional: Downloads section
7. Back to projects link

## Key Files to Know
- **Flexure.html**: 6 image placeholders in `images/paper/`
  - All .png format
  - Captions reference figures from the CEAS paper
- **Darwin III.html**: 8 images in `images/darwin/`
  - All .png format
  - Includes team photo (`team.png`)
  - Download buttons for technical report and post-flight report PDFs

## Next Steps
- **Avionics.html** — Create detailed page for avionics subsystem (referenced from Darwin III)
- **Blog posts** — Expand blog section with technical write-ups
- **Project completion** — Finish remaining portfolio pages

## Notes for Future Work
- Images are best in PNG format for this site
- Use markdown-style figure captions in HTML (descriptive, reference figure numbers)
- Link between related projects (e.g., Darwin III → Avionics)
- Keep dark mode contrast ratios accessible
- Test responsive layout on mobile before pushing