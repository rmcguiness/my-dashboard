import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CardHeader } from '@/components/ui/CardHeader';
import { JobApplication } from '@/types/dashboard';

interface JobSectionProps {
    jobs: JobApplication[];
}

export function JobSection({ jobs }: JobSectionProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'applied': return 'bg-blue-100 text-blue-800';
            case 'interviewing': return 'bg-yellow-100 text-yellow-800';
            case 'accepted': return 'bg-green-100 text-green-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Card>
            <CardHeader title="Job Applications" icon={Briefcase} count={jobs.length} countLabel="applications" />
            <div className="p-6">
                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium text-gray-900 dark:text-white">{job.company}</p>
                                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(job.status)}`}>
                                            {job.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.position}</p>
                                    <p className="text-xs text-gray-500 mt-2">{job.notes}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Applied: {job.dateApplied}</p>
                                    <p className="text-xs text-gray-500">Contact: {job.lastContact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}