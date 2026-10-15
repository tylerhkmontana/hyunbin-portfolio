import Link from "next/link";
import { CurrentYear } from "./current-year";

export function SiteHeader() {
  return (
    <header className="site-header container">
      <Link className="wordmark" href="/" aria-label="Hyunbin Kim home">Hyunbin Kim</Link>
      <nav className="navigation" aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#security">Security</Link>
        <Link href="/#about">About</Link>
        <Link className="nav-resume" href="/resume">Résumé</Link>
      </nav>
    </header>
  );
}

export function SiteFooter({ project }: { project?: string }) {
  return (
    <footer className="site-footer container">
      <span>© <CurrentYear /> Hyunbin Kim</span>
      {project && <span>Selected work / {project}</span>}
      <a href="#main">Back to top</a>
    </footer>
  );
}
