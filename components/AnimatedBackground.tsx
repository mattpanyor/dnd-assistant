"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-300 to-blue-200 dark:from-indigo-950 dark:via-purple-900 dark:to-slate-900 -z-10">
      {!isDark && (
        <>
          <div className="clouds-layer"></div>
          <div className="sun-rays"></div>
        </>
      )}
      {isDark && (
        <>
          <div className="stars-layer"></div>
          <div className="twinkling-layer"></div>
        </>
      )}
    </div>
  );
}
