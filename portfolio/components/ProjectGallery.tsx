"use client";
import { createPortal } from "react-dom";
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
  compact?: boolean;
};

export default function ProjectGallery({
  images,
  compact = false,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isExpanded, setIsExpanded] =
    useState(false);

  const [failedImages, setFailedImages] =
    useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
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

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

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

  const markImageAsFailed = (
    index: number,
  ) => {
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

  const openExpandedView = () => {
    setIsExpanded(true);
  };

  return (
    <section
      dir="ltr"
      className={
        compact
          ? "min-w-0"
          : "mt-12 border-t border-brand-border pt-10"
      }
    >
      {/* Image counter */}
      <div className="flex justify-end">
        <p className="text-sm text-text-secondary">
          {activeIndex + 1} /{" "}
          {images.length}
        </p>
      </div>

      {/* Main gallery preview */}
      <div
        className={`mx-auto overflow-hidden rounded-2xl border border-brand-border bg-surface/30 ${
          compact
            ? "mt-6 w-full"
            : "mt-8 max-w-4xl"
        }`}
      >
        {/* Browser-style bar */}
        <div className="flex h-12 items-center justify-between border-b border-brand-border bg-background/40 px-5">
          <div
            aria-hidden="true"
            className="flex items-center gap-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-gold/40" />

            <span className="h-2.5 w-2.5 rounded-full bg-gold/20" />
          </div>

          <p
            dir="auto"
            className="max-w-[60%] truncate text-xs font-medium uppercase tracking-[0.18em] text-gold-light"
          >
            {activeImage.caption}
          </p>

          <Maximize2
            aria-hidden="true"
            className="h-4 w-4 text-text-secondary"
          />
        </div>

        {/* Clickable preview */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Open ${activeImage.caption}`}
          onClick={openExpandedView}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              event.preventDefault();
              openExpandedView();
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
                markImageAsFailed(
                  activeIndex,
                )
              }
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-text-secondary">
                Image coming soon
              </p>
            </div>
          )}

          {/* View details */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              openExpandedView();
            }}
            aria-label={`View details for ${activeImage.caption}`}
            className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/90 px-4 py-2 text-xs text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background sm:opacity-0 sm:group-hover:opacity-100"
          >
            <Maximize2 className="h-3.5 w-3.5" />

            View details
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Show previous interface"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/80 text-gold backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Show next interface"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/80 text-gold backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

    {/* Expanded gallery dialog */}
{isExpanded &&
  createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-dialog-title"
      onClick={() => setIsExpanded(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/65 p-4 backdrop-blur-md sm:p-6"
    >
      <div
        dir="ltr"
        onClick={(event) =>
          event.stopPropagation()
        }
        className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-gold/30 bg-surface shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() =>
            setIsExpanded(false)
          }
          aria-label="Close image preview"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background/90 text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image area */}
        <div className="relative h-[52dvh] min-h-[280px] max-h-[560px] w-full shrink-0 overflow-hidden bg-background/35">
          {!activeImageFailed ? (
            <Image
              key={`expanded-${activeImage.src}-${activeIndex}`}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(min-width: 1280px) 1024px, 100vw"
              className="object-contain"
              onError={() =>
                markImageAsFailed(
                  activeIndex,
                )
              }
            />
          ) : (
            <div className="flex h-full items-center justify-center px-8 text-center">
              <div>
                <p
                  dir="auto"
                  className="font-[var(--font-heading)] text-3xl font-medium text-gold-light sm:text-4xl"
                >
                  {activeImage.caption}
                </p>

                <p className="mt-3 text-sm text-text-secondary">
                  Image coming soon
                </p>
              </div>
            </div>
          )}

          {/* Previous image */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Show previous interface"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/85 text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Next image */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Show next interface"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/85 text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Interface information */}
        <div className="shrink-0 border-t border-brand-border bg-surface-light/20 px-6 py-4 sm:flex sm:items-start sm:justify-between sm:gap-8 sm:px-8 sm:py-5">
          <div
            dir="auto"
            className="min-w-0"
          >
            <h3
              id="gallery-dialog-title"
              className="font-[var(--font-heading)] text-xl font-semibold text-foreground sm:text-2xl"
            >
              {activeImage.caption}
            </h3>

            <p className="mt-1.5 max-w-3xl text-sm leading-6 text-text-secondary">
              {activeImage.description ||
                activeImage.alt}
            </p>
          </div>

          <span className="mt-3 inline-flex shrink-0 rounded-full border border-brand-border bg-background/30 px-3 py-1.5 text-xs text-gold-light sm:mt-0">
            {activeIndex + 1} /{" "}
            {images.length}
          </span>
        </div>
      </div>
    </div>,
    document.body,
  )}
    </section>
  );
}