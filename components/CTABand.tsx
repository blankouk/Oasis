'use client';

const team = [
  {
    name: 'Artem',
    role: 'Builder · Math & Stats',
    bio: 'Sweats the details (probably too much).',
    photo: '/artem.jpg',
    initials: 'A',
  },
  {
    name: 'Daniil',
    role: 'Builder · Fullstack',
    bio: 'Ships fast, breaks little.',
    photo: '/daniil.jpg',
    initials: 'D',
  },
];

export default function CTABand() {
  return (
    <section className="relative w-full overflow-hidden bg-oasis-accent">
      {/* Decorative circles — % based */}
      <div aria-hidden className="pointer-events-none absolute -bottom-[8%] right-[5%] h-[35vw] w-[35vw] max-h-[380px] max-w-[380px] rounded-full bg-white animate-blob-white" />
      <div aria-hidden className="pointer-events-none absolute right-[28%] top-[-20%] h-[20vw] w-[20vw] max-h-[200px] max-w-[200px] rounded-full bg-white animate-blob-white" style={{ animationDelay: '3s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[8%] top-[15%] hidden h-[12vw] w-[12vw] max-h-[140px] max-w-[140px] rounded-full bg-white animate-blob-white lg:block" style={{ animationDelay: '5s' }} />
      <div aria-hidden className="pointer-events-none absolute left-[42%] bottom-[20%] hidden h-[5vw] w-[5vw] max-h-[60px] max-w-[60px] rounded-full bg-white animate-blob-white lg:block" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Left: copy + CTA */}
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] opacity-80 lg:text-[12px]">
              ★ Student-run, fair priced
            </p>
            <h2 className="mb-4 max-w-[18ch] font-serif text-[30px] font-normal leading-[1.1] tracking-[-0.02em] sm:text-[38px] lg:mb-6 lg:text-[56px]">
              Big agency quality, small studio price.
            </h2>
            <p className="mb-8 max-w-[420px] text-[14px] leading-relaxed opacity-85 lg:mb-10 lg:max-w-[480px] lg:text-[16px]">
              Students by day, web builders by night. You get attention and care that agencies simply can&apos;t give.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-6 py-3 text-[14px] font-medium text-oasis-accent transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg lg:px-8 lg:py-4 lg:text-[15px]"
            >
              Start a project
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right: team cards */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/[0.08] p-4 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.12] lg:p-5"
              >
                {/* Avatar */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/15 lg:h-16 lg:w-16">
                  <span className="absolute inset-0 flex items-center justify-center font-serif text-[22px] lg:text-[26px]">
                    {member.initials}
                  </span>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="relative h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <div className="text-[15px] font-medium leading-tight lg:text-[16px]">
                    {member.name}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.08em] opacity-75 lg:text-[12px]">
                    {member.role}
                  </div>
                  <p className="mt-1.5 text-[12px] leading-snug opacity-80 lg:text-[13px]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
