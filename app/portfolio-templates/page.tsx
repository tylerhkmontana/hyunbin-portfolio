import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  "title": "Portfolio Templates — Selected Work by Hyunbin Kim",
  "description": "Six Contentful-powered portfolio templates with design-style filters, desktop and mobile previews, and interactive color themes.",
  "openGraph": {
    "title": "Portfolio Templates — Selected Work by Hyunbin Kim",
    "description": "Six Contentful-powered portfolio templates with design-style filters, desktop and mobile previews, and interactive color themes.",
    "type": "website"
  }
};

export default function PortfolioTemplatesPage() {
  return (
    <>
<a className="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main" className="container">
    <section className="case-intro" aria-labelledby="case-title">
      <Link className="breadcrumb" href="/#work"> Back to selected work</Link>
      <p className="eyebrow accent">WEB DESIGN &amp; CMS / TEMPLATE COLLECTION</p>
      <h1 id="case-title">Portfolio Templates</h1>
      <p className="case-lead">Six CMS-powered portfolio templates, with distinct visual styles and an interactive way to explore each design.</p>
      <div className="actions"><a className="button button-dark" href="https://tylerkim-design-portfolio.vercel.app/templates" target="_blank" rel="noopener noreferrer">Explore templates</a><a className="text-link" href="https://github.com/tylerkim-freelancing/tylerkim-design-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a></div>
      <dl className="case-facts"><div><dt>My contribution</dt><dd>Template design &amp; development<br />CMS integration</dd></div><div><dt>Collection</dt><dd>Six portfolio designs<br />Editorial, minimal &amp; expressive styles</dd></div><div><dt>Preview experience</dt><dd>Desktop &amp; mobile views<br />Interactive color themes</dd></div></dl>
    </section>
    <figure className="case-image"><img src="/assets/templates.jpg" width="900" height="500" alt="Portfolio Templates’ collection introduction with six designs and editorial, minimal, and expressive style filters" /><figcaption>The redesigned collection introduces six portfolio designs with filters for browsing by visual style.</figcaption></figure>
    <section className="case-section" aria-labelledby="context-title"><div><p className="eyebrow accent">01 / THE CONTEXT</p><h2 id="context-title">Different styles.<br />Content at the center.</h2></div><div className="case-body"><p>A portfolio’s layout shapes how its work is presented. This project explores that relationship through six designs, spanning editorial, minimal, and expressive styles.</p><p>The collection pairs those visual directions with Contentful-managed content and an interactive browsing experience. Visitors can compare templates, inspect different screen sizes, and try color themes.</p></div></section>
    <section className="case-section" aria-labelledby="contribution-title"><div><p className="eyebrow accent">02 / MY CONTRIBUTION</p><h2 id="contribution-title">Designing the collection.<br />Building the experience.</h2></div><div className="case-body"><p>I designed and built the six portfolio templates and connected CMS content to statically generated Next.js pages.</p><ul className="case-list"><li><strong>Template design &amp; development</strong>Created six portfolio designs with distinct layouts and interactive color themes.</li><li><strong>Collection browsing</strong>Redesigned the collection with an editorial introduction and design-style filters.</li><li><strong>Responsive previews</strong>Added desktop and mobile preview modes for exploring how each design adapts.</li><li><strong>CMS content &amp; metadata</strong>Integrated Contentful-managed content and metadata into statically generated Next.js pages.</li></ul></div></section>
    <section className="case-section" aria-labelledby="experience-title"><div><p className="eyebrow accent">03 / THE EXPERIENCE</p><h2 id="experience-title">Find a style.<br />Explore the details.</h2></div><div className="case-body"><p>The collection gives visitors a way to move from a broad visual direction to a closer look at an individual template.</p><div className="flow"><div className="flow-step"><span>01</span><h3>Browse by style</h3><p>Explore all six designs or filter by editorial, minimal, and expressive styles.</p></div><div className="flow-step"><span>02</span><h3>Switch the viewport</h3><p>Compare desktop and mobile previews to see each layout at different sizes.</p></div><div className="flow-step"><span>03</span><h3>Try a color theme</h3><p>Explore interactive themes to see how color changes the design’s character.</p></div></div></div></section>
    <section className="case-section" aria-labelledby="stack-title"><div><p className="eyebrow accent">04 / TECHNOLOGY</p><h2 id="stack-title">A CMS behind<br />each portfolio.</h2></div><div className="case-body"><ul className="case-list"><li><strong>Application &amp; rendering</strong>Next.js · React · Static page generation</li><li><strong>Content platform</strong>Contentful-managed portfolio content and metadata</li><li><strong>Interface</strong>Sass · Responsive layouts · Interactive color themes</li><li><strong>Collection experience</strong>Design-style filters · Desktop and mobile live previews</li></ul></div></section>
    <section className="case-section" aria-labelledby="explore-title"><div><p className="eyebrow accent">05 / EXPLORE THE PROJECT</p><h2 id="explore-title">Six perspectives<br />on a portfolio.</h2></div><div className="case-body"><p>The live collection brings the designs together in one place. Browse the style filters, open a template, and switch between desktop and mobile previews to explore the layouts and themes.</p><p>The source repository provides a closer look at the template implementation and how Contentful content connects to the pages.</p></div></section>
    <div className="case-next"><a className="button button-dark" href="https://tylerkim-design-portfolio.vercel.app/templates" target="_blank" rel="noopener noreferrer">Explore templates</a><Link className="text-link" href="/#work"> Explore more work</Link></div>
  </main>
  <SiteFooter project="Portfolio Templates" />
    </>
  );
}
