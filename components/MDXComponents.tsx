import Image from "next/image";
import CharacterImageCard from "./CharacterImageCard";

export const MDXComponents = {
  h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className="section-break text-3xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-4 mt-6"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-3 border-b-2 border-amber-900/30 dark:border-purple-500/50 pb-2"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-bold text-amber-900 dark:text-purple-400 font-serif uppercase italic mb-2"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="text-base leading-relaxed text-amber-900 dark:text-gray-200 mb-4"
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
      className="text-base text-amber-900 dark:text-gray-200 pl-4"
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
    <em className="italic text-amber-900 dark:text-gray-300" {...props}>
      {children}
    </em>
  ),
  CharacterImageCard,
};
