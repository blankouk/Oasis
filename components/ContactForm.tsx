'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const fieldClass =
    'w-full rounded-xl bg-white px-4 py-3 text-[14px] text-oasis-ink placeholder:text-[#B0ADA6] transition-shadow focus:outline-none focus:ring-2 focus:ring-oasis-accent/30 lg:py-4 lg:text-[15px]';
  const fieldStyle = { border: '0.5px solid rgba(0,0,0,0.1)' };

  return (
    <section id="contact" className="w-full bg-white" style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
        {/* Two-column on desktop: heading left, form right */}
        <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left */}
          <div className="mb-10 lg:mb-0 lg:pt-2">
            <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-oasis-hint">Contact</p>
            <h2 className="mb-4 font-serif text-[30px] font-normal tracking-[-0.02em] sm:text-[36px] lg:text-[48px]">
              Got an idea?
            </h2>
            <p className="max-w-[320px] text-[15px] leading-relaxed text-oasis-muted lg:text-[16px]">
              Drop a line — I usually reply within a day. No sales pitch, just a real conversation.
            </p>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 lg:gap-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClass} style={fieldStyle} />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" required placeholder="Email address" className={fieldClass} style={fieldStyle} />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="sr-only">Project type</label>
              <select id="type" name="type" className={fieldClass} style={fieldStyle}>
                <option value="" disabled selected>Project type</option>
                <option value="Landing page">Landing page</option>
                <option value="Web app">Web app</option>
                <option value="Not sure yet">Not sure yet</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="sr-only">Project description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Tell me about your project, timeline, and budget..."
                className={`${fieldClass} resize-none`}
                style={fieldStyle}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-oasis-accent px-6 py-3 text-[14px] font-medium text-white transition-all duration-200 ease-out hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none lg:px-8 lg:py-4 lg:text-[15px]"
              >
                {status === 'loading' ? (
                  'Sending…'
                ) : (
                  <>
                    Send enquiry
                    <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-[13px] text-oasis-success">Sent! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-[13px] text-red-500">Something went wrong — try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
