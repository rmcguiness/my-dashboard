import { LucideIcon } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    icon?: LucideIcon;
    className?: string;
    iconClassName?: string;
}

export function Button({ children, onClick, disabled = false, icon: Icon, className = '', iconClassName = '' }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 ${className}`}
        >
            {Icon && <Icon className={`w-4 h-4 ${iconClassName}`} />}
            {children}
        </button>
    );
} 