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
          <div className="relative w-full p-4">
            <div className="relative aspect-[3/4] w-full">
              {/* Gothic Frame Decoration */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {/* Outer ornate border */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="none">
                  {/* Main frame border */}
                  <rect x="2" y="2" width="296" height="396" fill="none" stroke="url(#frameGradient)" strokeWidth="4" />
                  <rect x="8" y="8" width="284" height="384" fill="none" stroke="url(#frameGradient)" strokeWidth="2" />

                  {/* Corner ornaments - Top Left */}
                  <path d="M 15 15 Q 15 25, 25 25 L 30 25 L 30 20 L 20 20 L 20 30 L 25 30 Q 25 15, 15 15"
                        fill="currentColor" className="text-amber-700 dark:text-purple-400" opacity="0.8"/>

                  {/* Corner ornaments - Top Right */}
                  <path d="M 285 15 Q 285 25, 275 25 L 270 25 L 270 20 L 280 20 L 280 30 L 275 30 Q 275 15, 285 15"
                        fill="currentColor" className="text-amber-700 dark:text-purple-400" opacity="0.8"/>

                  {/* Corner ornaments - Bottom Left */}
                  <path d="M 15 385 Q 15 375, 25 375 L 30 375 L 30 380 L 20 380 L 20 370 L 25 370 Q 25 385, 15 385"
                        fill="currentColor" className="text-amber-700 dark:text-purple-400" opacity="0.8"/>

                  {/* Corner ornaments - Bottom Right */}
                  <path d="M 285 385 Q 285 375, 275 375 L 270 375 L 270 380 L 280 380 L 280 370 L 275 370 Q 275 385, 285 385"
                        fill="currentColor" className="text-amber-700 dark:text-purple-400" opacity="0.8"/>

                  {/* Top center ornament */}
                  <path d="M 150 5 L 145 15 L 155 15 Z" fill="currentColor" className="text-amber-700 dark:text-purple-400" opacity="0.8"/>
                  <circle cx="150" cy="15" r="3" fill="currentColor" className="text-amber-600 dark:text-purple-300"/>

                  {/* Bottom center ornament */}
                  <path d="M 150 395 L 145 385 L 155 385 Z" fill="currentColor" className="text-amber-700 dark:text-purple-400" opacity="0.8"/>
                  <circle cx="150" cy="385" r="3" fill="currentColor" className="text-amber-600 dark:text-purple-300"/>

                  <defs>
                    <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="text-amber-800 dark:text-purple-500" stopColor="currentColor" />
                      <stop offset="50%" className="text-amber-600 dark:text-purple-300" stopColor="currentColor" />
                      <stop offset="100%" className="text-amber-800 dark:text-purple-500" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Image Container */}
              <div className="absolute inset-0 m-4 overflow-hidden shadow-2xl">
                <Image
                  src={metadata.image}
                  alt={metadata.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
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

            {/* Status Section */}
            {(metadata.status || metadata.game) && (
              <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
                {metadata.status && (
                  <div className="relative group">
                    {/* Decorative corner flourishes */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-amber-600 dark:border-purple-400"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-amber-600 dark:border-purple-400"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-amber-600 dark:border-purple-400"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-amber-600 dark:border-purple-400"></div>

                    <div className="relative px-4 py-2 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950 border-2 border-amber-700 dark:border-purple-500 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 dark:via-purple-400/10 to-transparent"></div>
                      <div className="relative flex items-center gap-2">
                        <span className="text-xs font-serif uppercase tracking-wider text-amber-900 dark:text-purple-300 font-bold">Status:</span>
                        <span className="text-sm font-sans italic text-amber-950 dark:text-amber-200 drop-shadow-sm">{metadata.status}</span>
                      </div>
                    </div>
                  </div>
                )}

                {metadata.game && (
                  <div className="relative group">
                    {/* Decorative corner flourishes */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-green-600 dark:border-cyan-400"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-green-600 dark:border-cyan-400"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-green-600 dark:border-cyan-400"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-green-600 dark:border-cyan-400"></div>

                    <div className="relative px-4 py-2 bg-gradient-to-r from-green-100 via-green-50 to-green-100 dark:from-cyan-950 dark:via-cyan-900 dark:to-cyan-950 border-2 border-green-700 dark:border-cyan-500 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/30 dark:via-cyan-400/10 to-transparent"></div>
                      <div className="relative flex items-center gap-2">
                        <span className="text-xs font-serif uppercase tracking-wider text-green-900 dark:text-cyan-300 font-bold">Game:</span>
                        <span className="text-sm font-sans italic text-green-950 dark:text-cyan-200 drop-shadow-sm">{metadata.game}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

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

                <blockquote className="text-xl italic text-amber-900 dark:text-amber-200 text-center relative z-10 font-sans leading-relaxed">
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
