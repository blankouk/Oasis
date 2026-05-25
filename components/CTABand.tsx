export default function CTABand() {
  return (
    <section className="relative w-full overflow-hidden bg-oasis-accent">
      {/* Decorative circles — % based */}
      <div aria-hidden className="pointer-events-none absolute -bottom-[8%] right-[5%] h-[35vw] w-[35vw] max-h-[380px] max-w-[380px] rounded-full bg-white opacity-[0.06]" />
      <div aria-hidden className="pointer-events-none absolute right-[28%] top-[-20%] h-[20vw] w-[20vw] max-h-[200px] max-w-[200px] rounded-full bg-white opacity-[0.08]" />

      <div className="mx-auto max-w-[1200px] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] opacity-80 lg:text-[12px]">
          ★ Student-run, fair priced
        </p>
        <h2 className="mb-4 max-w-[18ch] font-serif text-[30px] font-normal leading-[1.1] tracking-[-0.02em] sm:text-[38px] lg:mb-6 lg:text-[56px]">
          Big agency quality, small studio price.
        </h2>
        <p className="mb-8 max-w-[420px] text-[14px] leading-relaxed opacity-85 lg:mb-10 lg:max-w-[480px] lg:text-[16px]">
          Math &amp; Stats student by day, web builder by night. You get attention and care that agencies simply can't give.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-6 py-3 text-[14px] font-medium text-oasis-accent transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 lg:px-8 lg:py-4 lg:text-[15px]"
        >
          Start a project
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
