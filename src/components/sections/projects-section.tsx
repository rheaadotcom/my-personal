import { ArrowDownRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectsBackground } from "@/components/ui/projects-background";

export function ProjectsSection() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      {/* Engineering blueprint & technical grid background */}
      <ProjectsBackground />

      <div className="projects-container">
        <header className="projects-heading">
          <div>
            <p className="projects-eyebrow">
              <span className="eyebrow-dot" />
              SELECTED WORK
            </p>
            <h2 id="projects-title">
              Things I&apos;ve <span>made.</span>
            </h2>
            <p className="projects-intro">
              A few projects shaped by curiosity, useful problems, and a lot of
              learning.
            </p>
          </div>
          <a
            className="projects-profile-link"
            href="https://github.com/rheaadotcom"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>

        <p className="projects-note">
          Each project links to its repository or live site for more details.
        </p>
      </div>
    </section>
  );
}
