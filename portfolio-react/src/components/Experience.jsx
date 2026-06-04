import { useRef, useEffect } from "react";
import { experience, personalInfo } from "../data/portfolio";
import styles from "./Experience.module.css";

const DlIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const badgeColors = {
  "Full Stack": { bg: "rgba(6,182,212,.2)",   color: "#67e8f9", border: "rgba(6,182,212,.4)" },
  Leadership:   { bg: "rgba(251,191,36,.2)",  color: "#fde68a", border: "rgba(251,191,36,.4)" },
  Internship:   { bg: "rgba(167,139,250,.2)", color: "#ddd6fe", border: "rgba(167,139,250,.4)" },
};

const dotColors = {
  "Full Stack": "#67e8f9",
  Leadership:   "#fde68a",
  Internship:   "#c4b5fd",
};

export default function Experience() {
  const headRef    = useRef(null);
  const tlRef      = useRef(null);
  const sideRef    = useRef(null);

  useEffect(() => {
    const revealEl = (el, delay = 0) => {
      if (!el) return;
      const show = () => setTimeout(() => { el.style.opacity = "1"; el.style.transform = "none"; }, delay);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) { show(); return; }
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { show(); obs.disconnect(); } }, { threshold: 0.05 });
      obs.observe(el);
    };
    revealEl(headRef.current, 0);
    revealEl(tlRef.current, 100);
    revealEl(sideRef.current, 200);
  }, []);

  return (
    <section id="experience" className={styles.section}>
      <div className="wrap">
        <div ref={headRef} style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity .6s ease, transform .6s ease" }}>
          <div className={styles.label}>Experience</div>
          <h2 className={styles.h2}>Where I've <span style={{ color: "var(--p)" }}>contributed.</span></h2>
        </div>

        <div className={styles.layout}>
          {/* Timeline */}
          <div
            ref={tlRef}
            className={styles.timeline}
            style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity .7s ease .1s, transform .7s ease .1s" }}
          >
            {experience.map((e, i) => {
              const bc = badgeColors[e.badge] || badgeColors.Internship;
              const dc = dotColors[e.badge] || "#c4b5fd";
              return (
                <article key={e.role} className={styles.item} style={{ "--dot-color": dc }}>
                  <div className={styles.itemHead}>
                    <h3>{e.role}</h3>
                    {e.badge && (
                      <span className={styles.badge} style={{ background: bc.bg, color: bc.color, border: `1px solid ${bc.border}` }}>
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <div className={styles.meta}>{e.period}</div>
                  <ul className={styles.pts}>
                    {e.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* Sidebar */}
          <div
            ref={sideRef}
            className={styles.sidebar}
            style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity .7s ease .2s, transform .7s ease .2s" }}
          >
            <div className={styles.card}>
              <div className={styles.cardLabel}>🎓 Education</div>
              <div className={styles.cardTitle}>B.Tech Electronics Engineering</div>
              <p>IERT — Institute of Engineering &amp; Rural Technology</p>
              <p>Prayagraj, Uttar Pradesh</p>
              <span>2023 – 2027 · 4th Year (Current)</span>
            </div>

            <div className={styles.card}>
              <div className={styles.cardLabel}>📄 Resume</div>
              <div className={styles.cardTitle}>Download Full CV</div>
              <p>All projects, skills &amp; experience in one PDF.</p>
              <a className="btn btn-v" href={personalInfo.resume} download="Akarashak_resume S.docx" style={{ marginTop: "1rem", fontSize: ".82rem", padding: ".6rem 1.2rem" }}>
                <DlIcon /> Download Resume
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.cardLabel}>💻 Coding Profiles</div>
              <div className={styles.cardTitle}>Find me online</div>
              <div className={styles.platformGrid}>
                <a href={personalInfo.github}   target="_blank" rel="noreferrer" className={styles.platItem}><span>🐙</span> GitHub</a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.platItem}><span>💼</span> LinkedIn</a>
                <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className={styles.platItem}><span>🔴</span> LeetCode</a>
                <a href={personalInfo.codechef} target="_blank" rel="noreferrer" className={styles.platItem}><span>👨‍🍳</span> CodeChef</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
