import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const charactersDirectory = path.join(process.cwd(), 'content/characters');

export interface CharacterMetadata {
  name: string;
  title: string;
  race: string;
  class: string;
  image: string;
  quote?: string;
  slug: string;
}

export function getCharacterSlugs(): string[] {
  if (!fs.existsSync(charactersDirectory)) {
    return [];
  }
  const files = fs.readdirSync(charactersDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getCharacterBySlug(slug: string): {
  metadata: CharacterMetadata;
  content: string;
} {
  const fullPath = path.join(charactersDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...(data as Omit<CharacterMetadata, 'slug'>),
      slug,
    },
    content,
  };
}

export function getAllCharacters(): CharacterMetadata[] {
  const slugs = getCharacterSlugs();
  return slugs.map((slug) => {
    const { metadata } = getCharacterBySlug(slug);
    return metadata;
  });
}
