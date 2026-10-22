export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  stream: string;
  period: string;
  result: string;
  resultLabel: string;
  type: "undergraduate" | "secondary";
};

/**
 * Verified education records.
 * Source: design.md and user-supplied information.
 */
export const educationItems: readonly EducationItem[] = [
  {
    id: "btech-mips",
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Maharana Institute of Professional Studies",
    location: "Kanpur",
    stream: "Computer Science and Engineering",
    period: "2023 \u2013 2027",
    result: "2027",
    resultLabel: "Expected graduation",
    type: "undergraduate",
  },
  {
    id: "class-xii-stx",
    degree: "Class XII \u2014 Intermediate, PCM",
    institution: "St. Xavier's Senior Secondary School",
    location: "Kannauj",
    stream: "Physics, Chemistry, Mathematics",
    period: "2021 \u2013 2022",
    result: "91.2%",
    resultLabel: "Percentage",
    type: "secondary",
  },
] as const;
