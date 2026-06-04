import { useEffect, useRef } from "react";

export default function CanvasBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, raf;
    let mx = 0, my = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });

    const COLS = ["#7c5cfc", "#c8ff00", "#ff3cac", "#00e5ff", "#ff6b00"];

    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * 1800, y: Math.random() * 1200,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      c: COLS[Math.floor(Math.random() * COLS.length)],
      o: Math.random() * 0.3 + 0.07,
    }));

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * 1600 + 100, y: Math.random() * 900 + 100,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() * 0.0004;

      // Orbs
      const orbs = [
        { x: W * 0.1 + Math.sin(t) * W * 0.05, y: H * 0.15 + Math.cos(t * 0.7) * H * 0.06, r: W * 0.35, c: "rgba(124,92,252,.11)" },
        { x: W * 0.9 + Math.cos(t * 0.8) * W * 0.05, y: H * 0.1 + Math.sin(t) * H * 0.05, r: W * 0.3, c: "rgba(255,60,172,.09)" },
        { x: W * 0.5 + Math.sin(t * 0.6) * W * 0.07, y: H * 0.8 + Math.cos(t * 0.9) * H * 0.04, r: W * 0.28, c: "rgba(200,255,0,.07)" },
        { x: W * 0.15 + Math.cos(t * 0.5) * W * 0.04, y: H * 0.6 + Math.sin(t * 0.8) * H * 0.05, r: W * 0.22, c: "rgba(0,229,255,.08)" },
      ];

      orbs.forEach((o) => {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, o.c);
        g.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Neural net
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 50 || n.x > W - 50) n.vx *= -1;
        if (n.y < 50 || n.y > H - 50) n.vy *= -1;
        const dx = mx - n.x, dy = my - n.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 300) { n.vx += (dx / d) * 0.04; n.vy += (dy / d) * 0.04; }
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > 0.6) { n.vx *= 0.96; n.vy *= 0.96; }
      });

      ctx.save();
      nodes.forEach((a, i) => {
        nodes.forEach((b, j) => {
          if (j <= i) return;
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            ctx.globalAlpha = (1 - d / 200) * 0.12;
            ctx.strokeStyle = "#7c5cfc";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        });
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = "#7c5cfc";
        ctx.beginPath(); ctx.arc(a.x, a.y, 2, 0, Math.PI * 2); ctx.fill();
      });
      ctx.restore();

      // Stars
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c; ctx.globalAlpha = p.o; ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -3, pointerEvents: "none" }}
    />
  );
}
