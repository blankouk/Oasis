export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-oasis-bg/85 backdrop-blur-md"
      style={{ borderBottom: '0.5px solid rgba(0,0,0,0.07)' }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 sm:px-10 sm:py-5 lg:px-16">
        <a href="/" className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-oasis-accent" />
          <span className="text-[16px] font-medium tracking-[-0.02em]">oasis</span>
        </a>
        <nav className="flex items-center gap-6 text-[13px] text-oasis-muted sm:gap-8 lg:gap-10 lg:text-[14px]">
          <a href="#work"     className="transition-colors hover:text-oasis-ink">Work</a>
          <a href="#services" className="transition-colors hover:text-oasis-ink">Services</a>
          <a href="#process"  className="hidden transition-colors hover:text-oasis-ink sm:block">Process</a>
          <a
            href="#contact"
            className="rounded-lg bg-oasis-ink px-4 py-2 text-[13px] font-medium text-oasis-bg transition-opacity hover:opacity-80"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
