const services = [
  {
    name: 'Landing page',
    price: 'from £400',
    priceColor: true,
    description: '1–3 sections, responsive, fast. Perfect for showcasing a product or idea.',
    popular: false,
  },
  {
    name: 'Web app / MVP',
    price: 'from £1,200',
    priceColor: true,
    description: 'Full-stack with auth, database, and deploy. Ship your idea fast.',
    popular: true,
  },
  {
    name: 'Custom',
    price: "Let's talk",
    priceColor: false,
    description: 'Ongoing retainer, complex builds, or something that doesn\'t fit a box.',
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-white" style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
      <div aria-hidden className="pointer-events-none absolute left-[-7%] top-[15%] hidden h-[20vw] w-[20vw] max-h-[260px] max-w-[260px] rounded-full bg-oasis-accent animate-blob-strong lg:block" />
      <div aria-hidden className="pointer-events-none absolute right-[-4%] bottom-[10%] hidden h-[12vw] w-[12vw] max-h-[150px] max-w-[150px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '4s' }} />
      <div aria-hidden className="pointer-events-none absolute right-[12%] top-[18%] hidden h-[6vw] w-[6vw] max-h-[70px] max-w-[70px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '2s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[18%] bottom-[18%] hidden h-[4vw] w-[4vw] max-h-[50px] max-w-[50px] rounded-full bg-oasis-accent animate-blob lg:block" style={{ animationDelay: '6.5s' }} />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-oasis-hint">Services</p>
        <h2 className="mb-10 font-serif text-[34px] font-normal tracking-[-0.02em] sm:text-[44px] lg:mb-14 lg:text-[58px]">
          What I can do for you
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg lg:p-8 ${s.popular ? 'bg-oasis-accent-tint' : 'bg-oasis-bg'}`}
              style={{
                border: s.popular ? '1.5px solid #FF6B35' : '0.5px solid rgba(0,0,0,0.08)',
              }}
            >
              {s.popular && (
                <span className="absolute -top-3 right-5 rounded-full bg-oasis-accent px-3 py-1 text-[10px] font-medium tracking-[0.05em] text-white">
                  POPULAR
                </span>
              )}
              <div className="mb-2 text-[14px] font-medium lg:text-[16px]">{s.name}</div>
              <div
                className={`mb-4 font-serif text-[28px] font-normal tracking-[-0.01em] lg:text-[34px] ${
                  s.priceColor ? 'text-oasis-accent' : 'text-oasis-ink'
                }`}
              >
                {s.price}
              </div>
              <div className="mt-auto text-[13px] leading-relaxed text-oasis-muted lg:text-[14px]">
                {s.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
