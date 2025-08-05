'use client';

import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface DashboardHeaderProps {
    onRefresh: () => void;
    loading: boolean;
}

export function DashboardHeader({ onRefresh, loading }: DashboardHeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        My Dashboard
                    </h1>
                    <Button
                        onClick={onRefresh}
                        disabled={loading}
                        icon={RefreshCw}
                        iconClassName={loading ? 'animate-spin' : ''}
                    >
                        Refresh
                    </Button>
                </div>
            </div>
        </header>
    );
} 