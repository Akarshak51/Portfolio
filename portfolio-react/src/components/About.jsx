import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./About.module.css";

const facts = [
  { num: "8+", label: "Projects across AI, Web & Hardware", color: "var(--c)" },
  { num: "3",  label: "Internships completed", color: "var(--v)" },
  { num: "100+", label: "Students coordinated", color: "var(--g)" },
  { num: "2027", label: "Expected graduation", color: "var(--o)" },
];

export default function About() {
  const headRef  = useScrollReveal();
  const bioRef   = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className={styles.section}>
      <div className="wrap">
        <div ref={headRef} className="reveal">
          <div className={styles.label}>About me</div>
          <h2 className={styles.h2}>Who I am &amp; <span style={{ color: "var(--c)" }}>why I build.</span></h2>
        </div>
        <div className={styles.grid}>
          <div ref={bioRef} className={`${styles.bioCard} reveal`}>
            <h3>👋 Hey, I'm Akarashak</h3>
            <p>
              A 4th-year B.Tech Electronics Engineering student at <strong>IERT Prayagraj</strong> (2023–2027),
              building at the crossroads of artificial intelligence, full-stack development, and embedded systems.
            </p>
            <p>
              I don't just write code — I build tools that <strong>actually solve real problems</strong>.
              From LangChain-powered AI agents to real-time Arduino control systems,
              I care deeply about reliability and great user experience.
            </p>
            <ul className={styles.bullets}>
              <li>AI systems using LangChain, FastAPI &amp; LLMs with RAG pipelines</li>
              <li>Full-stack web apps — React, Node.js, REST APIs, deployed on Vercel</li>
              <li>Embedded hardware — Arduino, C++, IoT sensors &amp; automation</li>
              <li>Signal processing — EEG pipelines &amp; ML-based fatigue classification</li>
              <li>Campus Ambassador at IIT Delhi — led outreach for 100+ students</li>
            </ul>
          </div>

          <div ref={rightRef} className={`${styles.rightCol} reveal`}>
            <div className={styles.facts}>
              {facts.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <div className={styles.factNum} style={{ background: `linear-gradient(120deg,${f.color},var(--v))`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {f.num}
                  </div>
                  <p>{f.label}</p>
                </div>
              ))}
            </div>

            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>🎓</div>
              <div className={styles.eduInfo}>
                <h4>B.Tech Electronics Engineering</h4>
                <p>IERT (Institute of Engineering &amp; Rural Technology)</p>
                <p>Prayagraj, Uttar Pradesh</p>
                <span>2023 – 2027 · Currently in 4th Year</span>
              </div>
            </div>

            <div className={styles.eduCard}>
              <div className={styles.eduIcon} style={{ background: "linear-gradient(135deg,var(--p),var(--v))" }}>🏆</div>
              <div className={styles.eduInfo}>
                <h4>Achievements &amp; Recognition</h4>
                <p>Campus Ambassador · IIT Delhi (2025)</p>
                <p>Hackathon participant · Amity University</p>
                <span>Multiple quiz certifications on Unstop &amp; Internshala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
