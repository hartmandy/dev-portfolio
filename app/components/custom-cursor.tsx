import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-8 h-8 rounded-full bg-white/30 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      style={{
        left: "var(--mouse-x, 0px)",
        top: "var(--mouse-y, 0px)",
      }}
    />
  );
}
