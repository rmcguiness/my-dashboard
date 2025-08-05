import { CryptoSectionProps } from '@/app/components/CryptoSection';
import { EmailSectionProps } from '@/app/components/EmailSection';
import { GitHubSectionProps } from '@/app/components/GitHubSection';
import { JobSectionProps } from '@/app/components/JobSection';
import { useState, useCallback } from 'react';

export interface DraggableSection {
	id: string;
	title: string;
	component:
		| ((props: EmailSectionProps) => React.ReactNode)
		| ((props: CryptoSectionProps) => React.ReactNode)
		| ((props: GitHubSectionProps) => React.ReactNode)
		| ((props: JobSectionProps) => React.ReactNode);
	props:
		| EmailSectionProps
		| CryptoSectionProps
		| GitHubSectionProps
		| JobSectionProps;
}

export const useDragAndDrop = (initialSections: DraggableSection[]) => {
	const [sections, setSections] = useState<DraggableSection[]>(initialSections);
	const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

	const handleDragStart = useCallback((index: number) => {
		setDraggedIndex(index);
	}, []);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
	}, []);

	const handleDrop = useCallback(
		(dropIndex: number) => {
			if (draggedIndex === null || draggedIndex === dropIndex) return;

			setSections((prevSections) => {
				const newSections = [...prevSections];
				const [draggedSection] = newSections.splice(draggedIndex, 1);
				newSections.splice(dropIndex, 0, draggedSection);
				return newSections;
			});

			setDraggedIndex(null);
		},
		[draggedIndex]
	);

	const handleDragEnd = useCallback(() => {
		setDraggedIndex(null);
	}, []);

	return {
		sections,
		draggedIndex,
		handleDragStart,
		handleDragOver,
		handleDrop,
		handleDragEnd,
	};
};
