'use client';

import { useState } from 'react';
import type { Project } from '@/lib/projects';
import { FeaturedCard, PlaceholderCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

type Props = {
  live: Project[];
  comingSoon: Project[];
};

export function ProjectsClient({ live, comingSoon }: Props) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="space-y-4 lg:space-y-5">
        {live.map((p) => (
          <FeaturedCard key={p.id} project={p} onCaseStudy={() => setSelected(p)} />
        ))}
      </div>

      {comingSoon.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16 lg:gap-5">
          {comingSoon.map((p) => (
            <PlaceholderCard key={p.id} project={p} />
          ))}
        </div>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
