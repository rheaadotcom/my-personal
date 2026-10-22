import { BookOpen, GraduationCap } from "lucide-react";
import { educationItems } from "@/data/education";

export function EducationSection() {
  return (
    <section
      className="education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="education-container">
        <header className="education-heading">
          <p className="education-eyebrow">
            <span className="eyebrow-dot" />
            ACADEMIC BACKGROUND
          </p>
          <h2 id="education-title">
            Education &amp; <span>learning.</span>
          </h2>
          <p className="education-intro">
            Building a strong foundation in computer science through formal
            study and hands-on engineering challenges.
          </p>
        </header>

        <div className="education-timeline">
          {educationItems.map((item) => {
            const Icon =
              item.type === "undergraduate" ? GraduationCap : BookOpen;
            return (
              <article
                key={item.id}
                className={`education-card education-card-${item.type}`}
                aria-labelledby={`${item.id}-title`}
              >
                {/* Left accent bar */}
                <div className="education-accent-bar" aria-hidden="true" />

                <div className="education-card-inner">
                  {/* Icon */}
                  <div className="education-icon-frame" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Body */}
                  <div className="education-card-body">
                    <div className="education-topline">
                      <span className="education-period">{item.period}</span>
                      <span
                        className={`education-type-badge education-badge-${item.type}`}
                      >
                        {item.type === "undergraduate"
                          ? "Undergraduate · Class of 2027"
                          : "Senior Secondary"}
                      </span>
                    </div>

                    <h3
                      id={`${item.id}-title`}
                      className="education-degree"
                    >
                      {item.degree}
                    </h3>

                    <p className="education-institution">
                      {item.institution}
                      <span className="education-location">
                        {" "}
                        · {item.location}
                      </span>
                    </p>

                    <p className="education-stream">{item.stream}</p>

                    {item.result && (
                      <div className="education-result-row">
                        <span className="education-result-label">
                          {item.resultLabel}
                        </span>
                        <span className="education-result-value">
                          {item.result}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
