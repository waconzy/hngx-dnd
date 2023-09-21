'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { HiOutlineSearch } from 'react-icons/hi';
import { useSearch } from './SearchContext';

/**
 * HeroSection Component
 *
 * The HeroSection component represents the header section of a web page. It provides functionality for user search and logout actions.
 *
 *
 */

const HeroSection = () => {
	// Access search state from the SearchContext
	const { searchQuery, setSearchQuery } = useSearch();

	/**
	 * Handle Search Input Change
	 *
	 * {React.ChangeEvent<HTMLInputElement>} e - The input change event.
	 */
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Update the search state with the input value
		setSearchQuery(e.target.value);
	};

	// Initialize Next.js router for navigation
	const router = useRouter();

	/**
	 * Handle Logout
	 *
	 * This function sends a GET request to log the user out and redirects them to the login page upon successful logout.
	 */
	const logout = async () => {
		try {
			// Send a GET request to the '/api/users/logout' endpoint to log out the user
			await axios.get('/api/users/logout');

			// Show a success toast notification
			toast.success('Logout Successful');

			// Redirect the user to the login page
			router.push('/login');
		} catch (error: any) {
			// Log and display any errors that occur during logout
			// console.log(error.message);
			toast.error(error.message);
		}
	};
	return (
		<header className='h-auto w-full'>
			{/* header container */}
			<div>
				{/* nav */}
				<nav className='flex flex-col md:flex-row gap-y-4 md:items-center md:justify-between max-w-6xl mx-auto px-4 py-5'>
					{/* logo */}
					<h1 className='text-xl font-bold'>QI_GALLERY</h1>

					<div className='w-full md:w-[70%] flex items-center justify-between gap-4 '>
						{/* search */}
						<div className='flex items-center justify-between border-2 border-black py-2 px-5 w-[60%] rounded-md'>
							<input
								className='w-full border-none bg-transparent outline-none font-semibold text-xl'
								type='text'
								placeholder='Search'
								value={searchQuery}
								onChange={handleSearchChange}
							/>
							{/* icon */}
							<div>
								<HiOutlineSearch />
							</div>
						</div>

						{/* logout */}
						<div>
							<button className='text-xl font-bold' onClick={logout}>
								Logout
							</button>
						</div>
					</div>
				</nav>

				{/* hero details */}
				<div>
					<h1></h1>
				</div>
			</div>
			<Toaster />
		</header>
	);
};

export default HeroSection;
