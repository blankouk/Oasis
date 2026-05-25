'use client';

import { useEffect, useState } from 'react';
import type { Project } from '@/lib/projects';
import { MediaCarousel } from './MediaCarousel';

type Props = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 260);
  }

  const media = project.media;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      style={{
        background: visible ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0)',
        backdropFilter: 'blur(4px)',
        transition: 'background 0.26s ease',
      }}
      onClick={handleClose}
    >
      <div
        className="relative flex w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-[800px] sm:rounded-3xl"
        style={{
          maxHeight: '92vh',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(48px) scale(0.97)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.26s cubic-bezier(0.32,0.72,0,1), opacity 0.26s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex shrink-0 items-center justify-between px-6 py-4"
          style={{ borderBottom: '0.5px solid rgba(0,0,0,0.07)' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] uppercase tracking-[0.1em] text-oasis-hint">{project.category}</span>
          </div>
          <button
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-oasis-chip text-[18px] leading-none text-oasis-muted transition-all duration-200 ease-out hover:rotate-90 hover:bg-oasis-ink hover:text-white"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          {/* Image */}
          {(project.gallery && project.gallery.length > 0) ? (
            <MediaCarousel images={project.gallery} title={project.title} />
          ) : media?.type === 'image' ? (
            <div className="bg-oasis-chip">
              <img
                src={media.src}
                alt={media.alt ?? project.title}
                className="w-full"
                style={{ display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>
          ) : media?.type === 'video' ? (
            <video src={media.src} autoPlay muted loop playsInline className="w-full" style={{ display: 'block' }} />
          ) : null}

          {/* Content */}
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            {/* Title + description */}
            <h2 className="mb-3 font-serif text-[32px] font-normal tracking-[-0.02em] sm:text-[40px]">
              {project.title}
            </h2>
            <p className="mb-8 max-w-[560px] text-[15px] leading-relaxed text-oasis-muted sm:text-[16px]">
              {project.description}
            </p>

            {/* Case study cards */}
            {project.caseStudy && (
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: 'The brief', text: project.caseStudy.brief },
                  { label: 'The build', text: project.caseStudy.build },
                  { label: 'The result', text: project.caseStudy.result },
                ].map(({ label, text }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-oasis-bg p-5"
                    style={{ border: '0.5px solid rgba(0,0,0,0.07)' }}
                  >
                    <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-oasis-accent">
                      {label}
                    </div>
                    <p className="text-[13px] leading-relaxed text-oasis-muted">{text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Stack + CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {project.stack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-md bg-oasis-chip px-3 py-1 text-[12px] text-oasis-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-oasis-ink px-5 py-2.5 text-[13px] font-medium text-oasis-bg transition-all duration-200 ease-out hover:opacity-85 hover:shadow-md"
                >
                  Visit live site
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
