import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../data/portfolio";
import styles from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = themes.find((t) => t.id === theme);

  return (
    <div className={styles.wrap}>
      <button className={styles.trigger} onClick={() => setOpen((o) => !o)} title="Change theme">
        <span>{current?.emoji}</span>
      </button>
      {open && (
        <div className={styles.panel}>
          {themes.map((t) => (
            <button
              key={t.id}
              className={`${styles.opt} ${theme === t.id ? styles.active : ""}`}
              onClick={() => { setTheme(t.id); setOpen(false); }}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
