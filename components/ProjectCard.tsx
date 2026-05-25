import type { Project } from '@/lib/projects';
import { MediaCarousel } from './MediaCarousel';

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'live')
    return (
      <span className="rounded-[4px] bg-oasis-accent-soft px-2.5 py-1 text-[11px] font-medium text-oasis-accent">
        ● Live
      </span>
    );
  if (status === 'in-dev')
    return (
      <span className="rounded-[4px] bg-oasis-chip px-2.5 py-1 text-[11px] text-oasis-muted">
        In dev
      </span>
    );
  return null;
}

export function FeaturedCard({
  project,
  onCaseStudy,
}: {
  project: Project;
  onCaseStudy?: () => void;
}) {
  const media = project.media;

  return (
    <div
      className="block overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
      style={{
        border: '0.5px solid rgba(0,0,0,0.08)',
        cursor: onCaseStudy ? 'pointer' : 'default',
      }}
      onClick={onCaseStudy}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: image */}
        <div className="flex items-stretch bg-oasis-chip p-4 lg:rounded-l-2xl lg:p-5">
          <div
            className="w-full overflow-hidden rounded-xl"
            style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.06) inset' }}
          >
            {project.gallery && project.gallery.length > 0 ? (
              <MediaCarousel images={project.gallery} title={project.title} />
            ) : media?.type === 'video' ? (
              <video src={media.src} autoPlay muted loop playsInline className="w-full" style={{ display: 'block' }} />
            ) : media?.type === 'image' ? (
              <img src={media.src} alt={media.alt ?? project.title} className="w-full" style={{ display: 'block' }} />
            ) : (
              <div className="flex h-full min-h-[200px] items-center justify-center">
                <span className="font-serif text-[38px] tracking-[-0.02em] text-oasis-accent">
                  {project.title.toLowerCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: info */}
        <div className="flex flex-col justify-center p-6 lg:p-10">
          <div className="mb-3 flex items-center gap-2.5">
            <StatusBadge status={project.status} />
            <span className="text-[12px] text-oasis-hint">{project.category}</span>
          </div>
          <div className="mb-2 text-[20px] font-medium lg:text-[24px]">{project.title}</div>
          <div className="mb-5 text-[14px] leading-relaxed text-oasis-muted lg:text-[15px]">
            {project.description}
          </div>
          {project.stack.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-md bg-oasis-chip px-3 py-1 text-[12px] text-oasis-muted">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {onCaseStudy && (
              <span className="inline-flex items-center rounded-xl bg-oasis-ink px-5 py-2.5 text-[13px] font-medium text-oasis-bg transition-opacity hover:opacity-80 lg:text-[14px]">
                Case study →
              </span>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center rounded-xl border border-oasis-ink/20 px-5 py-2.5 text-[13px] font-medium text-oasis-ink transition-colors hover:bg-oasis-chip lg:text-[14px]"
              >
                Visit site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderCard({ project }: { project: Project }) {
  return (
    <div
      className="overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-sm"
      style={{ border: '0.5px dashed rgba(0,0,0,0.15)' }}
    >
      <div className="relative flex h-[130px] items-center justify-center bg-oasis-chip lg:h-[160px]">
        <span className="text-[28px] lg:text-[36px]">{project.placeholderEmoji}</span>
        <span className="absolute bottom-2 right-3 text-[10px] text-oasis-hint">photo / video</span>
      </div>
      <div className="p-5 lg:p-6">
        <div className="mb-1.5 text-[10px] uppercase tracking-[0.1em] text-oasis-hint">Coming soon</div>
        <div className="mb-1 text-[15px] font-medium lg:text-[17px]">{project.title}</div>
        <div className="text-[13px] leading-relaxed text-oasis-muted">{project.description}</div>
      </div>
    </div>
  );
}
