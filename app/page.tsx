import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950 -z-10"></div>

      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_50%)] -z-10"></div>

      <main className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 sm:mb-6 text-amber-900 dark:text-amber-200 uppercase tracking-wide sm:tracking-wider drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
          D&D Assistant
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-amber-800 dark:text-purple-300 mb-3 sm:mb-4">
          Your Gateway to Epic Adventures
        </p>

        <p className="text-base sm:text-lg md:text-xl text-amber-700 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Explore character lore, roll dice with style, and enhance your tabletop experience with our immersive tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/characters"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-amber-600 to-orange-600 dark:from-purple-600 dark:to-indigo-600 text-white font-serif font-bold text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-amber-700 dark:border-purple-500"
          >
            Meet the Characters
          </Link>

          <Link
            href="/dice"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-cyan-600 dark:to-blue-600 text-white font-serif font-bold text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-emerald-700 dark:border-cyan-500"
          >
            Roll the Dice
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 text-left">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-2 border-amber-300 dark:border-purple-600 shadow-lg">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 dark:text-purple-300 mb-2">
              📖 Rich Character Lore
            </h3>
            <p className="text-sm sm:text-base text-amber-800 dark:text-gray-300">
              Dive deep into detailed character backgrounds, personalities, and stories.
            </p>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-2 border-amber-300 dark:border-purple-600 shadow-lg">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 dark:text-purple-300 mb-2">
              🎲 Immersive Dice Roller
            </h3>
            <p className="text-sm sm:text-base text-amber-800 dark:text-gray-300">
              Roll all your polyhedral dice with a beautiful, themed interface.
            </p>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-2 border-amber-300 dark:border-purple-600 shadow-lg">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-900 dark:text-purple-300 mb-2">
              🌙 Dark Mode Ready
            </h3>
            <p className="text-sm sm:text-base text-amber-800 dark:text-gray-300">
              Switch between light and dark themes for comfortable viewing anytime.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
