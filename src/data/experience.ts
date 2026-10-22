export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: "Internship" | "Full-time" | "Open Source" | "Fellowship";
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
  verified: boolean;
};

/**
 * Data-driven professional experience records.
 * Per portfolio integrity guidelines, corporate/internship entries are added
 * only when verified from employment documentation. Open-source work is detailed
 * in the Achievements & Hackathons section.
 */
export const experiences: readonly ExperienceItem[] = [];
