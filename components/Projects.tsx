import { projects } from '@/lib/projects';
import { FeaturedCard, PlaceholderCard } from './ProjectCard';

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const placeholders = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="w-full bg-oasis-bg" style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
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

        {featured && <FeaturedCard project={featured} />}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
          {placeholders.map((p) => (
            <PlaceholderCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
