export default function Footer() {
  return (
    <footer className="w-full bg-oasis-bg" style={{ borderTop: '0.5px solid rgba(0,0,0,0.07)' }}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-[12px] text-oasis-hint sm:px-10 lg:px-16 lg:py-8 lg:text-[13px]">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-oasis-accent opacity-70" />
          <span>© 2026 Oasis Studio</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="transition-colors hover:text-oasis-ink">LinkedIn</a>
          <a href="#" className="transition-colors hover:text-oasis-ink">YouTube</a>
          <a href="mailto:hello@oasis.studio" className="transition-colors hover:text-oasis-ink">hello@oasis.studio</a>
        </div>
      </div>
    </footer>
  );
}
