"use client";

import { useEffect, useRef, useState } from "react";

// Wraps a section and fades/rises it in when scrolled into view.
// Respects prefers-reduced-motion via the CSS in globals.css.
export default function Reveal({ as: Tag = "section", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} reveal${inView ? " in" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
