'use client';

/**
 * LoginPage Component
 *
 * This component represents the login page of a web application.
 * It allows users to enter their email and password to log in.
 *
 * @component
 * @example
 *
 */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Toast, Toaster, toast } from 'react-hot-toast';
import React from 'react';

export default function LoginPage() {
	// State for user input
	const [user, setUser] = React.useState({
		email: '',
		password: '',
	});

	// Next.js router for page navigation
	const router = useRouter();

	// State for loading indicator
	const [loading, setLoading] = React.useState(false);

	// State for button disabled status
	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	/**
	 * Handle input change event.
	 */
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({ ...prevUser, [name]: value }));
	};

	/**
	 * Handle form submit.
	 */
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			setLoading(true);

			// Send a POST request to the login API endpoint
			const res = await axios.post('/api/users/login', user);
			// console.log('Login successfull', res.data);

			// Display a success toast message on successful login
			toast.success('Login Successfull');

			// Redirect to the '/gallery' page
			router.push('/gallery');
		} catch (error: any) {
			// Display an error toast message with the server response error message
			toast.error(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	// Effect to enable or disable the login button based on input validation
	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 3) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);
	return (
		<div className='w-full font-raleway'>
			<div className='flex flex-col md:flex-row-reverse h-screen relative overflow-hidden'>
				{/* form-container */}
				<div className='h-screen md:h-auto w-full bg-gradient-to-tr from-[#a6c1ee] to-[#fbc2eb] pt-[4rem] lg:pr-[4rem]'>
					<form action='' className='bg-white/50 rounded-tr-[2rem] h-full py-5'>
						<h1 className='text-center  font-bold text-2xl'>
							{loading ? 'Processing' : 'Hello! Welcome'}
						</h1>
						<div className='grid gap-y-5 w-[70%] mx-auto mt-8'>
							{/* email */}
							<div className='grid'>
								<label htmlFor='email' className='font-medium text-lg'>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={user.email}
									onChange={handleChange}
									placeholder='Enter your email address'
									className='p-2 shadow-md rounded-md'
								/>
							</div>

							{/* password */}
							<div className='grid'>
								<label htmlFor='password' className='font-medium text-lg'>
									Password
								</label>
								<input
									type='password'
									id='password'
									name='password'
									value={user.password}
									onChange={handleChange}
									placeholder='Enter your password'
									className='p-2 shadow-md rounded-md'
								/>
							</div>

							<button
								onClick={handleSubmit}
								className={`p-2 shadow-md rounded-md ${
									buttonDisabled ? 'bg-gray-300' : 'bg-purple-500 text-white'
								}`}
								disabled={buttonDisabled}>
								Login
							</button>
						</div>
						<p className='text-center mt-6'>
							Dont have an account?{' '}
							<Link
								className='text-purple-700 hover:text-purple-500 font-semibold'
								href={'/signup'}>
								Signup!
							</Link>
						</p>
						<Toaster />
					</form>
				</div>

				{/* 3d section */}
				<div className='hidden md:block w-full bg-gradient-to-br from-[#ace0f9] to-[#fff1eb] pt-[4rem] lg:pl-[4rem]'>
					<div className='bg-white/50 rounded-tl-[2rem] h-full py-5 pl-[4rem] relative'>
						{/* text */}
						<div>
							<h1 className='text-4xl font-semibold'>Welcome to</h1>
							<h1 className='text-4xl font-semibold pt-1'>Qi-Space</h1>
							<p className='pt-1'>Lets bring your business around the globe</p>
						</div>

						<div className='absolute top-[7rem] lg:top-[5rem] right-0 lg:-right-[8rem] -rotate-[25deg]'>
							<div className=' w-[25rem] lg:w-[30rem] aspect-square'>
								<img className='h-full w-full' src='./rocket.png' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
