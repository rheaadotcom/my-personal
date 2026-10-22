"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { HackathonsBackground } from "@/components/ui/hackathons-background";
import { HangingString } from "@/components/ui/hanging-string";
import { HackathonScrapbookCard } from "@/components/ui/hackathon-scrapbook-card";

export function AchievementsSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll indicators
  const updateScrollState = useCallback(() => {
    if (!galleryRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Scroll previous
  const handlePrev = () => {
    if (!galleryRef.current) return;
    const scrollAmount = Math.max(galleryRef.current.clientWidth * 0.75, 280);
    galleryRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  // Scroll next
  const handleNext = () => {
    if (!galleryRef.current) return;
    const scrollAmount = Math.max(galleryRef.current.clientWidth * 0.75, 280);
    galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      className="achievements-section"
      id="hackathons"
      aria-labelledby="hackathons-title"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* 1. Black engineering blueprint grid background */}
      <HackathonsBackground />

      <div className="achievements-container">
        {/* 2. Section Heading */}
        <header className="hackathons-heading">
          <div className="hackathons-heading-left">
            <p className="hackathons-eyebrow">
              <span className="eyebrow-dot" />
              COMPETITIVE MILESTONES
            </p>

            <div className="hackathons-title-group">
              {/* Circular cream badge with coral trophy icon */}
              <div className="hackathons-trophy-badge" aria-hidden="true">
                <Trophy size={20} className="trophy-coral-icon" />
              </div>
              <h2 id="hackathons-title">Hackathons</h2>
            </div>

            {/* Short engineering underline beneath heading */}
            <div className="hackathons-underline" aria-hidden="true">
              <span className="underline-tick-left" />
              <span className="underline-core-line" />
              <span className="underline-tick-right" />
            </div>

            <p className="hackathons-intro">
              National hackathons, engineering campus challenges, and technical
              sprints where ideas transformed into verified working software under pressure.
            </p>
          </div>
        </header>

        {/* 3. Scrapbook Hanging Gallery */}
        <div className="scrapbook-gallery-stage">
          {/* Hanging string behind the cards with washi tape at ends */}
          <HangingString />

          {/* Horizontally scrollable Polaroid cards container */}
          <div
            className="scrapbook-gallery-track"
            ref={galleryRef}
            role="region"
            aria-label="Hackathons photo gallery"
            tabIndex={0}
          >
            {achievements.map((achievement, index) => (
              <HackathonScrapbookCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* 4. Circular Carousel Controls at Bottom-Right */}
        <div className="hackathons-footer-bar">
          <div className="hackathons-counter" aria-hidden="true">
            <span className="counter-dot" />
            <span>0{achievements.length} VERIFIED ENTRIES</span>
          </div>

          <div className="hackathons-carousel-controls" aria-label="Gallery carousel controls">
            <button
              type="button"
              className="carousel-control-btn carousel-btn-prev"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous hackathon"
            >
              <ArrowLeft size={18} className="carousel-arrow-icon" />
            </button>
            <button
              type="button"
              className="carousel-control-btn carousel-btn-next"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Scroll to next hackathon"
            >
              <ArrowRight size={18} className="carousel-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
