import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    subtitle?: string;
    className?: string;
    iconClassName?: string;
}

export function StatCard({ title, value, icon: Icon, subtitle, className = '', iconClassName = '' }: StatCardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                    {subtitle && (
                        <div className="mt-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</span>
                        </div>
                    )}
                </div>
                <Icon className={`w-8 h-8 ${iconClassName}`} />
            </div>
        </div>
    );
} 