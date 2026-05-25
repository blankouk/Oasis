'use client';

import { useState } from 'react';

type Props = {
  images: Array<{ src: string; alt?: string }>;
  title: string;
};

export function MediaCarousel({ images, title }: Props) {
  const [idx, setIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="relative select-none" style={{ aspectRatio: '16/10' }}>
      <img
        key={images[idx].src}
        src={images[idx].src}
        alt={images[idx].alt ?? title}
        className="absolute inset-0 h-full w-full animate-[fadeIn_0.35s_ease-out] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ objectFit: 'cover', display: 'block' }}
      />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-oasis-ink opacity-70 shadow-sm backdrop-blur-sm transition-all duration-200 ease-out hover:scale-110 hover:bg-white hover:opacity-100 hover:shadow-md lg:h-9 lg:w-9"
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-oasis-ink opacity-70 shadow-sm backdrop-blur-sm transition-all duration-200 ease-out hover:scale-110 hover:bg-white hover:opacity-100 hover:shadow-md lg:h-9 lg:w-9"
        aria-label="Next image"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setIdx(i); }}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              i === idx ? 'w-3 bg-oasis-ink' : 'bg-oasis-ink/30'
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
