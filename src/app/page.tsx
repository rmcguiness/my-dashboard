'use client';

import { useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { PortfolioSummary } from './components/PortfolioSummary';
import { EmailSection } from './components/EmailSection';
import { GitHubSection } from './components/GithubSection';
import { JobSection } from './components/JobSection';
import { CryptoSection } from './components/CryptoSection';
import { Email, GitHubRepo, JobApplication, CryptoAsset } from '@/types/dashboard';
import { mockEmails, mockRepos, mockJobs, mockCrypto } from '@/data/mockData';

export default function Dashboard() {
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [repos, setRepos] = useState<GitHubRepo[]>(mockRepos);
  const [jobs, setJobs] = useState<JobApplication[]>(mockJobs);
  const [crypto, setCrypto] = useState<CryptoAsset[]>(mockCrypto);
  const [loading, setLoading] = useState(false);

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
          <EmailSection emails={emails} />
          <GitHubSection repos={repos} />
          <JobSection jobs={jobs} />
          <CryptoSection crypto={crypto} />
        </div>
      </main>
    </div>
  );
}