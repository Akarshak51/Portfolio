import { useRef, useEffect } from "react";
import { certificates } from "../data/portfolio";
import styles from "./Certificates.module.css";

const achievements = [
  { icon: "🏆", title: "Hackathon — Amity University", desc: "Participated and presented a tech project at Amity University's inter-college hackathon." },
  { icon: "📜", title: "5 Certifications", desc: "Certified on Unstop, Internshala and Codespark for technical quizzes and assessments." },
  { icon: "🎖️", title: "Campus Ambassador — IIT Delhi", desc: "Selected as Campus Ambassador, led outreach campaigns for 100+ students in 2025." },
];

const typeBg = {
  Achievement: { bg: "rgba(251,191,36,.3)", color: "#fde68a", border: "rgba(251,191,36,.5)" },
  Hackathon:   { bg: "rgba(244,114,182,.25)", color: "#fbcfe8", border: "rgba(244,114,182,.45)" },
  Quiz:        { bg: "rgba(103,232,249,.2)", color: "#a5f3fc", border: "rgba(103,232,249,.4)" },
  Certificate: { bg: "rgba(167,139,250,.22)", color: "#ddd6fe", border: "rgba(167,139,250,.4)" },
};

export default function Certificates() {
  const headRef    = useRef(null);
  const gridRef    = useRef(null);
  const achRef     = useRef(null);

  useEffect(() => {
    // Reveal head immediately
    if (headRef.current) {
      headRef.current.style.opacity = "1";
      headRef.current.style.transform = "none";
    }

    const revealOnScroll = (el, delay = 0) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        setTimeout(() => { el.style.opacity = "1"; el.style.transform = "none"; }, delay);
        return;
      }
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "none"; }, delay);
          obs.disconnect();
        }
      }, { threshold: 0.05 });
      obs.observe(el);
    };

    revealOnScroll(gridRef.current, 100);
    revealOnScroll(achRef.current, 200);
  }, []);

  return (
    <section id="certificates" className={styles.section}>
      <div className="wrap">
        <div
          ref={headRef}
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <div className={styles.label}>Certificates &amp; Wins</div>
          <h2 className={styles.h2}>
            Hackathons &amp; <span style={{ color: "var(--g)" }}>achievements.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={styles.grid}
          style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          {certificates.map((c, i) => {
            const tc = typeBg[c.type] || typeBg.Certificate;
            return (
              <figure key={i} className={styles.cert} style={{ margin: 0 }}>
                <div className={styles.imgWrap}>
                  <img src={c.img} alt={c.label} loading="lazy" />
                  <div className={styles.shine} />
                  {c.type && (
                    <span
                      className={styles.typeBadge}
                      style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}
                    >
                      {c.type}
                    </span>
                  )}
                </div>
                <figcaption className={styles.caption}>{c.label}</figcaption>
              </figure>
            );
          })}
        </div>

        <div
          ref={achRef}
          className={styles.achieveRow}
          style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}
        >
          {achievements.map((a) => (
            <div key={a.title} className={styles.achieveCard}>
              <div className={styles.achIcon}>{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
