import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const name = "AKARASHAK";
  const colors = ["#7c5cfc", "#ff3cac", "#c8ff00", "#00e5ff", "#ff6b00"];

  useEffect(() => {
    let val = 0;
    const t = setInterval(() => {
      val = Math.min(val + Math.random() * 4 + 1, 100);
      setPct(Math.floor(val));
      if (val >= 100) {
        clearInterval(t);
        setTimeout(onDone, 300);
      }
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.loader}>
      <div className={styles.name}>
        {[...name].map((ch, i) => (
          <span key={i} style={{ color: colors[i % colors.length], animationDelay: `${i * 0.07}s` }}>
            {ch}
          </span>
        ))}
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.pct}>{pct}%</div>
    </div>
  );
}
