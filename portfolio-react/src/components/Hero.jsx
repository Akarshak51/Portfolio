import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../data/portfolio";
import styles from "./Hero.module.css";

function useTyping(phrases) {
  const [text, setText] = useState("");
  const state = useRef({ pi: 0, ci: 0, del: false });
  useEffect(() => {
    const loop = () => {
      const { pi, ci, del } = state.current;
      const word = phrases[pi];
      if (!del) {
        setText(word.slice(0, ci + 1));
        state.current.ci++;
        if (state.current.ci === word.length) { state.current.del = true; setTimeout(loop, 2200); return; }
      } else {
        setText(word.slice(0, ci - 1));
        state.current.ci--;
        if (state.current.ci === 0) { state.current.del = false; state.current.pi = (pi + 1) % phrases.length; }
      }
      setTimeout(loop, del ? 52 : 85);
    };
    const t = setTimeout(loop, 1600);
    return () => clearTimeout(t);
  }, []);
  return text;
}

function Counter({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const step = target / ((target > 100 ? 1800 : 900) / 16);
        let cur = 0;
        const t = setInterval(() => { cur = Math.min(cur + step, target); setVal(Math.floor(cur)); if (cur >= target) clearInterval(t); }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}</span>;
}

const GhIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const LiIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const DlIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const ProjIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;

export default function Hero() {
  const typed = useTyping(personalInfo.taglines);

  return (
    <section className={styles.heroSection}>
      <div className={`wrap ${styles.heroGrid}`}>
        <div className={styles.left}>
          <div className={styles.eyebrow}><span className={styles.pulse} />Available for opportunities</div>
          <h1 className={styles.h1}>
            <span className={styles.stroke}>Akarashak</span>
            <span className={styles.gradFill}>Mishra</span>
          </h1>
          <div className={styles.typeLine}><span>{typed}</span><span className={styles.cursor} /></div>
          <p className={styles.desc}>{personalInfo.description}</p>
          <div className={styles.btns}>
            <a className="btn btn-v" href={personalInfo.resume} download="Akarashak_resume S.docx"><DlIcon /> Resume</a>
            <a className="btn btn-out" href="#projects"><ProjIcon /> Projects</a>
            <a className="btn btn-g" href="#contact">Let's Talk ↗</a>
          </div>
          <div className={styles.stats}>
            {personalInfo.stats.map((s, i) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                {i > 0 && <div className={styles.statDivider} />}
                <div className={styles.stat}>
                  <div className={styles.statNum}><Counter target={s.num} />{s.suffix}</div>
                  <div className={styles.statLbl}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.socials}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.soc} title="GitHub"><GhIcon /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.soc} title="LinkedIn"><LiIcon /></a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className={styles.soc} title="LeetCode">
              <svg width="15" height="15" viewBox="0 0 50 50" fill="currentColor"><path d="M36.1 31.6H13.9c-1.1 0-2-.9-2-2s.9-2 2-2h22.3c1.1 0 2 .9 2 2s-1 2-2.1 2zm-7.6 8.1c-.5 0-1-.2-1.4-.6l-8.7-8.7c-.8-.8-.8-2 0-2.8l8.7-8.7c.8-.8 2-.8 2.8 0s.8 2 0 2.8L23.4 28l6.5 6.5c.8.8.8 2 0 2.8-.4.3-.9.4-1.4.4z"/></svg>
            </a>
            <a href={personalInfo.codechef} target="_blank" rel="noreferrer" className={styles.soc} title="CodeChef">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.07 0C7.37.04 4 2.67 4 6.56c0 1.4.4 2.7 1.06 3.83C3.2 11.6 2 13.5 2 15.7 2 19.7 5.3 23 9.3 23h5.4c4 0 7.3-3.3 7.3-7.3 0-2.2-1.2-4.1-3.06-5.31C19.6 9.26 20 7.96 20 6.56 20 2.51 16.36 0 12.56 0h-1.49zm.93 2c2.84 0 5 1.87 5 4.56 0 1.1-.38 2.13-1.05 2.94H8.05A4.63 4.63 0 0 1 7 6.56C7 3.87 9.16 2 12 2zm-2.7 9.5h5.4l.6.5H7.8l.5-.5zM9.3 14h5.4c2.37 0 4.3 1.93 4.3 4.3S17.07 22.6 14.7 22.6H9.3C6.93 22.6 5 20.67 5 18.3S6.93 14 9.3 14z"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.portraitWrap}>
            <div className={styles.portraitInner}>
              <img src={personalInfo.photo} alt="Akarashak Mishra" />
              <div className={styles.scan} />
            </div>
            <div className={`${styles.floater} ${styles.f1}`}>⚡ AI Engineer</div>
            <div className={`${styles.floater} ${styles.f2}`}>🔧 Embedded Dev</div>
            <div className={`${styles.floater} ${styles.f3}`}>🌐 Full Stack</div>
          </div>
          <div className={styles.term}>
            <div className={styles.termDots}>
              <span style={{ background: "#ff5f57" }} /><span style={{ background: "#ffbd2e" }} /><span style={{ background: "#28c840" }} />
            </div>
            <div className={styles.termCode}>
              <div className={styles.tc2}>// profile.json</div>
              <div><span className={styles.tk}>const</span> dev = {"{"}</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>name</span>: <span className={styles.ts}>"Akarashak Mishra"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>role</span>: <span className={styles.ts}>"AI + Full Stack"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>college</span>: <span className={styles.ts}>"IERT Prayagraj"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>year</span>: <span className={styles.tv}>4</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>status</span>: <span className={styles.tv}>"open_to_work"</span></div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollHint}><span>scroll</span><div className={styles.scrollLine} /></div>
    </section>
  );
}
