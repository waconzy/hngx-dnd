'use client';

/**
 * Column.js
 *
 * This module defines a React component for rendering a column of tasks in a drag-and-drop task management interface.
 */
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Blurhash } from 'react-blurhash';
import { useSearch } from './SearchContext';

// Define a TypeScript interface for the props
interface ColumnProps {
	column: {
		id: string;
		title: string;
	};
	tasks: {
		id: string;
		content: string;
		image: string;
		blurhash: string;
		tags: string[];
	}[];
	index: number;
}

/**
 * Column component responsible for rendering a column of tasks.
 * {ColumnProps} props - The props for the Column component.
 * {ReactNode} - A component representing a column of tasks.
 */
const Column = ({ column, tasks, index }: ColumnProps) => {
	// Access the search state from the SearchContext
	const { searchQuery } = useSearch();

	// Filter tasks based on the search query
	const filteredTasks = tasks.filter((task) =>
		task.tags.some((tag) =>
			tag.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	return (
		<Draggable draggableId={column.id} isDragDisabled index={index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					ref={provided.innerRef}
					className='py-20'>
					<Droppable droppableId={column.id} type='task'>
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className='grid gap-14'>
								{filteredTasks.map((task, index) => (
									<Draggable
										key={task.id}
										draggableId={`${task.id}`}
										index={index}>
										{(provided) => (
											<div
												{...provided.draggableProps}
												ref={provided.innerRef}
												className=''>
												<p className='text-[#555555] text-4xl capitalize font-bold'>
													{task.content}
												</p>
												<hr className='w-full h-[2.5px] bg-[#000000] mt-2 mb-10' />
												<div
													{...provided.dragHandleProps}
													className='relative h-[17rem] w-full'>
													<Blurhash
														hash={task.blurhash}
														width='100%'
														height='100%'
													/>
													<Image
														src={task.image}
														alt={task.content}
														className=' '
														placeholder='blur'
														fill
														blurDataURL={task.blurhash}
													/>
												</div>
												<div className='flex gap-3 items-center capitalize'>
													{task.tags.map((tag) => (
														<p
															key={tag}
															className='text-[#555555] font-semibold text-xl pt-3'>
															{tag},
														</p>
													))}
												</div>
												<hr className='w-full h-[1.5px] bg-[#000000] mt-2 mb-10' />
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
};

export default Column;
