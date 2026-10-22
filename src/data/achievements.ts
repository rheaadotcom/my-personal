import {
  Medal,
  Rocket,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type DistinctionTier =
  | "podium"
  | "semifinalist"
  | "ranked"
  | "qualifier"
  | "contributor"
  | "participant";

export type Achievement = {
  id: string;
  title: string;
  event: string;
  organizer?: string;
  image?: string;
  year?: string;
  result: string;
  tier: DistinctionTier;
  badgeLabel: string;
  category: string;
  description: string;
  teamOrProject?: string;
  highlights: readonly string[];
  rotation: string;
  icon: LucideIcon;
};

export const achievements = [
  {
    id: "build-for-bharat",
    title: "Meranivas — Build for Bharat Hackathon",
    event: "Meranivas — Build for Bharat Hackathon",
    image: "/hackathons/mera-nivas.png",
    result: "Runner-up",
    tier: "podium",
    badgeLabel: "Runner-up",
    category: "National Hackathon",
    description:
      "Secured the Runner-up position by delivering a high-impact solution for Indian public infrastructure.",
    highlights: ["Runner-up", "National Finalist"],
    rotation: "-2.2deg",
    icon: Trophy,
  },
  {
    id: "women-who-master",
    title: "Women Who Master Hackathon",
    event: "Women Who Master Hackathon",
    organizer: "Aspire For Her × Logitech",
    image: "/hackathons/logitech.png",
    result: "Semifinalist",
    tier: "semifinalist",
    badgeLabel: "Semifinalist",
    category: "Women-focused Hackathon",
    description:
      "Advanced as Semifinalist with an innovative accessibility software prototype in partnership with Logitech.",
    highlights: ["Semifinalist", "Accessibility"],
    rotation: "1.8deg",
    icon: Medal,
  },
  {
    id: "flipkart-grid-8",
    title: "Flipkart GRID 8.0",
    event: "Flipkart GRID 8.0",
    image: "/hackathons/grid8.0.png",
    result: "Semifinalist",
    tier: "semifinalist",
    badgeLabel: "Semifinalist",
    category: "Engineering Challenge",
    description:
      "Advanced to Semifinals solving algorithmic optimization and distributed system-design problems.",
    highlights: ["Semifinalist", "Algorithmic Challenge"],
    rotation: "-1.5deg",
    icon: Rocket,
  },
  {
    id: "nasa-space-apps-2025",
    title: "NASA Space Apps Challenge 2025",
    event: "NASA Space Apps Challenge 2025",
    image: "/hackathons/nasa-space.png",
    result: "Participant",
    tier: "participant",
    badgeLabel: "Participant",
    category: "Global Space Hackathon",
    description:
      "Built an interactive data-visualisation tool using official NASA open-source scientific datasets.",
    highlights: ["Participant", "Space Data"],
    rotation: "2.0deg",
    icon: ShieldCheck,
  },
] satisfies readonly Achievement[];


