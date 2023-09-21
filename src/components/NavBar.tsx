'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NavBar = () => {
	const [nav, setNav] = useState(false);

	return (
		<header className='w-full'>
			<nav className='max-w-6xl mx-auto px-4 py-5 relative'>
				{/* desktop nav */}
				<div className=''>
					<div className='flex items-center justify-between'>
						{/* logo */}
						<div>
							<h1 className=' font-jose text-3xl font-bold'>Qi_Gallery</h1>
						</div>

						{/* links */}
						<ul className='hidden md:flex items-center gap-7 font-medium'>
							<li className='hover-underline '>
								<Link href={'/'}>Product</Link>
							</li>
							<li className='hover-underline '>
								<Link href={'/'}>Solution</Link>
							</li>
							<li className='hover-underline '>
								<Link href={'/'}>Resources</Link>
							</li>
							<li className='hover-underline '>
								<Link href={'/'}>Enterprise</Link>
							</li>
						</ul>

						{/* Buttons */}
						<div className='hidden md:flex items-center gap-10'>
							{/* login */}
							<div>
								<Link
									href={'/login'}
									className='relative px-5 py-2 font-medium text-white group'>
									<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12'></span>
									<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12'></span>
									<span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12'></span>
									<span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12'></span>
									<span className='relative'>Login</span>
								</Link>
							</div>

							{/* signup */}
							<div>
								<Link
									href={'/signup'}
									className='relative px-5 py-2 font-medium text-white group'>
									<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12'></span>
									<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12'></span>
									<span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12'></span>
									<span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12'></span>
									<span className='relative'>Signup</span>
								</Link>
							</div>
						</div>

						{/* hamnburger */}
						<div
							onClick={() => setNav(true)}
							className='md:hidden cursor-pointer'>
							<HiMenuAlt3 size={35} />
						</div>
					</div>
				</div>

				{/* mobile nav */}
				<div className={nav ? 'md:hidden relative' : ''}>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-full h-screen z-[99999] text-white bg-purple-500 p-4 ease-in duration-500'
								: 'fixed left-0 top-[-120vh] w-full h-screen z-[99999] text-white bg-purple-500 p-4 ease-out duration-500'
						}>
						<div className=''>
							{/* logo */}
							<div
								className='cursor-pointer my-4 grid justify-end'
								onClick={() => setNav(false)}>
								<HiX size={30} />
							</div>

							{/* links */}
							<ul className=' grid gap-10 mt-10 font-raleway font-bold text-2xl xs:text-5xl text-center'>
								<li className=''>
									<Link onClick={() => setNav(false)} href={'/'}>
										Product
									</Link>
								</li>
								<li className=''>
									<Link onClick={() => setNav(false)} href={'/'}>
										Solution
									</Link>
								</li>
								<li className=''>
									<Link onClick={() => setNav(false)} href={'/'}>
										Resources
									</Link>
								</li>
								<li className=''>
									<Link onClick={() => setNav(false)} href={'/'}>
										Enterprise
									</Link>
								</li>
							</ul>

							{/* Buttons */}
							<div className='hidden md:flex items-center gap-10'>
								{/* login */}
								<div>
									<Link
										href={'/login'}
										className='relative px-5 py-2 font-medium text-white group'>
										<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12'></span>
										<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12'></span>
										<span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12'></span>
										<span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12'></span>
										<span className='relative'>Login</span>
									</Link>
								</div>

								{/* signup */}
								<div>
									<Link
										href={'/signup'}
										className='relative px-5 py-2 font-medium text-white group'>
										<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12'></span>
										<span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12'></span>
										<span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12'></span>
										<span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12'></span>
										<span className='relative'>Signup</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
