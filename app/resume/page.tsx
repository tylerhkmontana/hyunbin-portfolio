import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  "title": "Résumé — Hyunbin Kim",
  "description": "Hyunbin Kim’s professional background, software projects, technical skills, and OSCP+ certification.",
  "openGraph": {
    "title": "Résumé — Hyunbin Kim",
    "description": "Hyunbin Kim’s professional background, software projects, technical skills, and OSCP+ certification.",
    "type": "website"
  }
};

export default function ResumePage() {
  return (
    <>
<a className="skip-link" href="#main">Skip to résumé</a>
  <div className="resume-toolbar"><Link className="text-link" href="/"> Portfolio</Link><PrintButton /></div>
  <main className="resume-sheet" id="main">
    <header className="resume-header"><h1>Hyunbin Kim</h1><p>Software Engineer · Co-founder, JHB Web Studio · OSCP+</p><div className="resume-contact"><span>Queens, New York</span><a href="mailto:tylerhkmontana@gmail.com">tylerhkmontana@gmail.com</a><a href="https://github.com/tylerhkmontana">GitHub</a><a href="https://www.linkedin.com/in/hyunbinkim/">LinkedIn</a><Link href="/">Portfolio</Link></div></header>
    <section className="resume-section" aria-labelledby="summary-title"><h2 id="summary-title">Profile</h2><p>Software engineer and OSCP+ holder with a BA in Computer Science and firsthand restaurant experience. Co-founded JHB Web Studio to build direct-ordering software for local restaurants. Lead project direction and UI/UX design, sharing technical architecture and development with a co-founder.</p></section>
    <section className="resume-section" aria-labelledby="experience-title"><h2 id="experience-title">Experience</h2><article className="resume-entry"><div className="resume-entry-heading"><h3>JHB Web Studio · Co-founder / Project Lead</h3><span>July 2026 — Present</span></div><ul><li>Lead the JoyMeetsTaste project and all UI/UX design for a platform supporting direct restaurant orders, pickup, and delivery.</li><li>Share technical stack design, architecture, and development with a co-founder, using TypeScript, Supabase, Vercel, Stripe, and Twilio.</li><li>Work with WebView, Docker, Mailpit, and AI harness engineering as part of the platform and development workflow.</li><li>Prepare the first restaurant launch with Fuyu Ramen; pre-launch as of October 2026.</li></ul></article></section>
    <section className="resume-section" aria-labelledby="projects-title"><h2 id="projects-title">Selected Projects</h2><article className="resume-entry"><div className="resume-entry-heading"><h3>Infinite Order · Restaurant Service Workspace</h3><span>Next.js · Firebase / Firestore · Sass</span></div><ul><li>Built a mobile-friendly PWA for MOKYO and redesigned its UI around table statuses, a searchable menu with allergen information, and an order queue.</li><li>Implemented Firebase Authentication and Firestore-backed order pad storage; added a device-local demo with sample service data and no sign-in requirement.</li></ul></article><article className="resume-entry"><div className="resume-entry-heading"><h3>Portfolio Templates · CMS-driven Websites</h3><span>Next.js · Contentful · Sass</span></div><ul><li>Designed and built six portfolio templates with Contentful-managed content and interactive color themes.</li><li>Redesigned the collection with design-style filters and desktop/mobile live previews; integrated CMS content and metadata into statically generated Next.js pages.</li></ul></article></section>
    <section className="resume-section resume-skills" aria-labelledby="skills-title"><h2 id="skills-title">Technical Skills</h2><p><strong>Engineering:</strong> TypeScript, JavaScript, Python, React, Next.js, Flask, SQL, Firebase, Supabase, Git, Docker, Vercel, Stripe, Twilio.</p><p id="security-skills"><strong>Security training:</strong> Network and web application testing, enumeration, Active Directory, Linux/Windows privilege escalation; Nmap, Burp Suite, Metasploit, BloodHound, Impacket; Bash and PowerShell.</p></section>
    <section className="resume-section" aria-labelledby="education-title"><h2 id="education-title">Education &amp; Certifications</h2><div className="resume-entry-heading"><p><strong>BA in Computer Science</strong> · Queens College, CUNY</p><span>2021</span></div><div className="resume-entry-heading"><p><strong>OSCP+</strong> · OffSec</p><span>January 2026</span></div><div className="resume-entry-heading"><p><strong>IBM Full Stack Software Developer Certificate</strong></p><span>July 2024</span></div></section>
  </main>
  <p className="resume-note">For a clean PDF, choose “Save as PDF” in the print dialog and turn off browser headers and footers.</p>
    </>
  );
}
