"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  description?: string;
  orientation?: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const [failedImages, setFailedImages] = useState<
    Set<number>
  >(new Set());

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0
            ? images.length - 1
            : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === images.length - 1
            ? 0
            : current + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isExpanded, images.length]);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  const activeImageFailed =
    !activeImage.src ||
    failedImages.has(activeIndex);

  const markImageAsFailed = (index: number) => {
    setFailedImages((current) => {
      const updated = new Set(current);

      updated.add(index);

      return updated;
    });
  };

  const showPreviousImage = () => {
    setActiveIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  };

  return (
    <section className="mt-16 border-t border-brand-border pt-12">
      {/* Gallery heading */}
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-[var(--font-heading)] text-3xl font-medium tracking-[-0.025em] text-gold-gradient sm:text-4xl">
          System Interfaces
        </h2>

        <p className="text-sm text-text-secondary">
          {activeIndex + 1} / {images.length}
        </p>
      </div>

      {/* Compact interface preview */}
      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-brand-border bg-surface shadow-xl">
        {/* Browser-style top bar */}
        <div className="flex h-12 items-center justify-between border-b border-brand-border bg-background/40 px-5">
          <div
            aria-hidden="true"
            className="flex items-center gap-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/20" />
          </div>

          <p className="max-w-[60%] truncate text-xs font-medium uppercase tracking-[0.18em] text-gold-light">
            {activeImage.caption}
          </p>

          <Maximize2
            aria-hidden="true"
            className="h-4 w-4 text-text-secondary"
          />
        </div>

        {/* Clickable image preview */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Open ${activeImage.caption}`}
          onClick={() => setIsExpanded(true)}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              setIsExpanded(true);
            }
          }}
          className="group relative aspect-video w-full cursor-zoom-in overflow-hidden bg-gradient-to-br from-surface-light via-surface to-background"
        >
          {!activeImageFailed ? (
            <Image
              key={`${activeImage.src}-${activeIndex}`}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              onError={() =>
                markImageAsFailed(activeIndex)
              }
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-text-secondary">
                Image coming soon
              </p>
            </div>
          )}

          {/* Expand hint */}
          <div className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/80 px-4 py-2 text-xs text-gold opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />

            View details
          </div>

          {/* Previous interface */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Show previous interface"
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/80 text-gold backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Next interface */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Show next interface"
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/80 text-gold backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Expanded image */}
      {isExpanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.caption} details`}
          onClick={() => setIsExpanded(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl sm:p-8"
        >
          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-brand-border bg-surface shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-background/90 text-gold shadow-lg backdrop-blur-md transition-colors hover:bg-gold hover:text-background"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Large interface image */}
            <div className="relative min-h-0 flex-1 overflow-hidden bg-background/40">
              <div className="relative mx-auto aspect-video h-full max-h-[68vh] w-full">
                {!activeImageFailed ? (
                  <Image
                    key={`expanded-${activeImage.src}-${activeIndex}`}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(min-width: 1280px) 1152px, 100vw"
                    className="object-contain"
                    onError={() =>
                      markImageAsFailed(activeIndex)
                    }
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-8 text-center">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                        Interface Preview
                      </p>

                      <p className="mt-5 font-[var(--font-heading)] text-4xl font-medium text-gold-gradient sm:text-5xl">
                        {activeImage.caption}
                      </p>

                      <p className="mt-4 text-sm text-text-secondary">
                        Image coming soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Previous expanded image */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Show previous interface"
                    className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/90 text-gold transition-colors hover:bg-gold hover:text-background"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                {/* Next expanded image */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Show next interface"
                    className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/90 text-gold transition-colors hover:bg-gold hover:text-background"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Interface details below image */}
            <div className="shrink-0 border-t border-brand-border px-6 py-5 sm:px-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                Interface Details
              </p>

              <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-medium text-gold-gradient">
                {activeImage.caption}
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-text-secondary">
                {activeImage.description ||
                  activeImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}