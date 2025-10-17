"use client";

import { useEffect, useState } from "react";

export default function DiceBackground() {
  const [isDark, setIsDark] = useState(true); // Default to dark

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
    <div className="fixed inset-0 -z-10">
      {/* Gaming table felt texture */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' : 'bg-gradient-to-br from-neutral-100 via-green-100 to-green-300'}`}>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,.03) 2px,
            rgba(255,255,255,.03) 4px
          )`
        }}></div>
      </div>

      {/* Floating dice pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* D20 dice scattered in background */}
        <div className="dice-float" style={{ top: '10%', left: '5%' }}>
          <D20Icon className="w-16 h-16 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '25%', right: '8%', animationDelay: '2s' }}>
          <D20Icon className="w-20 h-20 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '60%', left: '15%', animationDelay: '4s' }}>
          <D20Icon className="w-12 h-12 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '75%', right: '20%', animationDelay: '1s' }}>
          <D20Icon className="w-24 h-24 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '40%', left: '70%', animationDelay: '3s' }}>
          <D20Icon className="w-14 h-14 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '85%', left: '40%', animationDelay: '5s' }}>
          <D20Icon className="w-18 h-18 text-white opacity-5" />
        </div>

        {/* Standard 6-sided dice */}
        <div className="dice-float" style={{ top: '15%', left: '85%', animationDelay: '1.5s' }}>
          <D6Icon className="w-10 h-10 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '50%', right: '5%', animationDelay: '3.5s' }}>
          <D6Icon className="w-12 h-12 text-white opacity-5" />
        </div>
        <div className="dice-float" style={{ top: '30%', left: '30%', animationDelay: '2.5s' }}>
          <D6Icon className="w-8 h-8 text-white opacity-5" />
        </div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40"></div>
    </div>
  );
}

// D20 (20-sided die) icon component
function D20Icon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Simplified D20 icosahedron shape */}
      <polygon points="50,5 80,25 95,60 75,90 25,90 5,60 20,25" opacity="0.8" />
      <polygon points="50,5 80,25 50,40" opacity="0.6" />
      <polygon points="80,25 95,60 70,50" opacity="0.7" />
      <polygon points="50,40 70,50 50,70" opacity="0.5" />
      <polygon points="50,5 20,25 50,40" opacity="0.9" />
      <polygon points="20,25 5,60 30,50" opacity="0.8" />
      <polygon points="50,40 30,50 50,70" opacity="0.6" />
      {/* Center number "20" */}
      <text x="50" y="55" fontSize="16" textAnchor="middle" fill="rgba(0,0,0,0.3)" fontWeight="bold">20</text>
    </svg>
  );
}

// D6 (6-sided die) icon component
function D6Icon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Cube representation */}
      <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" opacity="0.8" />
      <polygon points="50,20 80,35 50,50 20,35" opacity="0.9" />
      <polygon points="50,50 80,35 80,65 50,80" opacity="0.6" />
      <polygon points="50,50 20,35 20,65 50,80" opacity="0.7" />
      {/* Dots representing "6" on visible face */}
      <circle cx="35" cy="42" r="2" fill="rgba(0,0,0,0.4)" />
      <circle cx="35" cy="50" r="2" fill="rgba(0,0,0,0.4)" />
      <circle cx="35" cy="58" r="2" fill="rgba(0,0,0,0.4)" />
    </svg>
  );
}
