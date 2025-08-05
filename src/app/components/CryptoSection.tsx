import { TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CardHeader } from '@/components/ui/CardHeader';
import { CryptoAsset } from '@/types/dashboard';

export interface CryptoSectionProps {
    crypto: CryptoAsset[];
}

export function CryptoSection({ crypto }: CryptoSectionProps) {
    return (
        <Card>
            <CardHeader title="Crypto Portfolio" icon={TrendingUp} count={crypto.length} countLabel="assets" />
            <div className="p-6">
                <div className="space-y-4">
                    {crypto.map((asset) => (
                        <div key={asset.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                            <div className="flex justify-between items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium text-gray-900 dark:text-white">{asset.symbol}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{asset.name}</p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Balance: {asset.balance}
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Price: ${asset.price.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        ${asset.value.toLocaleString()}
                                    </p>
                                    <span className={`text-sm ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}