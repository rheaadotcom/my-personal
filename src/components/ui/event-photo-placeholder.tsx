import type { Achievement } from "@/data/achievements";

type EventPhotoPlaceholderProps = {
  achievement: Achievement;
  index: number;
};

export function EventPhotoPlaceholder({
  achievement,
  index,
}: EventPhotoPlaceholderProps) {
  const Icon = achievement.icon;

  return (
    <div
      className="event-photo-container"
      role="img"
      aria-label={`Event snapshot placeholder for ${achievement.title}`}
    >
      {/* Background blueprint grid overlay */}
      <div className="event-photo-grid" aria-hidden="true" />

      {/* Archival corner markings */}
      <span className="photo-corner photo-corner-tl" aria-hidden="true">+</span>
      <span className="photo-corner photo-corner-tr" aria-hidden="true">+</span>
      <span className="photo-corner photo-corner-bl" aria-hidden="true">+</span>
      <span className="photo-corner photo-corner-br" aria-hidden="true">+</span>

      {/* Top archival metadata banner */}
      <div className="photo-top-bar" aria-hidden="true">
        <span className="photo-tag-id">ARCHIVE // 0{index + 1}</span>
        <span className="photo-tag-verified">VERIFIED RECORD</span>
      </div>

      {/* Central event emblem */}
      <div className="photo-emblem-wrap">
        <div className="photo-emblem-circle">
          <Icon size={26} strokeWidth={1.8} className="photo-emblem-icon" />
        </div>
        <p className="photo-emblem-title">{achievement.category}</p>
      </div>

      {/* Bottom coordinate & stamp bar */}
      <div className="photo-bottom-bar" aria-hidden="true">
        <span className="photo-spec-code">CAD.EVENT_REC_{index + 1}</span>
        <span className="photo-distinction-stamp">{achievement.result}</span>
      </div>
    </div>
  );
}
