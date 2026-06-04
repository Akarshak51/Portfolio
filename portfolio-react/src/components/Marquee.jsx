import styles from "./Marquee.module.css";

const row1 = ["Python","FastAPI","React","Arduino","LangChain","Machine Learning","C++","IoT","EEG Signals","Full Stack","AI Agents","Embedded Systems"];
const row2 = ["Node.js","Scikit-learn","Vercel","REST APIs","NumPy","RAG Pipelines","Signal Processing","LLMs","JavaScript","Git","Linux","Serial Comm"];
const colors = ["var(--v)","var(--c)","var(--g)","var(--p)","var(--o)","var(--y,#eab308)"];

export default function Marquee() {
  const d1 = [...row1,...row1];
  const d2 = [...row2,...row2];
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {d1.map((item, i) => (
          <span key={i} className={i % 3 === 1 ? styles.dot : styles.item} style={i % 3 !== 1 ? { color: colors[Math.floor(i/3) % colors.length] } : {}}>
            {i % 3 === 1 ? "✦" : item}
          </span>
        ))}
      </div>
      <div className={`${styles.track} ${styles.reverse}`}>
        {d2.map((item, i) => (
          <span key={i} className={i % 3 === 2 ? styles.dot : styles.item} style={i % 3 !== 2 ? { color: colors[(Math.floor(i/3)+2) % colors.length] } : {}}>
            {i % 3 === 2 ? "◆" : item}
          </span>
        ))}
      </div>
    </div>
  );
}
