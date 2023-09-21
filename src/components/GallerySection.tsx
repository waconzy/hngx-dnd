'use client';
import React, { useState } from 'react';
import {
	DragDropContext,
	DragStart,
	Droppable,
	DropResult,
} from 'react-beautiful-dnd';

import dynamic from 'next/dynamic';
// Import the definitions
import { initialData, InitialDataProps } from './GalleryData';
import toast, { Toaster } from 'react-hot-toast';

const Column = dynamic(() => import('./Column'), {
	ssr: false,
});

// Define a type for your initial data

function GallerySection() {
	const [state, setState] = useState(initialData);

	const handleDragStart = (e: DragStart) => {
		toast.success('Image picked up');
	};

	const handleDragEnd = (result: DropResult) => {
		const { destination, source, draggableId, type } = result;

		// Debugging: Log the source and destination IDs
		// console.log('Source ID:', source.droppableId);
		// toast.success('Item dropped successfully');
		// console.log('Destination ID:', destination?.droppableId);

		// if user tries to drop in an unknown destination
		if (!destination) {
			toast.error('Image could not be moved');
			return;
		}

		// if the user drags and drop back in same position
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			toast.success('Image dropped at same position');
			return;
		}

		// if user is dragging a column
		if (type === 'column') {
			const newColumnOrder = Array.from(state.tasksOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = {
				...state,
				tasksOrder: newColumnOrder,
			};
			setState(newState);
			return;
		}

		// if the user drops within same column but in different position
		const sourceCol = state.columns[source.droppableId];
		const destinationCol = state.columns[destination.droppableId];

		// Check if sourceCol and destinationCol exist
		if (!sourceCol || !destinationCol) {
			console.error('Source column or destination column not found.');
			return;
		}

		if (sourceCol === destinationCol) {
			const newTaskIds = Array.from(sourceCol.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...sourceCol,
				taskIds: newTaskIds,
			};

			const newState = {
				...state,
				columns: {
					...state.columns,
					[newColumn.id]: newColumn,
				},
			};
			setState(newState);
			toast.success('Image dropped successfully');
			return;
		}

		// if the user movers from one column to another
		const startTaskIds = Array.from(sourceCol.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...sourceCol,
			taskIds: startTaskIds,
		};

		const finishTaskIds = Array.from(destinationCol.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...destinationCol,
			taskIds: finishTaskIds,
		};

		const newColumnState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};
		setState(newColumnState);
		toast.success('Image dropped successfully');
		return;
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
			<Droppable droppableId='board' direction='horizontal' type='column'>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className='grid grid-cols-1 md:grid-cols-3 md:gap-14 lg:gap-24 max-w-6xl mx-auto sm:w-[70%] md:w-full px-4'>
						{state.tasksOrder.map((columnId, index) => {
							const column = state.columns[columnId];
							const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

							return (
								<Column
									key={column.id}
									column={column}
									tasks={tasks}
									index={index}
								/>
							);
						})}
						{provided.placeholder}
						<Toaster />
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default GallerySection;
