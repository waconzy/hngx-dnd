import Link from 'next/link';
import React from 'react';

const Hero = () => {
	// from-[#1C0553] to-[#3F0866]
	return (
		<div
			className='w-full h-[88vh] py-20
        '>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-center gap-7 items-center'>
					{/* text */}
					<div className='w-full '>
						<h1 className='text-4xl font-semibold leading-[3rem]'>
							Qi_Gallery helps to organize and display your images, giving you a
							user experience like no other,
						</h1>

						<p className='pt-10 pb-7 text-lg'>
							A Drag n Drop functionality to help rearrange the order of your
							gallery
						</p>

						<div>
							<Link
								href={'/login'}
								className='relative px-5 py-2 font-medium text-white group'>
								<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12'></span>
								<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12'></span>
								<span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12'></span>
								<span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12'></span>
								<span className='relative'>Get Started</span>
							</Link>
						</div>
					</div>

					{/* image */}
					<div className='w-full'>
						<div className='w-full'>
							<img className='w-full h-full' src='/hero2.jpg' alt='' />
							{/* <img className='w-full h-full' src='/hero1.png' alt='' /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
