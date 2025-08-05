export interface Email {
	id: string;
	from: string;
	subject: string;
	preview: string;
	date: string;
	unread: boolean;
}

export interface GitHubRepo {
	id: string;
	name: string;
	description: string;
	language: string;
	stars: number;
	forks: number;
	updated: string;
	url: string;
}

export interface JobApplication {
	id: string;
	company: string;
	position: string;
	status: 'applied' | 'interviewing' | 'rejected' | 'accepted';
	dateApplied: string;
	lastContact: string;
	notes: string;
}

export interface CryptoAsset {
	id: string;
	symbol: string;
	name: string;
	price: number;
	change24h: number;
	balance: number;
	value: number;
}
