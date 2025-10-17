interface CharacterImageCardProps {
  src: string;
  alt?: string;
  caption?: string;
}

export default function CharacterImageCard({
  src,
  alt = "Character image",
  caption,
}: CharacterImageCardProps) {
  return (
    <div className="character-image-card flex flex-col items-center">
      <div className="inline-block rounded-lg shadow-2xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-auto max-h-[600px] block"
        />
      </div>
      {caption && (
        <p className="text-center text-sm italic text-amber-900 dark:text-amber-300 mt-3">
          {caption}
        </p>
      )}
    </div>
  );
}
