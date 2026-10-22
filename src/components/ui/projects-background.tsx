export function ProjectsBackground() {
  return (
    <div className="projects-bg-decorations" aria-hidden="true">
      {/* Blueprint SVG with engineering grid, dashed circles, and technical markings */}
      <svg
        className="projects-blueprint-svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern
            id="proj-grid-fine"
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
            id="proj-grid-major"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <rect width="160" height="160" fill="url(#proj-grid-fine)" />
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="rgb(255 255 255 / 3.2%)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Technical Grid background fill */}
        <rect width="100%" height="100%" fill="url(#proj-grid-major)" />

        {/* Large Dashed Construction Circle (Top-Right) */}
        <g className="proj-svg-circle-tr">
          <circle
            cx="84%"
            cy="160"
            r="320"
            stroke="rgb(255 255 255 / 5%)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="84%"
            cy="160"
            r="230"
            stroke="rgb(255 255 255 / 3.8%)"
            strokeWidth="0.75"
            strokeDasharray="3 6"
          />
          <circle
            cx="84%"
            cy="160"
            r="140"
            stroke="rgb(255 255 255 / 2.8%)"
            strokeWidth="0.75"
            strokeDasharray="2 4"
          />
          {/* Compass center mark */}
          <line
            x1="84%"
            y1="145"
            x2="84%"
            y2="175"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
          <circle cx="84%" cy="160" r="2.5" fill="var(--accent)" fillOpacity="0.6" />
          <text
            x="84%"
            y="135"
            dx="14"
            fill="var(--muted)"
            fontSize="8.5"
            letterSpacing="0.1em"
            fontFamily="var(--font-geist-mono), monospace"
            opacity="0.55"
          >
            R = 320.00mm [CAD.ARC_01]
          </text>
        </g>

        {/* Construction Circle (Bottom-Left) */}
        <g className="proj-svg-circle-bl">
          <circle
            cx="14%"
            cy="760"
            r="280"
            stroke="rgb(255 255 255 / 4.5%)"
            strokeWidth="0.8"
            strokeDasharray="5 7"
          />
          <circle
            cx="14%"
            cy="760"
            r="190"
            stroke="rgb(255 255 255 / 3.2%)"
            strokeWidth="0.75"
            strokeDasharray="2 5"
          />
          <line
            x1="14%"
            y1="748"
            x2="14%"
            y2="772"
            stroke="rgb(255 255 255 / 12%)"
            strokeWidth="1"
          />
          <text
            x="14%"
            y="780"
            dx="12"
            fill="var(--muted)"
            fontSize="8"
            letterSpacing="0.08em"
            fontFamily="var(--font-geist-mono), monospace"
            opacity="0.5"
          >
            SEC.02 // R:280mm
          </text>
        </g>

        {/* Technical Ticks and Crosshairs */}
        {/* Top-Left crosshair */}
        <g className="proj-svg-crosshair" transform="translate(48, 64)">
          <path
            d="M -7 0 L 7 0 M 0 -7 L 0 7"
            stroke="rgb(255 255 255 / 18%)"
            strokeWidth="1"
          />
          <text
            x="11"
            y="3.5"
            fill="var(--muted)"
            fontSize="8"
            letterSpacing="0.1em"
            fontFamily="var(--font-geist-mono), monospace"
            opacity="0.55"
          >
            LOC: 01.A
          </text>
        </g>

        {/* Bottom-Center crosshair with accent highlight */}
        <g className="proj-svg-crosshair" transform="translate(680, 520)">
          <path
            d="M -8 0 L 8 0 M 0 -8 L 0 8"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <circle cx="0" cy="0" r="1.5" fill="var(--accent)" fillOpacity="0.7" />
        </g>

        {/* Technical edge annotations */}
        <text
          x="48"
          y="28"
          fill="var(--muted)"
          fontSize="8.5"
          letterSpacing="0.12em"
          fontFamily="var(--font-geist-mono), monospace"
          opacity="0.45"
        >
          {"// ENG.NOTEBOOK: GRID 32mm SQ // SCALE 1:1 // PROJECTS_ARCHIVE"}
        </text>

        <text
          x="96%"
          y="28"
          textAnchor="end"
          fill="var(--muted)"
          fontSize="8.5"
          letterSpacing="0.12em"
          fontFamily="var(--font-geist-mono), monospace"
          opacity="0.45"
        >
          DRAWING REF: SEC_02 // REV.4
        </text>
      </svg>

      {/* Technical measurement ruler along the bottom edge */}
      <div className="projects-ruler" aria-hidden="true">
        <div className="projects-ruler-line" />
        <div className="projects-ruler-ticks">
          <span className="ruler-tick ruler-tick-major"><span className="ruler-val">000</span></span>
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-mid" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-major"><span className="ruler-val">250</span></span>
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-mid" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-major"><span className="ruler-val">500</span></span>
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-mid" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-major"><span className="ruler-val">750</span></span>
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-mid" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick ruler-tick-major"><span className="ruler-val">1000mm</span></span>
        </div>
      </div>
    </div>
  );
}
