import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Navbar.module.css";

const links = ["About", "Skills", "Projects", "Experience", "Certificates", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.inner} wrap`}>
        <a href="#" className={styles.brand}>
          <div className={styles.brandRing} />
          Akarashak<span style={{ color: "var(--g)" }}>.</span>
        </a>
        <nav className={styles.links}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`${styles.link} ${active === l.toLowerCase() ? styles.linkActive : ""}`}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className={styles.right}>
          <ThemeSwitcher />
          <a href="#contact" className={styles.cta}>Let's Talk</a>
          <button className={styles.mbtn} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className={styles.mmenu}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
