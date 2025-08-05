import { Mail } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CardHeader } from '@/components/ui/CardHeader';
import { Email } from '@/types/dashboard';

interface EmailSectionProps {
    emails: Email[];
}

export function EmailSection({ emails }: EmailSectionProps) {
    return (
        <Card>
            <CardHeader title="Emails" icon={Mail} count={emails.length} countLabel="messages" />
            <div className="p-6">
                <div className="space-y-4">
                    {emails.map((email) => (
                        <div
                            key={email.id}
                            className={`p-4 rounded-lg border ${email.unread
                                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                                : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium text-gray-900 dark:text-white">{email.from}</p>
                                        {email.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                    </div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">{email.subject}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{email.preview}</p>
                                </div>
                                <span className="text-xs text-gray-500">{email.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
