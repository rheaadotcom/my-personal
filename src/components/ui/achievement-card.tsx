import type { Achievement } from "@/data/achievements";

type AchievementCardProps = {
  achievement: Achievement;
  index: number;
  featured?: boolean;
};

export function AchievementCard({
  achievement,
  index,
  featured = false,
}: AchievementCardProps) {
  const Icon = achievement.icon;
  const isPodiumOrSemi = achievement.tier === "podium" || achievement.tier === "semifinalist";

  return (
    <article
      className={`achievement-card ${featured ? "achievement-card-featured" : ""} achievement-tier-${achievement.tier}`}
      aria-labelledby={`${achievement.id}-title`}
    >
      {/* Corner coordinate crosshair */}
      <span className="achievement-corner-mark" aria-hidden="true">
        LOC.0{index + 1}
      </span>

      <div className="achievement-topline">
        <span className="achievement-category">{achievement.category}</span>
        <span className={`achievement-badge badge-${achievement.tier}`}>
          <span className="badge-dot" aria-hidden="true" />
          {achievement.badgeLabel}
        </span>
      </div>

      <div className="achievement-header">
        <div className={`achievement-icon-frame ${isPodiumOrSemi ? "icon-frame-highlight" : ""}`} aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <div className="achievement-titles">
          <h3 id={`${achievement.id}-title`}>{achievement.title}</h3>
          <p className="achievement-event">{achievement.event}</p>
        </div>
      </div>

      <p className="achievement-description">{achievement.description}</p>

      {achievement.teamOrProject && (
        <div className="achievement-team-callout">
          <span className="callout-label">Focus:</span>
          <span className="callout-value">{achievement.teamOrProject}</span>
        </div>
      )}

      <ul className="achievement-highlights" aria-label="Key highlights">
        {achievement.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
