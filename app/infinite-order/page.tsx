import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  "title": "Infinite Order — Selected Work by Hyunbin Kim",
  "description": "A restaurant service workspace built for MOKYO, with a table dashboard, searchable menu, order queue, and device-local demo.",
  "openGraph": {
    "title": "Infinite Order — Selected Work by Hyunbin Kim",
    "description": "A restaurant service workspace built for MOKYO, with a table dashboard, searchable menu, order queue, and device-local demo.",
    "type": "website"
  }
};

export default function InfiniteOrderPage() {
  return (
    <>
<a className="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main" className="container">
    <section className="case-intro" aria-labelledby="case-title">
      <Link className="breadcrumb" href="/#work"> Back to selected work</Link>
      <p className="eyebrow accent">RESTAURANT OPERATIONS / MOKYO</p>
      <h1 id="case-title">Infinite Order</h1>
      <p className="case-lead">A restaurant service workspace that brings table status, menu information, and orders into one place.</p>
      <div className="actions"><a className="button button-dark" href="https://infinite-order.vercel.app/" target="_blank" rel="noopener noreferrer">Try the live demo</a><a className="text-link" href="https://github.com/tylerhkmontana/infinite-order" target="_blank" rel="noopener noreferrer">GitHub</a></div>
      <dl className="case-facts"><div><dt>My contribution</dt><dd>UI/UX design &amp; development<br />Restaurant service workflow</dd></div><div><dt>Built for</dt><dd>MOKYO<br />Mobile-friendly service workspace</dd></div><div><dt>Demo access</dt><dd>No sign-in required<br />Sample data saved on your device</dd></div></dl>
    </section>
    <figure className="case-image"><img src="/assets/infinite-order.jpg" width="1280" height="720" alt="Infinite Order’s table dashboard with service statuses, allergy notes, and a selected table’s order log" /><figcaption>Redesigned table dashboard with sample service data in device-local demo mode.</figcaption></figure>
    <section className="case-section" aria-labelledby="context-title"><div><p className="eyebrow accent">01 / THE CONTEXT</p><h2 id="context-title">Built around<br />a busy service.</h2></div><div className="case-body"><p>Working in restaurants gave me a close view of the details servers need to keep track of: which tables need attention, what guests have ordered, and which menu items fit their dietary needs.</p><p>I built Infinite Order for MOKYO as a digital order pad, then redesigned the interface around a table dashboard, searchable menu, and order queue. The project focuses on the server’s workflow during service.</p></div></section>
    <section className="case-section" aria-labelledby="contribution-title"><div><p className="eyebrow accent">02 / MY CONTRIBUTION</p><h2 id="contribution-title">From an order pad<br />to a service workspace.</h2></div><div className="case-body"><p>I designed and built a mobile-friendly PWA, connecting the service interface with Firebase-backed authentication and order storage.</p><ul className="case-list"><li><strong>Table dashboard</strong>Redesigned the interface to bring table statuses, allergy notes, and the selected table’s order log into view.</li><li><strong>Menu &amp; order flow</strong>Built a searchable menu with allergen information and an order queue for reviewing service activity.</li><li><strong>Authentication &amp; storage</strong>Implemented Firebase Authentication and Firestore-backed order pad storage.</li><li><strong>Accessible demo</strong>Added sample service data and device-local persistence so visitors can explore without creating an account.</li></ul></div></section>
    <section className="case-section" aria-labelledby="experience-title"><div><p className="eyebrow accent">03 / THE EXPERIENCE</p><h2 id="experience-title">A clear path<br />through each order.</h2></div><div className="case-body"><p>The workspace connects an overview of the dining room with the details of an individual table and its orders.</p><div className="flow"><div className="flow-step"><span>01</span><h3>Check the tables</h3><p>Review service statuses and select a table to see its notes and order log.</p></div><div className="flow-step"><span>02</span><h3>Find menu items</h3><p>Search the menu and reference allergen information while taking an order.</p></div><div className="flow-step"><span>03</span><h3>Review the queue</h3><p>Keep track of orders through the order queue and table workspace.</p></div></div></div></section>
    <section className="case-section" aria-labelledby="stack-title"><div><p className="eyebrow accent">04 / TECHNOLOGY</p><h2 id="stack-title">The tools behind<br />the workspace.</h2></div><div className="case-body"><ul className="case-list"><li><strong>Application</strong>Next.js · React</li><li><strong>Authentication &amp; data</strong>Firebase Authentication · Firestore</li><li><strong>Interface &amp; access</strong>Sass · Progressive Web App</li><li><strong>Demo experience</strong>Sample tables and orders with device-local persistence</li></ul></div></section>
    <section className="case-section" aria-labelledby="demo-title"><div><p className="eyebrow accent">05 / EXPLORE THE PROJECT</p><h2 id="demo-title">Try a sample<br />restaurant service.</h2></div><div className="case-body"><p>The public demo opens directly into a sample workspace. No sign-in is required, and demo changes are saved on your device so you can explore the table dashboard, menu, and order queue.</p><p>Infinite Order also informed my next restaurant project, <Link className="text-link" href="/joymeetstaste">JoyMeetsTaste</Link>, which expands the focus from the server’s workflow to direct online ordering.</p></div></section>
    <div className="case-next"><a className="button button-dark" href="https://infinite-order.vercel.app/" target="_blank" rel="noopener noreferrer">Try the live demo</a><Link className="text-link" href="/#work"> Explore more work</Link></div>
  </main>
  <SiteFooter project="Infinite Order" />
    </>
  );
}
