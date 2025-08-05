import { TrendingUp, Mail, Briefcase } from 'lucide-react';
import { StatCard } from '@/components/ui/StatCard';
import { Email, JobApplication, CryptoAsset } from '@/types/dashboard';

interface PortfolioSummaryProps {
    emails: Email[];
    jobs: JobApplication[];
    crypto: CryptoAsset[];
}

export function PortfolioSummary({ emails, jobs, crypto }: PortfolioSummaryProps) {
    const totalPortfolioValue = crypto.reduce((sum, asset) => sum + asset.value, 0);
    const portfolioChange24h = crypto.reduce((sum, asset) => sum + (asset.value * asset.change24h / 100), 0);
    const unreadEmails = emails.filter(e => e.unread).length;
    const activeApplications = jobs.filter(j => j.status === 'applied' || j.status === 'interviewing').length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
                title="Portfolio Value"
                value={`$${totalPortfolioValue.toLocaleString()}`}
                icon={TrendingUp}
                subtitle={`${portfolioChange24h >= 0 ? '+' : ''}${portfolioChange24h.toFixed(2)} (24h)`}
                className="text-green-500"
                iconClassName="text-green-500"
            />
            <StatCard
                title="Unread Emails"
                value={unreadEmails}
                icon={Mail}
            />
            <StatCard
                title="Active Applications"
                value={activeApplications}
                icon={Briefcase}
            />
        </div>
    );
} 