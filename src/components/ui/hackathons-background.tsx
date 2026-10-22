export function HackathonsBackground() {
  return (
    <div className="hackathons-bg-decorations" aria-hidden="true">
      {/* Black engineering drafting grid background */}
      <svg
        className="hackathons-blueprint-svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern
            id="hack-grid-fine"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgb(255 255 255 / 1.6%)"
              strokeWidth="0.75"
            />
          </pattern>
          <pattern
            id="hack-grid-major"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <rect width="160" height="160" fill="url(#hack-grid-fine)" />
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="rgb(255 255 255 / 3.2%)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Technical Grid background fill */}
        <rect width="100%" height="100%" fill="url(#hack-grid-major)" />

        {/* Top-Right Technical Construction Circle Arc */}
        <g className="hack-svg-circle-tr">
          <circle
            cx="86%"
            cy="110"
            r="260"
            stroke="rgb(255 255 255 / 4.5%)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="86%"
            cy="110"
            r="180"
            stroke="rgb(255 255 255 / 3.2%)"
            strokeWidth="0.75"
            strokeDasharray="3 6"
          />
          <circle
            cx="86%"
            cy="110"
            r="100"
            stroke="rgb(255 255 255 / 2.2%)"
            strokeWidth="0.75"
            strokeDasharray="2 4"
          />
          {/* Compass center mark */}
          <line
            x1="86%"
            y1="98"
            x2="86%"
            y2="122"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <circle cx="86%" cy="110" r="2.5" fill="var(--accent)" fillOpacity="0.55" />
          <text
            x="86%"
            y="92"
            dx="12"
            fill="var(--muted)"
            fontSize="8.5"
            letterSpacing="0.1em"
            fontFamily="var(--font-geist-mono), monospace"
            opacity="0.5"
          >
            R = 260.00mm [CAD.HACK_ARC]
          </text>
        </g>

        {/* Bottom-Left Curved Construction Arc */}
        <g className="hack-svg-circle-bl">
          <circle
            cx="10%"
            cy="460"
            r="220"
            stroke="rgb(255 255 255 / 4%)"
            strokeWidth="1"
            strokeDasharray="5 7"
          />
          <circle
            cx="10%"
            cy="460"
            r="140"
            stroke="rgb(255 255 255 / 2.8%)"
            strokeWidth="0.75"
            strokeDasharray="3 5"
          />
          <text
            x="10%"
            y="445"
            dx="14"
            fill="var(--muted)"
            fontSize="8.5"
            letterSpacing="0.1em"
            fontFamily="var(--font-geist-mono), monospace"
            opacity="0.45"
          >
            CAD.REF // 03.B [VERIFIED]
          </text>
        </g>

        {/* Top coordinate indicator banner */}
        <text
          x="32"
          y="28"
          fill="var(--muted)"
          fontSize="9"
          letterSpacing="0.15em"
          fontFamily="var(--font-geist-mono), monospace"
          opacity="0.4"
        >
          SEC // 03.B [HACKATHONS.SCRAPBOOK_GALLERY] — COORD: 28°36&apos;N / 77°12&apos;E
        </text>

        {/* Right vertical measurement indicator */}
        <line
          x1="calc(100% - 24px)"
          y1="80"
          x2="calc(100% - 24px)"
          y2="380"
          stroke="rgb(255 255 255 / 3%)"
          strokeWidth="1"
        />
        <text
          x="calc(100% - 20px)"
          y="230"
          fill="var(--muted)"
          fontSize="8"
          letterSpacing="0.12em"
          fontFamily="var(--font-geist-mono), monospace"
          opacity="0.35"
          transform="rotate(90, calc(100% - 20), 230)"
        >
          DIM: 300.00mm [POLAROID_AXIS]
        </text>
      </svg>
    </div>
  );
}
