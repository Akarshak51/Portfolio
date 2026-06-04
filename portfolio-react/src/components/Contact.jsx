import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolio";
import styles from "./Contact.module.css";

const MailIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const LiIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const GhIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;

const infoCards = [
  { icon: "📧", label: "Email", value: "aveshmishra51@gmail.com", href: "mailto:aveshmishra51@gmail.com", bg: "rgba(124,58,237,.2)" },
  
];

export default function Contact() {
  const headRef = useScrollReveal();
  const boxRef  = useScrollReveal();
  const colRef  = useScrollReveal();

  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div ref={headRef} className="reveal">
          <div className={styles.label}>Contact</div>
          <h2 className={styles.h2}>Let's build <span style={{ color: "var(--p)" }}>something great.</span></h2>
        </div>

        <div className={styles.layout}>
          <div ref={boxRef} className={`${styles.box} reveal`}>
            <div className={styles.boxInner}>
              <h3>Open to Jobs , internships, dev roles &amp; meaningful collaborations.</h3>
              <p>Working on AI, full-stack, automation or embedded systems? I'd love to discuss ideas. Email works best — I reply fast.</p>
              <div className={styles.btns}>
                <a className="btn btn-v" href={`mailto:${personalInfo.email}`}><MailIcon /> Send Email</a>
                <a className="btn btn-out" href={personalInfo.linkedin} target="_blank" rel="noreferrer"><LiIcon /> LinkedIn</a>
                <a className="btn btn-g" href={personalInfo.github} target="_blank" rel="noreferrer"><GhIcon /> GitHub</a>
              </div>
            </div>
          </div>

          <div ref={colRef} className={`${styles.infoCol} reveal`}>
            {infoCards.map((c) =>
              c.href ? (
                <a key={c.label} href={c.href} className={styles.infoCard} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <div className={styles.infoIcon} style={{ background: c.bg }}>{c.icon}</div>
                  <div className={styles.infoText}><h4>{c.label}</h4><p>{c.value}</p></div>
                </a>
              ) : (
                <div key={c.label} className={styles.infoCard}>
                  <div className={styles.infoIcon} style={{ background: c.bg }}>{c.icon}</div>
                  <div className={styles.infoText}><h4>{c.label}</h4><p>{c.value}</p></div>
                </div>
              )
            )}
            <div className={styles.availability}>
              <div className={styles.availDot} />
              <p><strong>Currently available</strong> — open to full-time, internships &amp; freelance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
