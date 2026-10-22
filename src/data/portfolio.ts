const biography: { text: string; highlight?: string }[] = [
  {
    text: "I'm a Computer Science and Engineering student graduating in 2027.",
  },
  {
    text: "I build full-stack applications and AI-powered tools.",
    highlight: "full-stack applications",
  },
  {
    text: "I enjoy hackathons, competitive programming, and practical engineering challenges.",
  },
  {
    text: "My projects span web development, AI integrations, and data engineering.",
    highlight: "data engineering",
  },
];

export const portfolio = {
  name: "Riya Bhardwaj",
  tagline: "Full-Stack Developer · AI Builder · Problem Solver",
  githubUrl: "https://github.com/rheaadotcom",
  email: "iriyabhardwaj@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/riya-bhardwaj2006/",
  leetcodeUrl: "https://leetcode.com/u/riya_bhardwaj/",
  biography,
} as const;
