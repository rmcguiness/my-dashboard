'use client';

import { useState } from 'react';
import { DashboardHeader } from './_components/DashboardHeader';
import { PortfolioSummary } from './_components/PortfolioSummary';
import { EmailSection } from './_components/EmailSection';
import { GitHubSection } from './_components/GitHubSection';
import { JobSection } from './_components/JobSection';
import { CryptoSection } from './_components/CryptoSection';
import { DraggableSection } from '../components/ui/DraggableSection';
import { useDragAndDrop, DraggableSection as DraggableSectionType } from '../hooks/useDragAndDrop';
import { Email, GitHubRepo, JobApplication, CryptoAsset } from '@/types/dashboard';
import { mockEmails, mockRepos, mockJobs, mockCrypto } from '@/data/mockData';

export default function Dashboard() {
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [repos, setRepos] = useState<GitHubRepo[]>(mockRepos);
  const [jobs, setJobs] = useState<JobApplication[]>(mockJobs);
  const [crypto, setCrypto] = useState<CryptoAsset[]>(mockCrypto);
  const [loading, setLoading] = useState(false);

  const initialSections: DraggableSectionType[] = [
    {
      id: 'email',
      component: EmailSection,
      props: { emails },
    },
    {
      id: 'github',
      component: GitHubSection,
      props: { repos },
    },
    {
      id: 'jobs',
      component: JobSection,
      props: { jobs },
    },
    {
      id: 'crypto',
      component: CryptoSection,
      props: { crypto },
    },
  ];

  const {
    sections,
    draggedIndex,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  } = useDragAndDrop(initialSections);

  const refreshData = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader onRefresh={refreshData} loading={loading} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PortfolioSummary emails={emails} jobs={jobs} crypto={crypto} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Component = section.component;
            return (
              <DraggableSection
                key={section.id}
                id={section.id}
                isDragging={draggedIndex === index}
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
                onDragEnd={handleDragEnd}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Component {...(section.props as any)} />
              </DraggableSection>
            );
          })}
        </div>
      </main>
    </div>
  );
}