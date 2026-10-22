import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#about" aria-label="Riya Bhardwaj, home">
        <span className="wordmark-mark" aria-hidden="true">rb</span>
        <span>Riya Bhardwaj</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#github">GitHub</a>
        <a className="nav-link" href="#hackathons">Hackathons</a>
        <a className="nav-link" href="#education">Education</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a
          className="nav-connect"
          href={`mailto:${portfolio.email}`}
          aria-label="Send an email to Riya Bhardwaj"
        >
          Connect <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>

      <span className="header-balance" aria-hidden="true" />
    </header>
  );
}
