"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Link2, Mail, Terminal } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        className="hero page-shell"
        id="about"
        aria-labelledby="hero-title"
      >
        <div className="hero-main">
          {/* Portrait */}
          <motion.div
            className="portrait-wrap"
            initial={{ opacity: 0, y: 18, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="portrait-pin" aria-hidden="true" />
            <div className="polaroid">
              <Image
                className="portrait-image"
                src="/images/riya-profile.jpg"
                alt="Riya Bhardwaj standing outdoors"
                width={1103}
                height={1280}
                priority
                sizes="(max-width: 700px) 72vw, 300px"
              />
              <span className="polaroid-caption">a little piece of me</span>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          >
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              COMPUTER SCIENCE &amp; ENGINEERING
            </p>
            <h1 id="hero-title">{portfolio.name}</h1>
            <p className="hero-tagline">{portfolio.tagline}</p>
            <p className="hero-intro">
              I build full-stack applications and AI-powered tools.
            </p>

            {/* Primary actions */}
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={`mailto:${portfolio.email}?subject=Portfolio%20Contact`}
              >
                Get in touch <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Social icon links */}
            <div className="hero-social-links" aria-label="Social profiles">
              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub profile"
              >
                <Terminal size={16} aria-hidden="true" />
              </a>
              <a
                href={portfolio.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <Link2 size={16} aria-hidden="true" />
              </a>
              <a
                href={portfolio.leetcodeUrl}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LeetCode profile"
              >
                <Code2 size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${portfolio.email}?subject=Portfolio%20Contact`}
                className="social-btn"
                aria-label="Send email"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>

            <span className="handwritten hero-scribble" aria-hidden="true">
              building, learning, repeating
            </span>
          </motion.div>
        </div>

        {/* Biography + GitHub activity card */}
        <div className="hero-details" id="story">
          <motion.article
            className="bio-paper"
            initial={{ opacity: 0, y: 18, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            aria-labelledby="bio-title"
          >
            <div className="paper-tape" aria-hidden="true" />
            <div className="paper-heading">
              <span className="paper-kicker">A NOTE FROM MY DESK</span>
              <span className="handwritten paper-doodle" aria-hidden="true">
                ✳
              </span>
            </div>
            <h2 id="bio-title" className="sr-only">
              A little about me
            </h2>
            <ul className="bio-list">
              {portfolio.biography.map(({ text, highlight }) => {
                const [before, after] = highlight
                  ? text.split(highlight)
                  : [text, ""];

                return (
                  <li key={text}>
                    {highlight ? (
                      <>
                        {before}
                        <span className="bio-highlight">{highlight}</span>
                        {after}
                      </>
                    ) : (
                      text
                    )}
                  </li>
                );
              })}
            </ul>
            <span className="handwritten paper-signoff" aria-hidden="true">
              nice to meet you!
            </span>
          </motion.article>

          <motion.aside
            className="activity-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            aria-labelledby="activity-title"
          >
            <div className="activity-topline">
              <span className="activity-icon">
                <Terminal size={18} aria-hidden="true" />
              </span>
              <span className="activity-label">OPEN SOURCE · ON GITHUB</span>
              <span className="activity-spark" aria-hidden="true">✳</span>
            </div>
            <div className="activity-content">
              <div>
                <h2 id="activity-title">My work lives over here.</h2>
                <p>
                  Explore my projects and repositories, and see live activity
                  on GitHub.
                </p>
              </div>
              <a
                className="activity-link"
                href={portfolio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Riya Bhardwaj's GitHub profile"
              >
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <a
              className="activity-profile"
              href={portfolio.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/rheaadotcom
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </motion.aside>
        </div>
      </section>
    </MotionConfig>
  );
}
