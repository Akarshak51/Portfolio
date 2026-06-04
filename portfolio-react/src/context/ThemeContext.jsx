import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themeVars = {
  dark: {
    "--bg":"#0f172a","--paper":"#f1f5ff","--muted":"#94a3b8",
    "--v":"#818cf8","--c":"#22d3ee","--g":"#a3e635","--p":"#f472b6","--o":"#fb923c","--y":"#fbbf24",
    "--glass":"rgba(15,23,42,.75)","--glass-br":"rgba(255,255,255,.10)",
    "--hero-bg1":"#1e1b4b","--hero-bg2":"#312e81",
    "--about-bg1":"#0f2744","--about-bg2":"#1e3a5f",
    "--skills-bg1":"#2d1b4e","--skills-bg2":"#3b2068",
    "--proj-bg1":"#431407","--proj-bg2":"#5c1d0a",
    "--exp-bg1":"#3b0764","--exp-bg2":"#4c0a82",
    "--cert-bg1":"#064e3b","--cert-bg2":"#065f46",
    "--contact-bg1":"#1e1244","--contact-bg2":"#2d1867",
  },
  neon: {
    "--bg":"#020c18","--paper":"#e0fffe","--muted":"#5eead4",
    "--v":"#00ffff","--c":"#00ff88","--g":"#ffff00","--p":"#ff00ff","--o":"#ff8800","--y":"#ffe000",
    "--glass":"rgba(2,12,24,.82)","--glass-br":"rgba(0,255,255,.08)",
    "--hero-bg1":"#003344","--hero-bg2":"#004455",
    "--about-bg1":"#002233","--about-bg2":"#003344",
    "--skills-bg1":"#1a0044","--skills-bg2":"#220055",
    "--proj-bg1":"#331a00","--proj-bg2":"#4d2800",
    "--exp-bg1":"#002233","--exp-bg2":"#003344",
    "--cert-bg1":"#003322","--cert-bg2":"#004433",
    "--contact-bg1":"#220044","--contact-bg2":"#330066",
  },
  aurora: {
    "--bg":"#0d0f2b","--paper":"#f0f4ff","--muted":"#a5b4fc",
    "--v":"#c084fc","--c":"#67e8f9","--g":"#86efac","--p":"#f9a8d4","--o":"#fdba74","--y":"#fde68a",
    "--glass":"rgba(13,15,43,.78)","--glass-br":"rgba(196,132,252,.1)",
    "--hero-bg1":"#1e1654","--hero-bg2":"#2d1f78",
    "--about-bg1":"#0e2654","--about-bg2":"#163470",
    "--skills-bg1":"#2a1050","--skills-bg2":"#38166c",
    "--proj-bg1":"#3d1408","--proj-bg2":"#54200e",
    "--exp-bg1":"#1a0e4a","--exp-bg2":"#261462",
    "--cert-bg1":"#0a3d2a","--cert-bg2":"#0f5238",
    "--contact-bg1":"#1c1050","--contact-bg2":"#28166e",
  },
  fire: {
    "--bg":"#1c0a00","--paper":"#fff7ed","--muted":"#d97706",
    "--v":"#ef4444","--c":"#fbbf24","--g":"#f97316","--p":"#ec4899","--o":"#f59e0b","--y":"#fde047",
    "--glass":"rgba(28,10,0,.78)","--glass-br":"rgba(239,68,68,.1)",
    "--hero-bg1":"#3b1000","--hero-bg2":"#4d1600",
    "--about-bg1":"#2d1800","--about-bg2":"#3d2200",
    "--skills-bg1":"#3d0a12","--skills-bg2":"#521018",
    "--proj-bg1":"#4a1000","--proj-bg2":"#631600",
    "--exp-bg1":"#2d0a3a","--exp-bg2":"#3d104e",
    "--cert-bg1":"#1a2e00","--cert-bg2":"#243d00",
    "--contact-bg1":"#2a0844","--contact-bg2":"#38105c",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    const vars = themeVars[theme];
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
