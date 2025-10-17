import { notFound } from "next/navigation";
import { getCharacterSlugs, getCharacterBySlug } from "@/lib/mdx";
import MDXCharacterLayout from "@/components/MDXCharacterLayout";
import { MDXComponents } from "@/components/MDXComponents";
import MDXWrapper from "@/components/MDXWrapper";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const slugs = getCharacterSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getCharacterSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const { metadata, content } = getCharacterBySlug(slug);

  // Split content into About section and rest
  const sections = content.split(/^#\s/m);
  const aboutContent = sections[0]; // Everything before first #
  const restContent = sections.slice(1).map((s) => `# ${s}`).join("\n\n");

  return (
    <MDXCharacterLayout
      metadata={metadata}
      aboutSection={
        <div className="dnd-card p-6">
          <h2 className="text-2xl font-bold text-amber-950 dark:text-purple-300 font-serif uppercase italic mb-3 border-b-2 border-amber-900/30 dark:border-purple-500/50 pb-2">
            About
          </h2>
          <MDXRemote source={aboutContent} components={MDXComponents} />
        </div>
      }
    >
      <MDXWrapper>
        <MDXRemote source={restContent} components={MDXComponents} />
      </MDXWrapper>
    </MDXCharacterLayout>
  );
}
