
import { Github, ExternalLink, Star, Eye } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CardHeader } from '@/components/ui/CardHeader';
import { GitHubRepo } from '@/types/dashboard';

interface GitHubSectionProps {
    repos: GitHubRepo[];
}

export function GitHubSection({ repos }: GitHubSectionProps) {
    return (
        <Card>
            <CardHeader title="GitHub Repositories" icon={Github} count={repos.length} countLabel="repos" />
            <div className="p-6">
                <div className="space-y-4">
                    {repos.map((repo) => (
                        <div key={repo.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium text-gray-900 dark:text-white">{repo.name}</p>
                                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                        </a>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{repo.description}</p>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                            {repo.language}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <Star className="w-3 h-3" />
                                            {repo.stars}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <Eye className="w-3 h-3" />
                                            {repo.forks}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">{repo.updated}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}