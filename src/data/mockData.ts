import {
	Email,
	GitHubRepo,
	JobApplication,
	CryptoAsset,
} from '@/types/dashboard';

export const mockEmails: Email[] = [
	{
		id: '1',
		from: 'GitHub',
		subject: 'Security alert for your account',
		preview: 'We detected unusual activity...',
		date: '2h ago',
		unread: true,
	},
	{
		id: '2',
		from: 'LinkedIn',
		subject: 'New job opportunities for you',
		preview: 'Based on your profile, here are...',
		date: '4h ago',
		unread: true,
	},
	{
		id: '3',
		from: 'Coinbase',
		subject: 'Your portfolio update',
		preview: 'Your portfolio has changed by...',
		date: '6h ago',
		unread: false,
	},
	{
		id: '4',
		from: 'Netflix',
		subject: 'New shows added to your list',
		preview: 'Check out these new releases...',
		date: '1d ago',
		unread: false,
	},
];

export const mockRepos: GitHubRepo[] = [
	{
		id: '1',
		name: 'my-dashboard',
		description: 'Personal dashboard with emails, repos, jobs, and crypto',
		language: 'TypeScript',
		stars: 12,
		forks: 3,
		updated: '2 days ago',
		url: 'https://github.com/username/my-dashboard',
	},
	{
		id: '2',
		name: 'portfolio-site',
		description: 'My personal portfolio website',
		language: 'React',
		stars: 8,
		forks: 2,
		updated: '1 week ago',
		url: 'https://github.com/username/portfolio-site',
	},
	{
		id: '3',
		name: 'trading-bot',
		description: 'Automated crypto trading bot',
		language: 'Python',
		stars: 25,
		forks: 7,
		updated: '3 days ago',
		url: 'https://github.com/username/trading-bot',
	},
];

export const mockJobs: JobApplication[] = [
	{
		id: '1',
		company: 'Tech Corp',
		position: 'Senior Frontend Developer',
		status: 'interviewing',
		dateApplied: '2024-01-15',
		lastContact: '2024-01-20',
		notes: 'Second interview scheduled for next week',
	},
	{
		id: '2',
		company: 'Startup Inc',
		position: 'Full Stack Engineer',
		status: 'applied',
		dateApplied: '2024-01-18',
		lastContact: '2024-01-18',
		notes: 'Waiting for response',
	},
	{
		id: '3',
		company: 'Big Tech',
		position: 'Software Engineer',
		status: 'rejected',
		dateApplied: '2024-01-10',
		lastContact: '2024-01-15',
		notes: 'Position filled internally',
	},
];

export const mockCrypto: CryptoAsset[] = [
	{
		id: '1',
		symbol: 'BTC',
		name: 'Bitcoin',
		price: 43250.5,
		change24h: 2.3,
		balance: 0.5,
		value: 21625.25,
	},
	{
		id: '2',
		symbol: 'ETH',
		name: 'Ethereum',
		price: 2650.75,
		change24h: -1.2,
		balance: 3.2,
		value: 8482.4,
	},
	{
		id: '3',
		symbol: 'SOL',
		name: 'Solana',
		price: 98.25,
		change24h: 5.7,
		balance: 25.0,
		value: 2456.25,
	},
];
