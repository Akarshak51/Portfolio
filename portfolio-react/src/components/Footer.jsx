import { personalInfo } from "../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.row} wrap`}>
        <div className={styles.brand}>
          <div className={styles.brandDot} />
          Akarashak<span style={{ color: "var(--g)" }}>.</span>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <a href={personalInfo.github}   target="_blank" rel="noreferrer">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            <a href={personalInfo.codechef} target="_blank" rel="noreferrer">CodeChef</a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
          <p className={styles.copy}>Designed &amp; built by Akarashak Mishra · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
