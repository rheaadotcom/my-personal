import { Hero } from "@/components/sections/hero";
import { GitHubSection } from "@/components/sections/github-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { EducationSection } from "@/components/sections/education-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Opening dashboard + social links */}
        <Hero />
        {/* 2. GitHub contribution graph */}
        <GitHubSection />

        {/* 3b. Hackathons */}
        <AchievementsSection />
        {/* 4. Education */}
        <EducationSection />
        {/* 5. Projects */}
        <ProjectsSection />
      </main>
    </>
  );
}
