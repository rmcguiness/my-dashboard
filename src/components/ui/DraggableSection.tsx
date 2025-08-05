import React from 'react';
import { Card } from './Card';
import { GripVertical } from 'lucide-react';

interface DraggableSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    isDragging: boolean;
    onDragStart: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent) => void;
    onDragEnd: (e: React.DragEvent) => void;
}

export const DraggableSection: React.FC<DraggableSectionProps> = ({
    id,
    title,
    children,
    isDragging,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnd,
}) => {
    return (
        <div
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnd={onDragEnd}
            className={`transition-all duration-200 ${isDragging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}
        >
            <Card className="h-full">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 cursor-move select-none">
                    <div className="flex items-center gap-2">
                        <GripVertical className="w-4 h-4 text-gray-400" />
                        <h3 className="text-lg font-semibold">{title}</h3>
                    </div>
                </div>
                <div className="p-6">{children}</div>
            </Card>
        </div>
    );
}; 