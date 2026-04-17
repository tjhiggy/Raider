export const RAIDER_INTERFACE_TOKENS = {
  color: {
    canvas: "#080b11",
    canvasRaised: "#101621",
    canvasSignal: "#121926",
    surfaceBase: "rgba(11, 16, 24, 0.92)",
    surfaceElevated: "rgba(16, 23, 35, 0.94)",
    surfaceInset: "rgba(8, 12, 18, 0.86)",
    surfaceGlass: "rgba(18, 27, 41, 0.78)",
    textPrimary: "#f4f7fb",
    textSecondary: "rgba(228, 236, 248, 0.76)",
    textMuted: "rgba(191, 203, 223, 0.56)",
    accentPrimary: "#c97a2b",
    accentSecondary: "#79c6ff",
    accentTertiary: "#80d4c9",
    borderSubtle: "rgba(140, 170, 214, 0.14)",
    borderStrong: "rgba(133, 192, 255, 0.3)",
    shadow: "rgba(0, 0, 0, 0.34)"
  },
  semantic: {
    intel: {
      fill: "rgba(121, 198, 255, 0.12)",
      line: "rgba(121, 198, 255, 0.44)",
      text: "#bde5ff"
    },
    caution: {
      fill: "rgba(224, 165, 74, 0.14)",
      line: "rgba(224, 165, 74, 0.42)",
      text: "#ffd18d"
    },
    danger: {
      fill: "rgba(224, 92, 92, 0.14)",
      line: "rgba(224, 92, 92, 0.42)",
      text: "#ffb0b0"
    },
    ready: {
      fill: "rgba(91, 194, 137, 0.16)",
      line: "rgba(91, 194, 137, 0.46)",
      text: "#b8f0ca"
    },
    inactive: {
      fill: "rgba(118, 132, 155, 0.14)",
      line: "rgba(118, 132, 155, 0.28)",
      text: "#b7c2d5"
    }
  },
  typography: {
    display: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    heading: "'Segoe UI Semibold', 'Segoe UI', sans-serif",
    body: "'Segoe UI', 'Trebuchet MS', sans-serif",
    mono: "'Consolas', 'SFMono-Regular', monospace",
    scale: {
      display: "clamp(2.4rem, 6vw, 5.8rem)",
      h1: "clamp(1.55rem, 3vw, 2.5rem)",
      h2: "clamp(1.2rem, 2vw, 1.6rem)",
      h3: "1rem",
      bodyLg: "1rem",
      body: "0.94rem",
      caption: "0.76rem"
    }
  },
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  radius: {
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
    pill: 999
  },
  shadow: {
    panel: "0 28px 70px rgba(0, 0, 0, 0.34)",
    rail: "inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 16px 30px rgba(0, 0, 0, 0.22)",
    focus: "0 0 0 3px rgba(121, 198, 255, 0.26)"
  },
  border: {
    hairline: "1px solid rgba(140, 170, 214, 0.14)",
    emphasis: "1px solid rgba(133, 192, 255, 0.3)"
  },
  motion: {
    fast: "160ms cubic-bezier(.2,.8,.2,1)",
    base: "220ms cubic-bezier(.2,.8,.2,1)",
    slow: "340ms cubic-bezier(.2,.8,.2,1)"
  },
  interaction: {
    hoverLift: -2,
    pressedLift: 1,
    focusRing: "0 0 0 3px rgba(121, 198, 255, 0.26)"
  },
  environment: {
    gridOpacity: 0.08,
    signalOpacity: 0.12,
    textureOpacity: 0.2
  }
};

export const RAIDER_INTERFACE_VISUAL_PRINCIPLES = [
  "Mission-first hierarchy over decorative balance",
  "Dense information with disciplined contrast",
  "Layered surfaces instead of repetitive cards",
  "Asymmetry that guides action instead of creating chaos",
  "Reactive states that feel tactical, not theatrical"
];
