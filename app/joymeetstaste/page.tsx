import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  "title": "JoyMeetsTaste — Selected Work by Hyunbin Kim",
  "description": "JoyMeetsTaste by JHB Web Studio. Hyunbin Kim’s role in project leadership, UI/UX design, and shared technical architecture and development.",
  "openGraph": {
    "title": "JoyMeetsTaste — Selected Work by Hyunbin Kim",
    "description": "JoyMeetsTaste by JHB Web Studio. Hyunbin Kim’s role in project leadership, UI/UX design, and shared technical architecture and development.",
    "type": "website"
  }
};

export default function JoyMeetsTastePage() {
  return (
    <>
<a className="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main" className="container">
    <section className="case-intro" aria-labelledby="case-title">
      <Link className="breadcrumb" href="/#work"> Back to selected work</Link>
      <p className="eyebrow accent">JHB WEB STUDIO / JULY 2026 — PRESENT</p>
      <h1 id="case-title">JoyMeetsTaste</h1>
      <p className="case-lead">A direct-ordering platform that helps local restaurants bring pickup and delivery orders to their own websites.</p>
      <div className="actions"><a className="button button-dark" href="https://www.joymeetstaste.com/" target="_blank" rel="noopener noreferrer">Visit the website </a><span className="launch-note">First restaurant launch in preparation</span></div>
      <dl className="case-facts"><div><dt>My role</dt><dd>Co-founder, project lead &amp; UI/UX designer<br />Shared technical architecture &amp; development</dd></div><div><dt>Team</dt><dd>Two co-founders<br />JHB Web Studio</dd></div><div><dt>Launch status · October 2026</dt><dd>Preparing to launch with Fuyu Ramen<br />First restaurant partner</dd></div></dl>
    </section>
    <figure className="case-image"><img src="/assets/joymeetstaste.jpg" width="1400" height="957" alt="An example restaurant storefront from the JoyMeetsTaste marketing website, with a menu and online ordering entry point" /><figcaption>Example restaurant storefront shown on the JoyMeetsTaste website. Product preview, not the Fuyu Ramen launch site.</figcaption></figure>
    <section className="case-section" aria-labelledby="context-title"><div><p className="eyebrow accent">01 / THE CONTEXT</p><h2 id="context-title">From working in restaurants<br />to building for them.</h2></div><div className="case-body"><p>Working in restaurants gave me direct experience with the people and routines behind a service. My earlier project, Infinite Order, focused on the server’s workflow. JoyMeetsTaste expands that focus to how a restaurant receives and manages online orders.</p><p>In July 2026, my co-founder and I established JHB Web Studio to build a direct-ordering service for local businesses. The platform brings together a restaurant website, pickup and delivery ordering, and customer promotions.</p></div></section>
    <section className="case-section" aria-labelledby="role-title"><div><p className="eyebrow accent">02 / MY CONTRIBUTION</p><h2 id="role-title">Leading the product.<br />Building as a team.</h2></div><div className="case-body"><p>I lead the project and own all UI/UX design. My co-founder and I share responsibility for the technical stack, architecture, and development.</p><ul className="case-list"><li><strong>Project leadership</strong>Leading the work from the product concept toward our first restaurant launch.</li><li><strong>End-to-end UI/UX design</strong>Designing the product’s interfaces and user experience across the ordering service.</li><li><strong>Technical stack &amp; architecture · shared</strong>Working with my co-founder on the technical choices behind the platform.</li><li><strong>Engineering &amp; integrations · shared</strong>Developing the platform and its supporting integrations together.</li></ul></div></section>
    <section className="case-section" aria-labelledby="experience-title"><div><p className="eyebrow accent">03 / THE EXPERIENCE</p><h2 id="experience-title">One connected<br />ordering journey.</h2></div><div className="case-body"><p>The product centers on a straightforward journey: customers order through a restaurant’s website, the restaurant prepares the order, and the customer receives it through pickup or delivery.</p><div className="flow"><div className="flow-step"><span>01</span><h3>Order directly</h3><p>A restaurant-branded website gives customers a direct way to order.</p></div><div className="flow-step"><span>02</span><h3>Manage the order</h3><p>The restaurant receives the order and prepares it for fulfillment.</p></div><div className="flow-step"><span>03</span><h3>Pick up or deliver</h3><p>The order reaches the customer through their selected option.</p></div></div><p className="project-description">Reward points and coupon features support the customer’s next visit.</p></div></section>
    <section className="case-section" aria-labelledby="stack-title"><div><p className="eyebrow accent">04 / TECHNOLOGY</p><h2 id="stack-title">The tools behind<br />the product.</h2></div><div className="case-body"><ul className="case-list"><li><strong>Application &amp; delivery</strong>TypeScript · Vercel · WebView</li><li><strong>Data platform</strong>Supabase</li><li><strong>Payments &amp; communications</strong>Stripe · Twilio</li><li><strong>Development environment</strong>Docker · Mailpit</li><li><strong>Development workflow</strong>AI harness engineering</li></ul><p className="project-description">Technical design and implementation are shared responsibilities within our two-person team.</p></div></section>
    <section className="case-section" aria-labelledby="launch-title"><div><p className="eyebrow accent">05 / CURRENT STAGE</p><h2 id="launch-title">Preparing for<br />the first service.</h2></div><div className="case-body"><p>As of October 2026, we are preparing the first restaurant launch with Fuyu Ramen. The next stage is to put the product into everyday use and learn from the restaurant’s experience.</p><p>This case study documents my role and the product at the pre-launch stage. Production order volume and measured business outcomes are not yet available.</p></div></section>
    <div className="case-next"><a className="button button-dark" href="mailto:tylerhkmontana@gmail.com">Let’s talk about the project </a><Link className="text-link" href="/#work"> Explore more work</Link></div>
  </main>
  <SiteFooter project="JoyMeetsTaste" />
    </>
  );
}
