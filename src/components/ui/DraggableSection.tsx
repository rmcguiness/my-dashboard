import React from 'react';
import { Card } from './Card';
import { GripVertical } from 'lucide-react';

interface DraggableSectionProps {
    id: string;
    title: React.ReactNode;
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
                <div className="cursor-move">
                    {children}
                </div>
            </Card>
        </div>
    );
}; 