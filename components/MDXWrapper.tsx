"use client";

import { useEffect, useRef, useState } from "react";

export default function MDXWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    if (!contentRef.current || !wrapperRef.current) return;

    const container = wrapperRef.current;

    // Always clear the wrapper first to prevent duplicates
    container.innerHTML = "";

    // Get all elements from the hidden content div
    const elements = Array.from(contentRef.current.children);
    const sections: HTMLElement[][] = [];
    let currentSection: HTMLElement[] = [];

    elements.forEach((element) => {
      const clone = element.cloneNode(true) as HTMLElement;
      const isImageCard = clone.classList.contains('character-image-card') ||
                          clone.querySelector('.character-image-card');

      if (clone.tagName === "H1" || isImageCard) {
        // Start a new section for H1 or standalone image cards
        if (currentSection.length > 0) {
          sections.push(currentSection);
        }
        currentSection = [clone];
      } else {
        currentSection.push(clone);
      }
    });

    // Add the last section
    if (currentSection.length > 0) {
      sections.push(currentSection);
    }

    // Only process if we have sections to work with
    if (sections.length === 0) {
      setProcessed(true);
      return;
    }

    // Create cards for each section
    sections.forEach((section) => {
      const card = document.createElement("div");

      // Check if this section contains an image card component
      const hasImageCard = section.some(el =>
        el.classList.contains('character-image-card')
      );

      // Apply different classes based on content type
      if (hasImageCard) {
        card.className = "";
      } else {
        card.className = "dnd-card p-6";
      }

      section.forEach((element) => {
        card.appendChild(element);
      });

      container.appendChild(card);
    });

    setProcessed(true);
  }, [children]);

  return (
    <>
      {/* Hidden div to hold React-rendered children */}
      <div ref={contentRef} style={{ display: 'none' }}>
        {children}
      </div>
      {/* Visible div where we manually construct the layout */}
      <div ref={wrapperRef} className="grid grid-cols-1 md:grid-cols-2 gap-6" />
    </>
  );
}
