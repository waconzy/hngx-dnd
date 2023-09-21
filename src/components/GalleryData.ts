// galleryData.js

export type InitialDataProps = {
	tasks: {
		[key: string]: {
			id: string;
			content: string;
			image: string;
			blurhash: string;
			tags: string[];
		};
	};
	columns: {
		[key: string]: {
			id: string;
			title: string;
			taskIds: string[];
		};
	};
	tasksOrder: string[];
};

export const initialData: InitialDataProps = {
	// Define individual tasks with their properties
	tasks: {
		'1': {
			id: '1',
			content: 'configure 1',
			image: '/art.jpg',
			blurhash: 'L6H2NE_M9FIU~WInM{tR00E1%Ms:',
			tags: ['art', 'design'],
		},
		'2': {
			id: '2',
			content: 'configure 2',
			image: '/art1.jpg',
			blurhash: 'L2FiJd.A00~q4Tt7?bxu0000-;D%',
			tags: ['art', 'design'],
		},
		'3': {
			id: '3',
			content: 'configure 3',
			image: '/art2.jpg',
			blurhash: 'L9J8IjD$?aD%179F^+xu0000_4WA',
			tags: ['art', 'design'],
		},
		'4': {
			id: '4',
			content: 'configure 4',
			image: '/art3.jpg',
			blurhash: 'LSLXV#j]xv-;~qofWBWB4nxut7Rk',
			tags: ['art', 'design', 'paint'],
		},
		'5': {
			id: '5',
			content: 'configure 5',
			image: '/art4.jpg',
			blurhash: 'LMN0uJuP#6*0_2S$aKRkWYR+MxRk',
			tags: ['art', 'design'],
		},
		'6': {
			id: '6',
			content: 'configure 6',
			image: '/image.jpg',
			blurhash: 'L2Byy{:h0g00*0MJ]$VX00cF}S_3',
			tags: ['art', 'design'],
		},
		'7': {
			id: '7',
			content: 'configure 7',
			image: '/image1.jpg',
			blurhash: 'LDI5GC~q4nxt^+IVD%xuogofxuWB',
			tags: ['art', 'design'],
		},
		'8': {
			id: '8',
			content: 'configure 8',
			image: '/image2.jpg',
			blurhash: 'LmI5Y.%gWBog_NxuRjj[E1WBfPf6',
			tags: ['art', 'design', 'interior'],
		},
		'9': {
			id: '9',
			content: 'configure 9',
			image: '/image3.jpg',
			blurhash: 'LKL;1]~qNaoy~U?vf,s:E1aJxaay',
			tags: ['exterior', 'design', 'house'],
		},
		'10': {
			id: '10',
			content: 'configure 10',
			image: '/image4.jpg',
			blurhash: 'LAJao*0000~W57?Gn+X9_3oz?HD%',
			tags: ['art', 'paint'],
		},
		'11': {
			id: '11',
			content: 'configure 11',
			image: '/exterior.jpg',
			blurhash: 'LCD0ZIb[A19jyGMurUxb0X-hs-s;',
			tags: ['house', 'building'],
		},
		'12': {
			id: '12',
			content: 'configure 12',
			image: '/exterior1.jpg',
			blurhash: 'L6D]#j004n^$00E1ad-o0J~CN29Z',
			tags: ['exterior', 'chair', 'pool'],
		},
		'13': {
			id: '13',
			content: 'configure 13',
			image: '/exterior2.jpg',
			blurhash: 'LGGbq:X98^4.aIjEoixvpftR9ZxU',
			tags: ['exterior', 'design', 'pool'],
		},
		'14': {
			id: '14',
			content: 'configure 14',
			image: '/exterior3.jpg',
			blurhash: 'LHF~:O#S4mIp.7$LS6Ip%%VXSNNx',
			tags: ['house', 'exterior'],
		},
		'15': {
			id: '15',
			content: 'configure 15',
			image: '/exterior4.jpg',
			blurhash: 'L-HB[2s+R*R-_4a}ayj[%hWXs.sm',
			tags: ['view', 'mountain'],
		},
	},
	// Define columns with associated task
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'column-1',
			taskIds: ['1', '2', '3', '4', '5'],
		},
		'column-2': {
			id: 'column-2',
			title: 'column-2',
			taskIds: ['6', '7', '8', '9', '10'],
		},
		'column-3': {
			id: 'column-3',
			title: 'column-3',
			taskIds: ['11', '12', '13', '14', '15'],
		},
	},
	// Define the order of columns
	tasksOrder: ['column-1', 'column-2', 'column-3'],
};
