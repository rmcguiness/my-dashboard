import { LucideIcon } from 'lucide-react';

interface CardHeaderProps {
    title: string;
    icon: LucideIcon;
    count?: number;
    countLabel?: string;
}

export function CardHeader({ title, icon: Icon, count, countLabel }: CardHeaderProps) {
    return (
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {title}
                </h2>
                {count !== undefined && (
                    <span className="text-sm text-gray-500">
                        {count} {countLabel}
                    </span>
                )}
            </div>
        </div>
    );
} 