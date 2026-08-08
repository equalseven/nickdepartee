"use client";
import { useEffect, useRef } from "react";

// Full-bleed photographic hero with a subtle scroll parallax on the image.
// Respects prefers-reduced-motion.
export default function Hero() {
  const bg = useRef(null);
  useEffect(() => {
    const el = bg.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = el.closest(".hero");
    let ticking = false;
    const upd = () => {
      const h = hero ? hero.offsetHeight : 800;
      const y = Math.min(window.scrollY, h);
      el.style.transform = `translate3d(0, ${(y * 0.15).toFixed(1)}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(upd); ticking = true; }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", upd);
    upd();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", upd);
    };
  }, []);

  return (
    <header className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={bg} className="bg" src="/horse.jpg" alt="Nick de Partee on horseback in the high desert" />
      <div className="veil" />
      <div className="hc wrap">
        <h1>
          <span className="roles">
            <span>Creative Director</span>
            <span>Designer</span>
            <span>Founder</span>
            <span>Musician</span>
          </span>
        </h1>
      </div>
    </header>
  );
}
