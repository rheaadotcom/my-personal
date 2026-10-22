import Image from "next/image";
import { WoodenClothespin } from "@/components/ui/wooden-clothespin";
import { EventPhotoPlaceholder } from "@/components/ui/event-photo-placeholder";
import type { Achievement } from "@/data/achievements";

type HackathonScrapbookCardProps = {
  achievement: Achievement;
  index: number;
};

export function HackathonScrapbookCard({
  achievement,
  index,
}: HackathonScrapbookCardProps) {
  return (
    <div
      className="scrapbook-card-slot"
      style={{ "--card-rotation": achievement.rotation } as React.CSSProperties}
    >
      <article
        className="scrapbook-polaroid"
        aria-labelledby={`hackathon-${achievement.id}-title`}
      >
        {/* Wooden Clothespin clipping the card to the hanging string */}
        <WoodenClothespin />

        {/* Thick Cream Photo Frame */}
        <div className="polaroid-photo-frame">
          {achievement.image ? (
            <div className="polaroid-image-container">
              <Image
                src={achievement.image}
                alt={`Event photograph for ${achievement.title}`}
                width={480}
                height={320}
                className="polaroid-real-image"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>
          ) : (
            <EventPhotoPlaceholder
              achievement={achievement}
              index={index}
            />
          )}
        </div>

        {/* Card Body */}
        <div className="polaroid-body">
          {/* Handwritten Coral Achievement Label */}
          <div className="polaroid-handwritten-badge">
            <span className="handwritten-coral-text">{achievement.badgeLabel}</span>
          </div>

          {/* Bold, Readable Hackathon Name */}
          <h3 id={`hackathon-${achievement.id}-title`} className="polaroid-title">
            {achievement.title}
          </h3>

          {/* Organizer subtitle (if specified, e.g. Aspire For Her × Logitech) */}
          {achievement.organizer && (
            <p className="polaroid-organizer">
              <span className="organizer-prefix">Organizer:</span> {achievement.organizer}
            </p>
          )}

          {/* Concise Event Description */}
          <p className="polaroid-description">{achievement.description}</p>

          {/* Highlights / Technical Tags */}
          <div className="polaroid-tags" aria-label="Key highlights">
            {achievement.highlights.map((tag) => (
              <span key={tag} className="polaroid-tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
