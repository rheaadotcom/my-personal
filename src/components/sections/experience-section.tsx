import { ArrowUpRight, Briefcase, Calendar, CodeXml, GraduationCap, Sparkles } from "lucide-react";
import { experiences } from "@/data/experience";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  const hasExperiences = experiences.length > 0;

  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-container">
        {/* Section Header */}
        <header className="experience-heading">
          <div>
            <p className="experience-eyebrow">
              <span className="eyebrow-dot" />
              PROFESSIONAL JOURNEY
            </p>
            <h2 id="experience-title">
              Work &amp; <span>experience.</span>
            </h2>
            <p className="experience-intro">
              A transparent record of engineering internships, corporate roles, and
              practical software experience.
            </p>
          </div>

          <div className="experience-status-badge">
            <span className="status-badge-dot" aria-hidden="true" />
            <span>Seeking Summer 2025/2026 SWE Opportunities</span>
          </div>
        </header>

        {hasExperiences ? (
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <article key={exp.id} className="experience-item">
                <div className="experience-period">
                  <Calendar size={13} aria-hidden="true" />
                  <span>{exp.period}</span>
                </div>
                <div className="experience-details">
                  <div className="experience-topline">
                    <h3 className="experience-role">{exp.role}</h3>
                    <span className="experience-badge">{exp.type}</span>
                  </div>
                  <p className="experience-company">
                    {exp.organization} {exp.location ? `· ${exp.location}` : ""}
                  </p>
                  <p className="experience-desc">{exp.description}</p>
                  <ul className="experience-tech" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="experience-placeholder-card">
            <div className="placeholder-topline">
              <span className="placeholder-tag">
                <GraduationCap size={14} aria-hidden="true" />
                ACADEMIC &amp; ENGINEERING FOUNDATION
              </span>
              <span className="placeholder-badge">Class of 2027</span>
            </div>

            <div className="placeholder-content">
              <div className="placeholder-icon" aria-hidden="true">
                <Briefcase size={24} strokeWidth={1.8} />
              </div>
              <div className="placeholder-body">
                <h3>B.Tech Computer Science &amp; Engineering</h3>
                <p className="placeholder-institution">
                  Maharana Institute of Professional Studies, Kanpur · 2023 – 2027
                </p>
                <p className="placeholder-narrative">
                  Currently pursuing Computer Science &amp; Engineering with a focus on
                  full-stack architecture, AI application development, and practical data engineering.
                  Corporate employment records will be documented here as verified internship and
                  industry positions commence.
                </p>
                <div className="placeholder-highlights">
                  <div className="placeholder-pill">
                    <Sparkles size={12} aria-hidden="true" />
                    <span>Open-Source Contributor (SSOC 2025)</span>
                  </div>
                  <div className="placeholder-pill">
                    <CodeXml size={12} aria-hidden="true" />
                    <span>6 Production Projects Shipped</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="placeholder-footer">
              <span className="placeholder-notice">
                * To maintain portfolio integrity, corporate history is populated only with verified employment records.
              </span>
              <a
                className="placeholder-cta"
                href={portfolio.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Inspect Code on GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
