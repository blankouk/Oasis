import { projects } from '@/lib/projects';
import { ProjectsClient } from './ProjectsClient';

export default function Projects() {
  const live = projects.filter((p) => p.status === 'live' || p.status === 'in-dev');
  const comingSoon = projects.filter((p) => p.status === 'coming-soon');

  return (
    <section id="work" className="relative w-full bg-oasis-bg" style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
      <div aria-hidden className="pointer-events-none absolute right-[-6%] top-[4%] hidden h-[22vw] w-[22vw] max-h-[300px] max-w-[300px] rounded-full bg-oasis-accent animate-blob-strong lg:block" />
      <div aria-hidden className="pointer-events-none absolute left-[-5%] top-[18%] hidden h-[14vw] w-[14vw] max-h-[180px] max-w-[180px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '3s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[-4%] bottom-[8%] hidden h-[18vw] w-[18vw] max-h-[240px] max-w-[240px] rounded-full bg-oasis-accent animate-blob-strong lg:block" style={{ animationDelay: '6s' }} />
      <div aria-hidden className="pointer-events-none absolute right-[-3%] bottom-[28%] hidden h-[12vw] w-[12vw] max-h-[160px] max-w-[160px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '4.5s' }} />
      <div aria-hidden className="pointer-events-none absolute right-[8%] top-[42%] hidden h-[6vw] w-[6vw] max-h-[70px] max-w-[70px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '5s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[6%] top-[45%] hidden h-[5vw] w-[5vw] max-h-[60px] max-w-[60px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '1.5s' }} />
      <div aria-hidden className="pointer-events-none absolute right-[12%] bottom-[8%] hidden h-[4vw] w-[4vw] max-h-[50px] max-w-[50px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '7s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[10%] bottom-[40%] hidden h-[5vw] w-[5vw] max-h-[55px] max-w-[55px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '2.5s' }} />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <div className="mb-8 flex items-end justify-between lg:mb-12">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-oasis-hint">Selected work</p>
            <h2 className="font-serif text-[34px] font-normal tracking-[-0.02em] sm:text-[44px] lg:text-[58px]">
              What we've built
            </h2>
            <p className="mt-3 text-[13px] text-oasis-muted lg:text-[14px]">Personal projects & concepts — demonstrating what we can build for you.</p>
          </div>
          <span className="hidden text-[13px] text-oasis-hint sm:block">2025 — 2026</span>
        </div>

        <ProjectsClient live={live} comingSoon={comingSoon} />
      </div>
    </section>
  );
}
