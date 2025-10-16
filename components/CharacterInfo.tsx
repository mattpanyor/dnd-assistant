"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CharacterIntro } from "@/types/character";

interface CharacterInfoProps {
  character: CharacterIntro;
}

export default function CharacterInfo({ character }: CharacterInfoProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const traitsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState({
    image: false,
    desc: false,
    story: false,
    traits: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === imageRef.current) {
            setIsVisible((prev) => ({ ...prev, image: true }));
          } else if (entry.target === descRef.current) {
            setIsVisible((prev) => ({ ...prev, desc: true }));
          } else if (entry.target === storyRef.current) {
            setIsVisible((prev) => ({ ...prev, story: true }));
          } else if (entry.target === traitsRef.current) {
            setIsVisible((prev) => ({ ...prev, traits: true }));
          }
        }
      });
    }, observerOptions);

    if (imageRef.current) observer.observe(imageRef.current);
    if (descRef.current) observer.observe(descRef.current);
    if (storyRef.current) observer.observe(storyRef.current);
    if (traitsRef.current) observer.observe(traitsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 animate-fadeIn">
          <div
            ref={imageRef}
            className={`transition-all duration-1000 ${
              isVisible.image
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl border-4 border-amber-900/20 dark:border-amber-400/20">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center pb-2">
              <h1 className="text-5xl font-bold text-amber-950 dark:text-amber-200 font-serif uppercase italic tracking-wide mb-2 dark:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                {character.name}
              </h1>
              <p className="text-2xl italic text-amber-800 dark:text-purple-300 mb-3">
                {character.title}
              </p>
              <div className="text-sm text-amber-900 dark:text-amber-300">
                <span className="italic">{character.race} {character.class}</span>
              </div>
            </div>

            {character.quote && (
              <div className="dnd-card p-6">
                <blockquote className="text-lg italic text-amber-900 dark:text-amber-200 text-center">
                  &quot;{character.quote}&quot;
                </blockquote>
              </div>
            )}

            <div
              ref={descRef}
              className={`dnd-card p-6 transition-all duration-1000 ${
                isVisible.desc
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-3 border-b-2 border-amber-900/30 dark:border-purple-500/50 pb-2">
                About
              </h2>
              <p className="text-base leading-relaxed text-amber-900 dark:text-gray-200 column-text">
                {character.description}
              </p>
            </div>

            <div
              ref={storyRef}
              className={`dnd-card p-6 transition-all duration-1000 ${
                isVisible.story
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-3 border-b-2 border-amber-900/30 dark:border-purple-500/50 pb-2">
                The Story
              </h2>
              <p className="text-base leading-relaxed text-amber-900 dark:text-gray-200 column-text whitespace-pre-line">
                {character.story}
              </p>
            </div>

            {character.traits && character.traits.length > 0 && (
              <div
                ref={traitsRef}
                className={`dnd-card p-6 transition-all duration-1000 ${
                  isVisible.traits
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-2xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-3 border-b-2 border-amber-900/30 dark:border-purple-500/50 pb-2">
                  Notable Traits
                </h2>
                <ul className="space-y-2">
                  {character.traits.map((trait, index) => (
                    <li
                      key={index}
                      className="text-base text-amber-900 dark:text-gray-200 pl-4"
                    >
                      <strong className="dark:text-purple-400">•</strong> {trait}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
