"use client";

import Image from "next/image";
import { CharacterMetadata } from "@/lib/mdx";
import AnimatedBackground from "./AnimatedBackground";

interface MDXCharacterLayoutProps {
  metadata: CharacterMetadata;
  children: React.ReactNode;
  aboutSection?: React.ReactNode;
}

export default function MDXCharacterLayout({
  metadata,
  children,
  aboutSection,
}: MDXCharacterLayoutProps) {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
        {/* First Section: Portrait + Basic Data */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-6">
          {/* Portrait */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl border-4 border-amber-900/20 dark:border-amber-400/20">
            <Image
              src={metadata.image}
              alt={metadata.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Basic Data + About */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-amber-950 dark:text-amber-200 font-serif uppercase italic tracking-wide mb-2 dark:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                {metadata.name}
              </h1>
              <p className="text-2xl italic text-amber-800 dark:text-purple-300 mb-3">
                {metadata.title}
              </p>
              <div className="text-sm text-amber-900 dark:text-amber-300">
                <span className="italic">
                  {metadata.race} {metadata.class}
                </span>
              </div>
            </div>

            {metadata.quote && (
              <div className="dnd-card p-6 relative overflow-hidden">
                {/* Left Rose */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-15 dark:opacity-10">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-amber-800 dark:text-amber-400">
                    {/* Rose petals */}
                    <ellipse cx="50" cy="50" rx="8" ry="10" fill="currentColor" opacity="0.9"/>
                    <ellipse cx="45" cy="48" rx="10" ry="12" fill="currentColor" opacity="0.7" transform="rotate(-30 45 48)"/>
                    <ellipse cx="55" cy="48" rx="10" ry="12" fill="currentColor" opacity="0.7" transform="rotate(30 55 48)"/>
                    <ellipse cx="43" cy="55" rx="12" ry="14" fill="currentColor" opacity="0.6" transform="rotate(-60 43 55)"/>
                    <ellipse cx="57" cy="55" rx="12" ry="14" fill="currentColor" opacity="0.6" transform="rotate(60 57 55)"/>
                    <ellipse cx="50" cy="60" rx="13" ry="15" fill="currentColor" opacity="0.5"/>
                    <ellipse cx="38" cy="50" rx="14" ry="16" fill="currentColor" opacity="0.5" transform="rotate(-90 38 50)"/>
                    <ellipse cx="62" cy="50" rx="14" ry="16" fill="currentColor" opacity="0.5" transform="rotate(90 62 50)"/>
                    {/* Stem */}
                    <path d="M50 60 L50 85" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                    {/* Leaf */}
                    <ellipse cx="45" cy="75" rx="8" ry="5" fill="currentColor" opacity="0.5" transform="rotate(-45 45 75)"/>
                  </svg>
                </div>

                {/* Right Rose */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-15 dark:opacity-10">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-amber-800 dark:text-amber-400" style={{ transform: "scaleX(-1)" }}>
                    {/* Rose petals */}
                    <ellipse cx="50" cy="50" rx="8" ry="10" fill="currentColor" opacity="0.9"/>
                    <ellipse cx="45" cy="48" rx="10" ry="12" fill="currentColor" opacity="0.7" transform="rotate(-30 45 48)"/>
                    <ellipse cx="55" cy="48" rx="10" ry="12" fill="currentColor" opacity="0.7" transform="rotate(30 55 48)"/>
                    <ellipse cx="43" cy="55" rx="12" ry="14" fill="currentColor" opacity="0.6" transform="rotate(-60 43 55)"/>
                    <ellipse cx="57" cy="55" rx="12" ry="14" fill="currentColor" opacity="0.6" transform="rotate(60 57 55)"/>
                    <ellipse cx="50" cy="60" rx="13" ry="15" fill="currentColor" opacity="0.5"/>
                    <ellipse cx="38" cy="50" rx="14" ry="16" fill="currentColor" opacity="0.5" transform="rotate(-90 38 50)"/>
                    <ellipse cx="62" cy="50" rx="14" ry="16" fill="currentColor" opacity="0.5" transform="rotate(90 62 50)"/>
                    {/* Stem */}
                    <path d="M50 60 L50 85" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                    {/* Leaf */}
                    <ellipse cx="45" cy="75" rx="8" ry="5" fill="currentColor" opacity="0.5" transform="rotate(-45 45 75)"/>
                  </svg>
                </div>

                <blockquote className="text-lg italic text-amber-900 dark:text-amber-200 text-center relative z-10">
                  &quot;{metadata.quote}&quot;
                </blockquote>
              </div>
            )}

            {/* About Section */}
            {aboutSection && <div>{aboutSection}</div>}
          </div>
        </div>

        {/* Second Section: Additional MDX Content */}
        <div>
          <div className="mdx-content space-y-6">{children}</div>
        </div>
      </div>
      </div>
    </>
  );
}
