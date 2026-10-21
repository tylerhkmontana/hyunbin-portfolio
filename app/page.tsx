import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  "title": "Hyunbin Kim — Software Engineer",
  "description": "Hyunbin Kim — software engineer, OSCP+ certified, and co-founder of JHB Web Studio. Building practical software for local restaurants.",
  "openGraph": {
    "title": "Hyunbin Kim — Software Engineer",
    "description": "Hyunbin Kim — software engineer, OSCP+ certified, and co-founder of JHB Web Studio. Building practical software for local restaurants.",
    "type": "website"
  }
};

export default function HomePage() {
  return (
    <>
<a className="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <p className="eyebrow">Software engineer · Co-founder, JHB Web Studio</p>
        <h1 id="hero-title">I build software for<br />restaurant operations.</h1>
        <p className="hero-description">Currently building <Link href="/joymeetstaste">JoyMeetsTaste</Link>, a platform that lets local restaurants take pickup and delivery orders through their own websites.</p>
        <div className="actions"><Link className="button button-dark" href="/joymeetstaste">View current project</Link><Link className="text-link" href="/resume">View résumé</Link></div>
      </div>
      <aside className="hero-role" aria-label="My role at JHB Web Studio">
        <h2>My role at JHB</h2>
        <dl><div><dt>Lead</dt><dd>Project direction and all UI/UX design</dd></div><div><dt>Build together</dt><dd>Technical architecture and development with my co-founder</dd></div></dl>
        <p className="hero-background">New York · OSCP+ certified</p>
      </aside>
    </section>

    <section className="work-section container" id="work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title">Selected work</h2></div>
      <article className="featured-project">
        <div className="featured-copy">
          <p className="eyebrow">Current project · July 2026–present</p>
          <h3>JoyMeetsTaste</h3>
          <p className="project-subtitle">Direct ordering for local restaurants</p>
          <p className="project-description">Restaurant websites, pickup and delivery ordering, and customer promotions in one platform.</p>
          <dl className="project-scope"><div><dt>My contribution</dt><dd>Project leadership, UI/UX design, and shared engineering in a two-person team.</dd></div><div><dt>Current stage</dt><dd>Preparing the first restaurant launch with Fuyu Ramen.</dd></div></dl>
          <ul className="tags" aria-label="JoyMeetsTaste technologies"><li>TypeScript</li><li>Supabase</li><li>Stripe</li><li>Vercel</li></ul>
          <div className="project-links"><Link href="/joymeetstaste">Project details</Link><a href="https://www.joymeetstaste.com/" target="_blank" rel="noopener noreferrer">Visit website</a></div>
        </div>
        <Link href="/joymeetstaste" className="featured-visual" aria-label="Read the JoyMeetsTaste project case study">
          <img src="/assets/joymeetstaste.jpg" width="1400" height="957" alt="JoyMeetsTaste’s example restaurant website featuring Korean food and direct online ordering" fetchPriority="high" />
          <span className="image-caption">Example restaurant storefront · Product preview</span>
        </Link>
      </article>

      <div className="project-grid">
        <article className="project-card">
          <a className="project-image order-image" href="https://infinite-order.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Open Infinite Order demo in a new tab">
            <img src="/assets/infinite-order.jpg" width="1280" height="720" alt="Infinite Order’s redesigned table dashboard with service statuses, allergy notes, and a selected table’s order log" loading="lazy" />
          </a>
          <div className="project-heading"><h3>Infinite Order</h3><span className="project-kind">RESTAURANT OPERATIONS</span></div>
          <p>A restaurant service workspace built for MOKYO, redesigned around a table dashboard, searchable menu, and order queue. Explore the interface with sample data saved on your device.</p>
          <ul className="tags" aria-label="Infinite Order technologies"><li>Next.js</li><li>Firebase</li><li>PWA</li></ul>
          <div className="project-links"><a href="https://infinite-order.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo</a><a href="https://github.com/tylerhkmontana/infinite-order" target="_blank" rel="noopener noreferrer">GitHub</a><span className="link-note">No sign-in required · Device-local demo</span></div>
        </article>
        <article className="project-card">
          <a className="project-image template-image" href="https://tylerkim-design-portfolio.vercel.app/templates" target="_blank" rel="noopener noreferrer" aria-label="Explore the portfolio templates in a new tab">
            <img src="/assets/templates.jpg" width="900" height="500" alt="Portfolio Templates’ redesigned collection introduction with six designs and editorial, minimal, and expressive style filters" loading="lazy" />
          </a>
          <div className="project-heading"><h3>Portfolio Templates</h3><span className="project-kind">WEB DESIGN &amp; CMS</span></div>
          <p>An editorial collection of six Contentful-powered portfolio templates. Browse by design style, switch between desktop and mobile previews, and explore interactive color themes.</p>
          <ul className="tags" aria-label="Portfolio Templates technologies"><li>Next.js</li><li>Contentful</li><li>Sass</li></ul>
          <div className="project-links"><a href="https://tylerkim-design-portfolio.vercel.app/templates" target="_blank" rel="noopener noreferrer">Explore templates</a><a href="https://github.com/tylerkim-freelancing/tylerkim-design-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a></div>
        </article>
      </div>
    </section>

    <section className="security-section" id="security" aria-labelledby="security-title">
      <div className="container security-grid">
        <div><h2 id="security-title">Security background</h2><p className="security-description">Alongside my engineering work, I’m developing my security practice through hands-on training in penetration testing and application security.</p><Link className="text-link" href="/resume#security-skills">View security skills</Link></div>
        <div className="security-details"><div className="certification"><div><h3>OSCP+</h3><p>OffSec Certified Professional+</p><span>Earned January 2026</span></div></div><div className="security-focus"><h3>Training &amp; focus</h3><p>Web application testing · Network enumeration · Active Directory · Linux &amp; Windows privilege escalation</p><div className="security-tools">Python / Bash / Burp Suite / Nmap</div></div></div>
      </div>
    </section>

    <section className="about-section container" id="about" aria-labelledby="about-title">
      <div className="section-label"><h2 id="about-title">About</h2></div>
      <div className="about-grid"><div><h3>From restaurant service<br />to software development.</h3><p>I’m Hyunbin, a New York–based software engineer and co-founder of JHB Web Studio. I earned my computer science degree at Queens College in 2021, then spent several years working in restaurants.</p><p>That experience gave me a close view of the everyday problems behind a busy service. Today, I turn that understanding into software—from a digital order pad to a direct-ordering platform for local businesses.</p><p>At JHB, I lead the project and all UI/UX design, and share technical architecture and development with my co-founder.</p><div className="about-links"><a className="text-link" href="https://github.com/tylerhkmontana" target="_blank" rel="noopener noreferrer">GitHub</a><a className="text-link" href="https://www.linkedin.com/in/hyunbinkim/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div>
        <div className="background"><div className="timeline-row"><span>2026 — NOW</span><div><h4>Co-founder · JHB Web Studio</h4><p>Project leadership, UI/UX, and shared engineering.</p></div></div><div className="timeline-row"><span>JAN 2026</span><div><h4>OSCP+ · OffSec</h4><p>Hands-on offensive security certification.</p></div></div><div className="timeline-row"><span>JUL 2024</span><div><h4>IBM Full Stack Software Developer</h4><p>Professional certificate.</p></div></div><div className="timeline-row"><span>2021</span><div><h4>BA in Computer Science</h4><p>Queens College, City University of New York.</p></div></div><div className="location-note">Based in Queens, New York <span>English / Korean</span></div></div>
      </div>
    </section>

    <section className="contact-section container" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Get in touch</h2><div className="contact-bottom"><p>I’m open to software engineering and cybersecurity opportunities.</p><a className="text-link email-link" href="mailto:tylerhkmontana@gmail.com">tylerhkmontana@gmail.com</a></div></section>
  </main>
  <SiteFooter />
    </>
  );
}
