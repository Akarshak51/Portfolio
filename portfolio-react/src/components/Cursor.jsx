import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let raf;

    const onMove = (e) => {
      pos.current.cx = e.clientX;
      pos.current.cy = e.clientY;
      spawnSpark(e.clientX, e.clientY);
    };

    let lastSpark = 0;
    const sparkColors = ["#7c5cfc", "#c8ff00", "#ff3cac", "#00e5ff"];

    const spawnSpark = (x, y) => {
      const now = Date.now();
      if (now - lastSpark < 60) return;
      lastSpark = now;
      const s = document.createElement("div");
      s.className = styles.spark;
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 25;
      s.style.cssText = `left:${x}px;top:${y}px;background:${sparkColors[Math.floor(Math.random() * sparkColors.length)]};--tx:${Math.cos(angle) * dist}px;--ty:${Math.sin(angle) * dist}px`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 700);
    };

    const animate = () => {
      const { cx, cy } = pos.current;
      pos.current.rx += (cx - pos.current.rx) * 0.13;
      pos.current.ry += (cy - pos.current.ry) * 0.13;
      dot.style.left = cx + "px";
      dot.style.top = cy + "px";
      ring.style.left = pos.current.rx + "px";
      ring.style.top = pos.current.ry + "px";
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const hoverEls = document.querySelectorAll("a,button,.btn");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add(styles.hover));
      el.addEventListener("mouseleave", () => ring.classList.remove(styles.hover));
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
