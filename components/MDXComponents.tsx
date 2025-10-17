import Image from "next/image";
import CharacterImageCard from "./CharacterImageCard";

export const MDXComponents = {
  h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
    // Check if children is empty or just whitespace
    const isEmpty = !children || (typeof children === 'string' && children.trim() === '');

    if (isEmpty) {
      return null;
    }

    return (
      <h1
        className="section-break text-3xl font-bold font-serif italic mb-4 mt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        {...props}
      >
        <div className="flex items-center gap-3">
          <span className="text-amber-700 dark:text-blue-400">⟨</span>
          <span className="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            {children}
          </span>
          <span className="text-amber-700 dark:text-blue-400">⟩</span>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-700 dark:via-blue-500 to-transparent"></div>
          <span className="text-amber-700 dark:text-purple-400 text-sm">✦</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-700 dark:via-blue-500 to-transparent"></div>
        </div>
      </h1>
    );
  },
  h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className="text-xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-3 mt-6 pb-2 border-b-2 border-amber-900/30 dark:border-purple-500/50"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-bold text-amber-900 dark:text-purple-400 font-serif uppercase italic mb-2 mt-4 flex items-center gap-2"
      {...props}
    >
      <span className="text-amber-700 dark:text-purple-500 text-sm">▸</span>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="text-lg leading-loose text-amber-900 dark:text-gray-200 mb-4 font-sans"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLProps<HTMLUListElement>) => (
    <ul className="space-y-2 mb-4" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }: React.HTMLProps<HTMLLIElement>) => (
    <li
      className="text-lg text-amber-900 dark:text-gray-200 pl-4 font-sans"
      {...props}
    >
      <strong className="dark:text-purple-400">•</strong> {children}
    </li>
  ),
  strong: ({ children, ...props }: React.HTMLProps<HTMLElement>) => (
    <strong className="font-bold text-amber-950 dark:text-amber-200" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLProps<HTMLElement>) => (
    <em className="italic text-amber-900 dark:text-gray-300 font-sans" {...props}>
      {children}
    </em>
  ),
  CharacterImageCard,
};
