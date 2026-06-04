import { useEffect, useRef } from "react";
import { skills } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Skills.module.css";

function SkillCard({ skill, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add("revealed");
        el.querySelectorAll("[data-w]").forEach((b) => { b.style.width = b.dataset.w + "%"; });
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fillClass = { violet: styles.fv, cyan: styles.fc, orange: styles.fo }[skill.accent];

  return (
    <div ref={ref} className={`${styles.card} ${styles[skill.accent]} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.iconBox}>{skill.icon}</div>
      <div className={styles.title}>{skill.title}</div>
      <div className={styles.tags}>
        {skill.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <div className={styles.bars}>
        {skill.bars.map((b) => (
          <div key={b.label} className={styles.barRow}>
            <label>{b.label}<em>{b.pct}%</em></label>
            <div className={styles.track}>
              <div className={`${styles.fill} ${fillClass}`} data-w={b.pct} style={{ width: 0 }} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.accentBar}>
        <span>Proficiency level</span>
        <div className={styles.accentDot} />
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useScrollReveal();
  return (
    <section id="skills" className={styles.section}>
      <div className="wrap">
        <div ref={headRef} className="reveal">
          <div className={styles.label}>Skills</div>
          <h2 className={styles.h2}>What I <span style={{ color: "var(--v)" }}>work with.</span></h2>
        </div>
        <div className={styles.grid}>
          {skills.map((s, i) => <SkillCard key={s.title} skill={s} delay={i * 0.12} />)}
        </div>
      </div>
    </section>
  );
}
