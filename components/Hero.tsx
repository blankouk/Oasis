export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-oasis-bg">
      {/* Decorative blobs — % based so they scale at any viewport */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] top-[5%] h-[45vw] w-[45vw] max-h-[520px] max-w-[520px] rounded-full bg-oasis-accent animate-blob-strong"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[14%] top-[55%] h-[16vw] w-[16vw] max-h-[180px] max-w-[180px] rounded-full bg-oasis-accent animate-blob-strong"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-[12%] hidden h-[22vw] w-[22vw] max-h-[280px] max-w-[280px] rounded-full bg-oasis-accent animate-blob lg:block"
        style={{ animationDelay: '4s' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[42%] top-[8%] hidden h-[7vw] w-[7vw] max-h-[90px] max-w-[90px] rounded-full bg-oasis-accent animate-blob lg:block"
        style={{ animationDelay: '1s' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[35%] bottom-[8%] hidden h-[5vw] w-[5vw] max-h-[60px] max-w-[60px] rounded-full bg-oasis-accent animate-blob lg:block"
        style={{ animationDelay: '6s' }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-32 lg:pt-28">
        {/* Available pill */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12px] text-oasis-muted sm:mb-8 lg:mb-10 lg:text-[13px]"
          style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-oasis-success animate-live-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-oasis-success" />
          </span>
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-[20ch] font-serif text-[42px] font-normal leading-[1.05] tracking-[-0.03em] text-oasis-ink sm:mb-7 sm:text-[58px] lg:mb-8 lg:text-[80px]">
          Web things,{' '}
          <span className="italic text-oasis-accent">crafted</span>{' '}
          with care.
        </h1>

        {/* Subtext */}
        <p className="mb-8 max-w-[480px] text-[15px] leading-relaxed text-oasis-muted sm:mb-10 sm:text-[16px] lg:mb-12 lg:max-w-[520px] lg:text-[18px]">
          Independent dev studio building modern web apps, landing pages and MVPs.
          Run by Artem and Daniil — students and builders.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-oasis-ink px-6 py-3 text-[14px] font-medium text-oasis-bg transition-all duration-200 ease-out hover:opacity-85 hover:shadow-lg lg:px-8 lg:py-4 lg:text-[15px]"
          >
            Start a project
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#work"
            className="rounded-xl px-6 py-3 text-[14px] text-oasis-ink transition-colors duration-200 hover:bg-oasis-chip lg:px-8 lg:py-4 lg:text-[15px]"
            style={{ border: '0.5px solid rgba(0,0,0,0.15)' }}
          >
            See work
          </a>
        </div>
      </div>
    </section>
  );
}
