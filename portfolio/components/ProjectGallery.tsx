"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  orientation?: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

function GalleryItem({
  image,
}: {
  image: GalleryImage;
}) {
  const [hasError, setHasError] = useState(false);

  const canDisplayImage =
    Boolean(image.src) && !hasError;

  return (
    <figure className="overflow-hidden rounded-2xl border border-brand-border bg-surface">
      <div
        className={
          image.orientation === "portrait"
            ? "relative mx-auto aspect-[9/16] w-full max-w-sm"
            : "relative aspect-video w-full"
        }
      >
        {canDisplayImage ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-contain"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface-light via-surface to-background px-8 text-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Interface Preview
              </p>

              <p className="mt-5 font-[var(--font-heading)] text-3xl font-medium tracking-[-0.02em] text-gold-gradient">
                {image.caption}
              </p>
            </div>
          </div>
        )}
      </div>

      <figcaption className="border-t border-brand-border px-5 py-4 text-sm text-text-secondary">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-brand-border pt-12">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        Project Gallery
      </p>

      <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-medium tracking-[-0.02em] text-gold-gradient">
        System Interfaces
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {images.map((image, index) => (
          <GalleryItem
            key={`${image.caption}-${index}`}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}