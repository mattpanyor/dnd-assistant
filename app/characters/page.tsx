import Image from "next/image";
import Link from "next/link";
import { getAllCharacters } from "@/lib/mdx";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function CharactersPage() {
  const characters = getAllCharacters();

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-950 dark:text-amber-200 uppercase italic tracking-wide mb-4 dark:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
              Character Gallery
            </h1>
            <p className="text-xl text-amber-800 dark:text-purple-300 font-serif italic">
              Meet the heroes and adventurers
            </p>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((character) => (
              <Link
                key={character.slug}
                href={`/characters/${character.slug}`}
                className="group"
              >
                <div className="dnd-card overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Character Portrait */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Character Info */}
                  <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-amber-950 dark:text-amber-200 uppercase italic mb-2">
                      {character.name}
                    </h2>
                    <p className="text-lg text-amber-800 dark:text-purple-300 italic mb-2">
                      {character.title}
                    </p>
                    <p className="text-sm text-amber-900 dark:text-amber-300">
                      <span className="italic">
                        {character.race} {character.class}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {characters.length === 0 && (
            <div className="dnd-card p-12 text-center">
              <p className="text-xl text-amber-900 dark:text-amber-200 font-serif italic">
                No characters available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
