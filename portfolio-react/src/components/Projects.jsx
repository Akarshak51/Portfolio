import { useRef, useEffect } from "react";
import { projects } from "../data/portfolio";
import styles from "./Projects.module.css";

const GhIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const ExtIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const accentLabel = { orange: "AI/ML", cyan: "Web App", violet: "CV/AI", lime: "Full Stack", pink: "Research" };

const tagColors = {
  orange: { bg: "rgba(249,115,22,.18)", color: "#fdba74", border: "rgba(249,115,22,.35)" },
  cyan:   { bg: "rgba(6,182,212,.16)",  color: "#67e8f9", border: "rgba(6,182,212,.32)" },
  violet: { bg: "rgba(124,58,237,.18)", color: "#c4b5fd", border: "rgba(124,58,237,.35)" },
  lime:   { bg: "rgba(163,230,53,.15)", color: "#bef264", border: "rgba(163,230,53,.32)" },
  pink:   { bg: "rgba(236,72,153,.16)", color: "#f9a8d4", border: "rgba(236,72,153,.32)" },
};

const hoverBorder = {
  orange: "rgba(249,115,22,.55)", cyan: "rgba(6,182,212,.5)",
  violet: "rgba(124,58,237,.55)", lime: "rgba(163,230,53,.5)", pink: "rgba(236,72,153,.5)",
};

const hoverShadow = {
  orange: "0 28px 60px rgba(249,115,22,.18)", cyan: "0 28px 60px rgba(6,182,212,.16)",
  violet: "0 28px 60px rgba(124,58,237,.18)", lime: "0 28px 60px rgba(163,230,53,.16)",
  pink:   "0 28px 60px rgba(236,72,153,.16)",
};

/* Image block — SVGs get no dark overlay; photos get the gradient overlay */
function ImgBlock({ p }) {
  const isSvg = p.image.endsWith(".svg");
  const wrapClass = isSvg ? styles.svgWrap : styles.imgWrap;
  return (
    <div className={wrapClass}>
      <span className={`${styles.badge} ${styles[`badge_${p.accent}`]}`}>
        {accentLabel[p.accent] || "Project"}
      </span>
      <img
        src={p.image}
        alt={p.title}
        style={isSvg ? { width: "100%", height: "100%", objectFit: "fill", display: "block" } : {}}
      />
      <div className={styles.overlay}>
        <span className={styles.viewBtn}>View Project ↗</span>
      </div>
    </div>
  );
}

function CardBody({ p }) {
  const tc = tagColors[p.accent] || tagColors.cyan;
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <h3>{p.title}</h3>
        <div className={styles.links}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className={styles.ilink} title="GitHub">
              <GhIcon />
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className={styles.ilink} title="Live Demo">
              <ExtIcon />
            </a>
          )}
        </div>
      </div>
      <p className={styles.desc}>{p.desc}</p>
      <div className={styles.tags}>
        {p.tags.map((t) => (
          <span key={t} className={styles.tag} style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
            {t}
          </span>
        ))}
      </div>
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className={`btn btn-c ${styles.liveBtn}`}>
          <ExtIcon /> View Live
        </a>
      )}
    </div>
  );
}

function ProjectCard({ p, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 150) {
      setTimeout(show, index * 80);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { show(); obs.disconnect(); } },
      { threshold: 0.04 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const cardStyle = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s, border-color 0.25s, box-shadow 0.25s`,
  };

  const onEnter = (e) => {
    e.currentTarget.style.borderColor = hoverBorder[p.accent];
    e.currentTarget.style.boxShadow = hoverShadow[p.accent];
    e.currentTarget.style.transform = "translateY(-8px)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.borderColor = "";
    e.currentTarget.style.boxShadow = "";
    e.currentTarget.style.transform = "translateY(0)";
  };

  if (p.wide) {
    return (
      <article ref={ref} className={`${styles.card} ${styles.wide}`} style={cardStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className={styles.wideInner}>
          <ImgBlock p={p} />
          <CardBody p={p} />
        </div>
      </article>
    );
  }

  return (
    <article ref={ref} className={styles.card} style={cardStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <ImgBlock p={p} />
      <CardBody p={p} />
    </article>
  );
}

export default function Projects() {
  const headRef = useRef(null);
  useEffect(() => {
    if (headRef.current) {
      headRef.current.style.opacity = "1";
      headRef.current.style.transform = "none";
    }
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className="wrap">
        <div
          ref={headRef}
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <div className={styles.label}>Projects</div>
          <h2 className={styles.h2}>Things I've <span style={{ color: "var(--o)" }}>built.</span></h2>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
