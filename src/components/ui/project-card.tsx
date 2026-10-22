import Image from "next/image";
import { ArrowUpRight, CodeXml, ExternalLink, Globe, Lock } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  total?: number;
};

export function ProjectCard({ project, index, total = 6 }: ProjectCardProps) {
  const Icon = project.icon;
  const primaryHref = project.liveDemoUrl ?? project.githubUrl ?? "#";
  const hasLiveDemo = Boolean(project.liveDemoUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <article
      className={`project-card${project.featured ? " project-card-featured" : ""}`}
      style={{ "--card-rotation": project.rotation } as React.CSSProperties}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Scrapbook pushpin at top center */}
      <div className="project-pushpin" aria-hidden="true">
        <span className="pushpin-head" />
        <span className="pushpin-needle" />
      </div>

      <div className="project-card-topline">
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}{" "}
          <span>/ {String(total).padStart(2, "0")}</span>
        </span>
        <div className="project-topline-badges">
          {hasLiveDemo ? (
            <span className="project-live-indicator">
              <span className="project-live-dot" aria-hidden="true" />
              Live Demo
            </span>
          ) : (
            <span className="project-featured">Featured</span>
          )}
        </div>
      </div>

      {/* Large project screenshot with photo chrome */}
      <a
        className="project-screenshot-frame"
        href={primaryHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} ${hasLiveDemo ? "live demo" : "GitHub repository"} in a new tab`}
      >
        <div className="screenshot-chrome-bar" aria-hidden="true">
          <div className="screenshot-dots">
            <span className="screenshot-dot screenshot-dot-close" />
            <span className="screenshot-dot screenshot-dot-minimize" />
            <span className="screenshot-dot screenshot-dot-maximize" />
          </div>
          <div className="screenshot-address-bar">
            <Lock size={9} className="screenshot-lock-icon" />
            <span className="screenshot-url-text">
              {project.displayUrl ??
                (project.liveDemoUrl
                  ? new URL(project.liveDemoUrl).hostname
                  : `github.com/rheaadotcom/${project.id}`)}
            </span>
          </div>
          <div className="screenshot-action-icon">
            <ExternalLink size={11} />
          </div>
        </div>

        <div className="screenshot-viewport">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1920}
            height={1080}
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, 510px"
            className="project-screenshot-image"
            loading="lazy"
          />
          <div className="screenshot-hover-overlay" aria-hidden="true">
            <span className="screenshot-hover-pill">
              {hasLiveDemo ? (
                <>
                  <Globe size={13} />
                  <span>Open Live Demo</span>
                  <ArrowUpRight size={13} />
                </>
              ) : (
                <>
                  <CodeXml size={13} />
                  <span>View Repository</span>
                  <ArrowUpRight size={13} />
                </>
              )}
            </span>
          </div>
        </div>
      </a>

      {/* Title & Icon Header */}
      <div className="project-card-header">
        <div className="project-card-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
          <span className="project-icon-mark" />
        </div>
        <div className="project-card-heading">
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <span className="project-category">{project.category}</span>
        </div>
      </div>

      {/* Description */}
      <div className="project-card-content">
        <p>{project.description}</p>
      </div>

      {/* Technologies */}
      <ul className="project-technologies" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="project-card-actions">
        {hasGithub && (
          <a
            className="project-action project-action-primary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            <CodeXml size={15} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
        {hasLiveDemo && (
          <a
            className={`project-action ${hasGithub ? "project-action-secondary" : "project-action-primary"}`}
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open the live ${project.name} demo`}
          >
            <Globe size={14} aria-hidden="true" />
            Live Demo
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
