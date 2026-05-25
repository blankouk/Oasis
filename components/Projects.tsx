import { projects } from '@/lib/projects';
import { FeaturedCard, PlaceholderCard } from './ProjectCard';

export default function Projects() {
  const live = projects.filter((p) => p.status === 'live' || p.status === 'in-dev');
  const comingSoon = projects.filter((p) => p.status === 'coming-soon');

  return (
    <section id="work" className="relative w-full overflow-hidden bg-oasis-bg" style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
      <div aria-hidden className="pointer-events-none absolute right-[-6%] top-[8%] hidden h-[22vw] w-[22vw] max-h-[300px] max-w-[300px] rounded-full bg-oasis-accent opacity-[0.07] lg:block" />
      <div aria-hidden className="pointer-events-none absolute left-[-5%] bottom-[12%] hidden h-[14vw] w-[14vw] max-h-[180px] max-w-[180px] rounded-full bg-oasis-accent opacity-[0.10] lg:block" />
      {/* Left margin hint — desktop only */}
      <div aria-hidden className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex xl:left-8">
        <div className="h-16 w-px bg-oasis-accent opacity-30" />
        <div
          className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-oasis-accent opacity-60"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Click to view live sites
        </div>
        <div className="h-16 w-px bg-oasis-accent opacity-30" />
        <span className="text-[14px] text-oasis-accent opacity-50">↓</span>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <div className="mb-8 flex items-end justify-between lg:mb-12">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-oasis-hint">Selected work</p>
            <h2 className="font-serif text-[34px] font-normal tracking-[-0.02em] sm:text-[44px] lg:text-[58px]">
              What we've built
            </h2>
          </div>
          <span className="hidden text-[13px] text-oasis-hint sm:block">2025 — 2026</span>
        </div>

        {live.map((p) => (
          <FeaturedCard key={p.id} project={p} />
        ))}

        {comingSoon.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
            {comingSoon.map((p) => (
              <PlaceholderCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
