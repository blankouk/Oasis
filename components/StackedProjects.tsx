'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/lib/projects';
import { FeaturedCard } from './ProjectCard';

type Props = { projects: Project[] };

export function StackedProjects({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [vh, setVh] = useState(800);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      setIsDesktop(mq.matches);
      setVh(window.innerHeight);
    };
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScroll = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = totalScroll > 0 ? Math.max(0, Math.min(1, scrolled / totalScroll)) : 0;
      setProgress(p);
    };

    const onResize = () => {
      setVh(window.innerHeight);
      onScroll();
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [isDesktop]);

  // Mobile: plain stack
  if (!isDesktop) {
    return (
      <div className="space-y-4">
        {projects.map((p) => (
          <FeaturedCard key={p.id} project={p} />
        ))}
      </div>
    );
  }

  const n = projects.length;
  // Container is (n) * 100vh tall. Inner sticky is 100vh. Sticky range = (n-1) * 100vh.
  // Each card transition takes 1/(n-1) of progress.

  return (
    <div ref={containerRef} className="relative" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {projects.map((p, i) => {
          // Card 0 is always at rest. Subsequent cards slide in based on progress.
          const enter =
            i === 0
              ? 1
              : Math.max(0, Math.min(1, progress * (n - 1) - (i - 1)));

          // Rest top position: each card peeks 20px below the previous
          const restTop = 80 + i * 20;

          // Slide from below viewport (vh px) to 0
          const slide = (1 - enter) * vh;

          return (
            <div
              key={p.id}
              className="absolute inset-x-0 will-change-transform"
              style={{
                top: `${restTop}px`,
                transform: `translateY(${slide}px)`,
                zIndex: i + 1,
              }}
            >
              <FeaturedCard project={p} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
