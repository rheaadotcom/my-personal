export function WoodenClothespin() {
  return (
    <div className="wooden-clothespin-wrap" aria-hidden="true">
      <svg
        className="wooden-clothespin-svg"
        viewBox="0 0 24 58"
        width="24"
        height="58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wood gradient for left arm */}
          <linearGradient id="clothespin-wood-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ab7846" />
            <stop offset="35%" stopColor="#d9a873" />
            <stop offset="70%" stopColor="#c5925d" />
            <stop offset="100%" stopColor="#8f5d30" />
          </linearGradient>

          {/* Wood gradient for right arm */}
          <linearGradient id="clothespin-wood-right" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c5925d" />
            <stop offset="40%" stopColor="#e3b482" />
            <stop offset="75%" stopColor="#be8a54" />
            <stop offset="100%" stopColor="#7a4c24" />
          </linearGradient>

          {/* Metal spring coil gradient */}
          <linearGradient id="clothespin-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a1a1aa" />
            <stop offset="50%" stopColor="#52525b" />
            <stop offset="100%" stopColor="#27272a" />
          </linearGradient>

          {/* Drop shadow for spring ring */}
          <filter id="pin-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Pin cast shadow onto card */}
        <ellipse cx="12" cy="48" rx="8" ry="3" fill="rgba(0,0,0,0.22)" />

        {/* Left wooden arm */}
        <path
          d="M 8 2 
             C 8 1, 9 0, 10 0 
             L 11 0 
             L 11 54 
             C 10 56, 8 57, 7 57 
             L 6.5 56 
             L 7 28 
             C 6 26, 6 22, 7 20 
             Z"
          fill="url(#clothespin-wood-left)"
        />

        {/* Right wooden arm */}
        <path
          d="M 13 0 
             C 14 0, 15 1, 15 2 
             L 16 20 
             C 17 22, 17 26, 16 28 
             L 16.5 56 
             L 16 57 
             C 15 57, 13 56, 12 54 
             L 12 0 
             Z"
          fill="url(#clothespin-wood-right)"
        />

        {/* Center split line */}
        <line x1="11.5" y1="1" x2="11.5" y2="54" stroke="#5d3b1b" strokeWidth="0.75" opacity="0.6" />

        {/* Metal spring coil around the pin */}
        <g filter="url(#pin-shadow)">
          {/* Spring loop */}
          <rect
            x="7"
            y="21"
            width="9"
            height="8"
            rx="2.5"
            fill="none"
            stroke="url(#clothespin-metal)"
            strokeWidth="2.2"
          />
          {/* Spring wire arm */}
          <line
            x1="7.5"
            y1="25"
            x2="15.5"
            y2="25"
            stroke="#d4d4d8"
            strokeWidth="1.2"
          />
          {/* Lower spring prong */}
          <line
            x1="10"
            y1="29"
            x2="10"
            y2="34"
            stroke="#71717a"
            strokeWidth="1"
          />
        </g>

        {/* Clamp notch highlight */}
        <line x1="7.5" y1="38" x2="15.5" y2="38" stroke="#ffffff" strokeWidth="0.6" opacity="0.35" />
      </svg>
    </div>
  );
}
