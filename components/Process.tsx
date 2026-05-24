const steps = [
  { num: '01', title: 'Chat',   desc: 'Tell me about your idea, goals, and budget. No commitment needed.' },
  { num: '02', title: 'Plan',   desc: 'I send a clear quote, timeline, and scope. No surprises.' },
  { num: '03', title: 'Build',  desc: 'I build it, you see progress every week.' },
  { num: '04', title: 'Launch', desc: 'Ship live, plus 14 days of fixes included.' },
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-oasis-bg" style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-oasis-hint">How it works</p>
        <h2 className="mb-10 font-serif text-[34px] font-normal tracking-[-0.02em] sm:text-[44px] lg:mb-14 lg:text-[58px]">
          Simple{' '}
          <span className="italic text-oasis-accent">process</span>,{' '}
          real results.
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl bg-white p-5 lg:p-7"
              style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-oasis-accent text-[12px] font-medium text-white lg:mb-5 lg:h-11 lg:w-11 lg:text-[13px]">
                {s.num}
              </div>
              <div className="mb-2 text-[14px] font-medium lg:text-[16px]">{s.title}</div>
              <div className="text-[12px] leading-relaxed text-oasis-muted lg:text-[13px]">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
