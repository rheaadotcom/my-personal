# Riya Bhardwaj --- Portfolio Design Specification

## 1. Product vision

Build a polished personal portfolio for Riya Bhardwaj, a Computer
Science and Engineering student graduating in 2027. The site should feel
like a creative engineering notebook: dark, technical, personal, and
highly readable.

Design direction: reference-inspired, but more premium. Take
inspiration from the composition of [https://mittalparth.dev/](https://mittalparth.dev/)
without copying its source code, proprietary assets, exact page layout, or
personal content.

The portfolio should communicate:

- Full-stack engineering ability
- AI-powered application development
- Data engineering experience and learning
- Hackathon and problem-solving achievements
- Practical projects with working demos and repositories

## 2. Core visual concept

A deep-black canvas with a subtle engineering grid, warm-white
typography, coral-orange handwritten accents, a Polaroid-style portrait,
warm paper-like biography card, and a cream GitHub activity panel.

Keep the distinctive playful paper elements, but refine the spacing,
alignment, typography, responsiveness, and project presentation so the
result feels professional rather than cluttered.

## 3. Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion for restrained motion
- Lucide React for icons
- Geist Sans for UI typography
- Caveat or a similar handwritten font for accent text
- Vercel deployment

Use existing compatible package versions if starting from an existing
repository. Do not upgrade major dependencies or add libraries without a
clear reason. The portfolio does not need a database or backend unless a
real feature requires one.

## 4. Color tokens

- Main background: `#080808`
- Elevated dark surface: `#111111`
- Primary text: `#F5F3E9`
- Secondary text: `#B8B8B8`
- Muted text: `#858585`
- Grid lines: `#252525`
- Borders on dark surfaces: `#333333`
- Coral-orange accent: `#FF7058`
- Warm-yellow paper: `#FFF0B5`
- Paper text: `#58675E`
- Cream card: `#F7F5EC`
- Contribution levels: `#DDE9E0`, `#A8E6C1`, `#5ACB91`, `#19A76B`,
  `#087A49`

Use orange sparingly for emphasis, links, markers, and hand-drawn
highlights. Keep green primarily for contribution activity and small
contextual details.

## 5. Background

Create a full-page `#080808` background with a low-contrast engineering
grid using CSS gradients or a lightweight SVG overlay. Add subtle
measurement marks or faint arcs only if they do not distract from the
content.

Requirements:

- Grid should be visible enough to give texture, but never compete with
  text.
- No bright green grid.
- No giant gradients, glow effects, or heavy background images.
- Ensure text and cards remain legible.
- Consider a reduced-detail version on mobile for performance and
  clarity.

## 6. Navigation

Create a centered pill-shaped navigation near the top:

- Dark translucent background
- Thin charcoal border
- Fully rounded corners
- Warm-white labels
- Coral-orange filled "Connect" button
- Subtle backdrop blur and hover/focus transitions

Navigation items:

- About
- Hackathons
- Experience
- Projects
- Connect

Use accessible anchor links and smooth scrolling. Make the navigation
sticky or fixed only if it does not obscure section headings. On mobile,
provide a compact, accessible layout with no overflow.

## 7. Hero composition

On desktop, use a carefully balanced composition:

- Left: tilted Polaroid-style profile photo
- Center/right: name, handwritten tagline, and brief identity
- Upper right: circular social buttons
- Below: wide warm-yellow biography paper card
- Below the paper: cream GitHub contribution panel

Do not force this composition on narrow screens. Stack elements
naturally on mobile.

### Portrait

Use a real portrait supplied by the user. Frame it in an off-white
Polaroid with a slight rotation, subtle shadow, and small orange pin
detail. Do not invent a portrait or use an unrelated person's photo. If
no portrait is available, use a tasteful neutral placeholder frame that
can be replaced later.

### Identity

Name: Riya Bhardwaj

Suggested tagline: Full-Stack Developer · AI Builder · Problem
Solver

Use warm-white bold typography for the name and orange handwritten
typography for the tagline. The tagline may wrap on smaller screens.

### Social buttons

Include GitHub, LinkedIn, email, and resume only when valid destinations
or files exist. Use circular cream buttons with coral-orange icons,
accessible labels, keyboard focus states, and restrained hover effects.

Known GitHub profile: [https://github.com/rheaadotcom](https://github.com/rheaadotcom)

Confirm LinkedIn and email destinations before publishing; do not assume
they are correct merely because they appear in an earlier draft.

## 8. Biography paper card

Create a warm-yellow paper card with:

- Background `#FFF0B5`
- Dark muted body text
- Small orange bullet points
- Selected handwritten orange phrases
- Slight rotation on desktop, near-straight on mobile
- Subtle shadow, no heavy border

Suggested copy:

- "I'm a Computer Science and Engineering student graduating in 2027."
- "I build full-stack applications and AI-powered tools."
- "I enjoy hackathons, competitive programming, and practical
  engineering challenges."
- "My projects span web development, AI integrations, and data
  engineering."

Keep it concise and genuine. Do not claim professional expertise,
awards, or employment not supported by verified information.

## 9. GitHub activity panel

Create a cream rounded panel with:

- Contribution heatmap
- Month labels
- Contribution intensity legend
- Link to the GitHub profile
- Small decorative tape details, used sparingly

Use genuine contribution data from a reliable source if available. Never
fabricate contribution totals or randomly generated squares presented as
real activity. If live data cannot be obtained reliably, use an honest
fallback: a link to the GitHub profile and a clearly labelled static
visualization only if it uses real data.

On mobile, allow the heatmap to scroll horizontally inside its panel
without causing page-wide overflow.

## 10. Achievements and hackathons

Create a distinct section that uses compact notebook-style entries or a
clean timeline. Maintain the black background, cream text, orange
markers, and restrained paper accents.

Potential entries to verify before publishing:

-semifinalist at women who master hackathon-logitech hackathon 2026
- Flipkart Grid 8.0 --- Semifinalist, 2026
- Build for Bharat Hackathon --- Runner-up
- BuildWithIndia --- Top 5,000 among 25,000+ teams
- NASA Space Apps Challenge --- Participation in the Lucknow event,
  2025
- Social Summer of Code --- Contributor, 2025
- KodeKalesh Hackathon participated 

Show the exact verified result and year for each entry. Distinguish
winners, runner-ups, semifinalists, round advancement, and
participation. Do not invent event links, team details, prizes, or
project outcomes.

## 11. Education

Use a compact vertical timeline or editorial list.

Education:

- B.Tech, Computer Science and Engineering
- Maharana Institute of Professional Studies, Kanpur
- Expected graduation: 2027

Use the latest verified CGPA only if the candidate wants it shown.

Potential experience entries must be confirmed:
- Open-source contributions

For each role, show organization, role, dates, short evidence-based
description, and technologies. Clearly distinguish employment,
internships, open-source work, and personal projects.

## 12. Projects

Make projects the strongest evidence of engineering ability. Use
authentic screenshots and concise, specific descriptions. Avoid fake
metrics, ratings, stars, or unsupported feature claims.

Featured project candidates:

1. AI Vakil --- Next.js 15, TypeScript, Tailwind CSS, Framer Motion. A
   legal-document workspace UI with landing page, authentication UI,
   and dashboard. Describe AI document analysis only if implemented and
   verified.
2. People Priorities --- Next.js, React, FastAPI, MongoDB, and the
   actual AI provider used. Verify specific functionality from the
   repository.
3. IdeaValidator AI --- Next.js, React, MongoDB, and the actual AI
   provider. Describe only implemented capabilities.
4. Graph-One --- Next.js, TypeScript, Tailwind CSS. GitHub:
   [https://github.com/rheaadotcom/Graph-One](https://github.com/rheaadotcom/Graph-One).
   Live demo:
   [https://graph-one-nu.vercel.app](https://graph-one-nu.vercel.app).
5. NextHire --- MERN remote interview platform; verify current
   repository and capabilities.
6. ShopPulse / Campus Analytics --- Python, PySpark, Spark SQL, if the
   pipeline is ready to demonstrate.
7. Additional projects: CognitoLab, SkySync, Zyra-Store, if links and
   details are verified.

Show four featured projects first, with a clear "More projects" area for
the rest. Each project entry supports:

- Name
- One-line summary
- Detailed description
- Actual technologies
- Category
- Screenshot
- GitHub URL
- Live demo URL
- Featured flag

Use cream or warm-gray project cards on the black background, with
orange links and subtle hover movement. Do not use fake screenshots. If
a screenshot is unavailable, use a restrained typographic placeholder
that is clearly not a screenshot.

## 13. Skills

Group skills in compact lists or paper-like tags:

- Programming: C, C++, Python, JavaScript, SQL
- Frontend: HTML, CSS, React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, FastAPI, REST APIs
- Databases: MongoDB, MySQL
- AI and data: OpenAI API, Google Gemini, Groq, PySpark, Spark SQL
- Tools: Git, GitHub, VS Code, Vercel

Only include skills that reflect actual use. Avoid arbitrary skill
percentages or progress bars.

## 14. DSA and certifications

Show problem-solving information compactly and link to the relevant
profiles. Candidate values to verify:

- 500+ DSA problems solved
- Maximum LeetCode contest rating: 1545
- HackerRank C++ five-star rating, if current and verified

Potential certifications:

- NPTEL Java Programming --- Silver Elite
- Oracle Cloud Infrastructure 2025 --- AI Foundations Associate
- Cisco Networking Academy --- Networking Basics
- GUVI HCL --- DevOps and Git

Use actual certificate links when available. Never invent credential
IDs.

## 15. Contact

Include email, GitHub, LinkedIn, and resume when verified. A contact
form is optional and should only be added if it has a functioning
submission service. Do not create a form that silently discards
messages.

## 16. Motion and interactions

Use Framer Motion sparingly:

- Short hero entrance
- Subtle paper-card reveal
- Slight Polaroid movement on hover
- Small navigation and project hover transitions
- Scroll-triggered section reveal

Respect `prefers-reduced-motion`. Avoid heavy parallax, 3D scenes,
custom cursors, or animations that delay access to content.

## 17. Responsive design

Test at 375px, 768px, 1024px, and 1440px.

Desktop:

- Two-column hero composition
- Polaroid on the left
- Biography and contribution panels aligned to the content column
- Projects in a restrained grid or editorial list

Tablet:

- Reduced spacing and portrait size
- Cards adapt to available width

Mobile:

- Stack hero content vertically
- Center portrait and name where appropriate
- Keep paper rotation minimal
- Compact navigation
- Horizontally scrollable contribution graph inside its panel
- Single-column project cards
- No page-wide horizontal overflow

## 18. Accessibility and quality

- Semantic HTML and headings
- Keyboard-accessible navigation
- Visible focus indicators
- Sufficient contrast
- Alt text for real images
- Accessible icon buttons
- Reduced-motion support
- Descriptive link labels
- No critical information conveyed by color alone

Before delivery:

- Run lint, TypeScript checks, and production build
- Verify every internal and external link
- Test all breakpoints
- Check browser console errors
- Check image loading and alt text
- Verify resume download
- Remove placeholders and debug output
- Verify every public claim and achievement
- Ensure no horizontal overflow

## 19. Final design goal

The portfolio should feel like a premium, personal engineering notebook:
deep black, fine technical grid, warm-white typography, orange
handwritten details, and tactile cream paper elements. It should be
distinctive without being cluttered and professional without looking
like a generic template.
