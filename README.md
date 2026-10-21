# Hyunbin Kim portfolio

Next.js App Router + TypeScript portfolio, ready to deploy to Vercel. The existing design, text, images, responsive rules, and print layout are preserved. No environment variables or external services are required.

## Local development

Use Node.js 22 or 24 LTS and npm.

```bash
npm ci
npm run dev
```

Open the localhost URL printed by Next.js. Port 3000 is used by default; if it is occupied, Next.js chooses another available port. VS Code Live Server cannot run this Next.js project.

```bash
npm run build
npm run typecheck
npm start
```

`npm start` serves the production build after `npm run build` succeeds. The three content pages are prerendered at build time.

## Deploy to Vercel

1. Push this project to a GitHub repository, including `package-lock.json`.
2. In Vercel, choose **Add New → Project**, then import the repository. To reuse an existing Vercel project, connect the repository in its Git settings instead.
3. Use **Framework Preset: Next.js** and the repository root as **Root Directory**. If the portfolio is inside a larger repository, select the folder containing this `package.json`.
4. Keep the default install, build, and output settings. Remove any old static-site overrides such as `_site` or `dist`.
5. No environment variables are needed. Deploy, then check the home page, case study, and résumé.
6. In **Settings → Domains**, add `www.hyunbinkim.dev` and `hyunbinkim.dev` as desired. Follow the DNS values shown by Vercel for this project. If the domain is assigned to another Vercel project, move its assignment to this project.

There is no need to set up GitHub Pages or use GitHub Pages DNS records. If those records have already been configured, replace them with the values displayed in Vercel. Domain registration and DNS settings have not been changed by this conversion.

Official deployment documentation: https://vercel.com/docs/frameworks/full-stack/nextjs

## Structure

- `app/layout.tsx`: document language, favicon, viewport, and shared stylesheet.
- `app/page.tsx`: portfolio home page at `/`.
- `app/joymeetstaste/page.tsx`: project case study at `/joymeetstaste`.
- `app/resume/page.tsx`: résumé at `/resume` with a print / Save as PDF button.
- `app/globals.css`: original design tokens, styles, breakpoints, and print rules.
- `components/site-chrome.tsx`: shared navigation and footer.
- `components/current-year.tsx`: browser-local copyright year.
- `components/print-button.tsx`: browser print interaction.
- `public/assets`: existing local screenshots and favicon.
- `next.config.ts`: permanent redirects from `/index.html`, `/joymeetstaste.html`, and `/resume.html` to the new routes.

Page content is rendered with React components, not injected HTML. Only the year and print button need client components. Internal navigation uses Next.js Link; existing image dimensions and styling are retained with native image elements.

## Content maintenance

- JoyMeetsTaste is described as pre-launch in October 2026. Update the three page components after confirming the Fuyu Ramen launch. Do not add unverified order counts or business outcomes.
- Personal ownership: project leadership and all UI/UX design. Architecture and development: shared with the co-founder.
- Infinite Order and Portfolio Templates reflect their redesigned live versions. Infinite Order opens a device-local demo with sample tables and no sign-in requirement; Portfolio Templates presents six designs with style filters, desktop/mobile previews, and interactive themes.
- Security content describes certification and training, not professional security engagements.
- The résumé is an engineering-focused web version. The original DOCX is unchanged.

## Assets and design

- `public/assets/joymeetstaste.jpg`: example restaurant storefront from `https://www.joymeetstaste.com/marketing/joymeetstaste-bunsik-hero.png`, labeled as a preview rather than the Fuyu Ramen site.
- `public/assets/templates.jpg`: cropped introduction and design-style filters from the redesigned live Portfolio Templates collection at `https://tylerkim-design-portfolio.vercel.app/templates`.
- `public/assets/infinite-order.jpg`: redesigned live table dashboard at `https://infinite-order.vercel.app/`, showing sample service data in device-local demo mode.
- `public/assets/favicon.svg`: HK monogram created for this portfolio.

No third-party fonts, analytics, or tracking services are loaded. The no-diagonal-arrows rule remains in `docs/ai/front-spec.md`.

The harness documents contain conflicting Tailwind and CSS Modules guidance. This migration preserves the established native stylesheet to fulfill the request for an unchanged design; it does not introduce another styling system or alter design tokens. The résumé background uses a body selector based on its content so client navigation preserves the original full-page and print backgrounds.
