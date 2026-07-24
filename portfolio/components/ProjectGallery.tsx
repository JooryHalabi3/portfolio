import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  orientation?: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <section className="mt-16 border-t border-brand-border pt-12">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        Project Gallery
      </p>

      <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-foreground">
        System Interfaces
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {images.map((image, index) => (
          <figure
            key={`${image.caption}-${index}`}
            className="overflow-hidden rounded-2xl border border-brand-border bg-surface"
          >
            <div
              className={
                image.orientation === "portrait"
                  ? "relative mx-auto aspect-[9/16] w-full max-w-sm"
                  : "relative aspect-video w-full"
              }
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-white/[0.03]">
                  <span className="text-sm text-text-secondary">
                    Image coming soon
                  </span>
                </div>
              )}
            </div>

            <figcaption className="border-t border-brand-border px-5 py-4 text-sm text-text-secondary">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}