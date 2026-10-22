import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

// Contribution levels map to design.md color tokens
const LEVEL_COLORS: readonly string[] = [
  "#dde9e0", // 0: no contributions
  "#a8e6c1", // 1: low
  "#5acb91", // 2: medium
  "#19a76b", // 3: high
  "#087a49", // 4: max
];

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionData = {
  total: { lastYear: number };
  contributions: Contribution[];
};

async function fetchContributions(): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/rheaadotcom?y=last",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json() as Promise<ContributionData>;
  } catch {
    return null;
  }
}

/** Pads the start of the contribution list so the first entry falls on Sunday. */
function buildWeeks(contributions: Contribution[]): (Contribution | null)[][] {
  const firstDow = new Date(contributions[0].date + "T12:00:00Z").getUTCDay();
  const padded: (Contribution | null)[] = [
    ...Array<null>(firstDow).fill(null),
    ...contributions,
  ];
  const weeks: (Contribution | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7);
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function getMonthLabels(
  weeks: (Contribution | null)[][]
): { label: string; col: number }[] {
  const labels: { label: string; col: number }[] = [];
  let prev = -1;
  weeks.forEach((week, col) => {
    const first = week.find((d) => d !== null);
    if (!first) return;
    const m = new Date(first.date + "T12:00:00Z").getUTCMonth();
    if (m !== prev) {
      labels.push({ label: MONTH_NAMES[m], col });
      prev = m;
    }
  });
  return labels;
}

export async function GitHubSection() {
  const data = await fetchContributions();

  // ── Fallback if the API is unavailable ──────────────────────────────────
  if (!data) {
    return (
      <section
        className="github-section"
        id="github"
        aria-labelledby="github-section-title"
      >
        <div className="github-container">
          <div className="github-card">
            <div className="github-tape github-tape-l" aria-hidden="true" />
            <div className="github-tape github-tape-r" aria-hidden="true" />
            <p className="github-eyebrow">
              <span className="eyebrow-dot" />
              OPEN SOURCE · GITHUB
            </p>
            <h2 id="github-section-title" className="github-card-title">
              Contribution <span>activity.</span>
            </h2>
            <p className="github-fallback-text">
              Live contribution data is temporarily unavailable. Visit my
              GitHub profile to see my full activity.
            </p>
            <a
              href={portfolio.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="github-profile-link"
              aria-label="Visit Riya Bhardwaj's GitHub profile"
            >
              github.com/rheaadotcom
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ── Build grid ───────────────────────────────────────────────────────────
  const weeks = buildWeeks(data.contributions);
  const monthLabels = getMonthLabels(weeks);
  const totalCols = weeks.length;
  const CELL = 12;
  const GAP = 3;
  const COL_W = CELL + GAP; // 15 px per column

  return (
    <section
      className="github-section"
      id="github"
      aria-labelledby="github-section-title"
    >
      <div className="github-container">
        <div className="github-card">
          <div className="github-tape github-tape-l" aria-hidden="true" />
          <div className="github-tape github-tape-r" aria-hidden="true" />

          {/* Header */}
          <div className="github-card-header">
            <div>
              <p className="github-eyebrow">
                <span className="eyebrow-dot" />
                OPEN SOURCE · GITHUB
              </p>
              <h2 id="github-section-title" className="github-card-title">
                Contribution <span>activity.</span>
              </h2>
            </div>
            <div className="github-header-meta">
              <span className="github-total">
                <strong>{data.total.lastYear}</strong> contributions in the last year
              </span>
              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
                aria-label="Visit Riya Bhardwaj's GitHub profile"
              >
                github.com/rheaadotcom
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Scrollable graph */}
          <div className="github-graph-scroll">
            <div
              className="github-graph-inner"
              role="img"
              aria-label={`GitHub contribution calendar showing ${data.total.lastYear} contributions in the last year`}
            >
              {/* Month labels */}
              <div className="github-month-row">
                <span
                  className="github-day-spacer"
                  aria-hidden="true"
                />
                <div
                  className="github-month-grid"
                  style={{ width: totalCols * COL_W - GAP }}
                >
                  {monthLabels.map(({ label, col }) => (
                    <span
                      key={`${label}-${col}`}
                      className="github-month-label"
                      style={{ left: col * COL_W }}
                      aria-hidden="true"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Day labels + cells */}
              <div className="github-grid-row">
                <div className="github-day-labels" aria-hidden="true">
                  {(["", "Mon", "", "Wed", "", "Fri", ""] as const).map(
                    (d, i) => (
                      <span
                        key={i}
                        className="github-day-label"
                        style={{ height: CELL, lineHeight: `${CELL}px`, marginBottom: GAP }}
                      >
                        {d}
                      </span>
                    )
                  )}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${totalCols}, ${CELL}px)`,
                    gridTemplateRows: `repeat(7, ${CELL}px)`,
                    gap: GAP,
                  }}
                >
                  {weeks.flatMap((week, wi) =>
                    week.map((day, di) => (
                      <div
                        key={`${wi}-${di}`}
                        className="github-cell"
                        style={{
                          gridRow: di + 1,
                          gridColumn: wi + 1,
                          background:
                            day !== null
                              ? LEVEL_COLORS[day.level]
                              : "transparent",
                        }}
                        title={
                          day !== null
                            ? `${day.date}: ${day.count} contribution${
                                day.count !== 1 ? "s" : ""
                              }`
                            : undefined
                        }
                      />
                    ))
                  )}
                </div>
              </div>

              {/* Legend */}
              <div className="github-legend" aria-hidden="true">
                <span className="github-legend-label">Less</span>
                {LEVEL_COLORS.map((color, i) => (
                  <span
                    key={i}
                    className="github-legend-cell"
                    style={{ background: color }}
                  />
                ))}
                <span className="github-legend-label">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
