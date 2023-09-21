'use client';

/**
 * SignupPage Component
 *
 * This component represents the signup page of a web application.
 * It allows users to create a new account by providing their name, email, and password.
 *
 * @component
 * @example
 * <SignupPage />
 */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function SignupPage() {
	// State to manage user input
	const [user, setUser] = React.useState({
		name: '',
		email: '',
		password: '',
	});

	// State to manage the disabled status of the "Create Account" button
	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	// State to manage loading indicator
	const [loading, setLoading] = React.useState(false);

	// Next.js router for page navigation
	const router = useRouter();

	// Handle input change event.
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({ ...prevUser, [name]: value }));
	};

	// Handle form submit event.
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			setLoading(true);
			// Send a POST request to the signup API endpoint
			const res = await axios.post('/api/users/signup', user);

			// Display a success toast message on successful signup
			toast.success('Signup Successful');

			// Redirect to the '/login' page after successful signup
			router.push('/login');
		} catch (error: any) {
			// Display an error toast message with the server response error message
			toast.error(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	/**
	 * Effect to enable or disable the "Create Account" button based on input validation.*/
	useEffect(() => {
		if (
			user.email.length > 0 &&
			user.password.length > 3 &&
			user.name.length > 0
		) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className='w-full font-raleway'>
			<div className='flex flex-col md:flex-row h-screen relative overflow-hidden'>
				{/* form-container */}
				<div className='w-full bg-gradient-to-tr from-[#a6c1ee] to-[#fbc2eb] pt-[4rem] lg:pl-[4rem]'>
					<form action='' className='bg-white/50 rounded-tl-[2rem] h-full py-5'>
						<h1 className='text-center  font-bold text-2xl'>
							{loading ? 'processing' : 'Create Account'}
						</h1>
						<div className='grid gap-y-5 w-[70%] mx-auto mt-8'>
							{/* name */}
							<div className='grid'>
								<label htmlFor='name' className='font-medium text-lg'>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={user.name}
									onChange={handleChange}
									placeholder='Enter your name'
									className='p-2 shadow-md rounded-md'
								/>
							</div>

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
								Create Account
							</button>
						</div>
						<p className='text-center mt-6'>
							Already have an account?{' '}
							<Link
								className='text-purple-700 hover:text-purple-500 font-semibold'
								href={'/login'}>
								Login!
							</Link>
						</p>
						<Toaster />
					</form>
				</div>

				{/* 3d section */}
				<div className='w-full bg-gradient-to-bl from-[#ace0f9] to-[#fff1eb] pt-[4rem] lg:pr-[4rem]'>
					<div className='bg-white/50 rounded-tr-[2rem] h-full py-5 pl-[4rem] relative'>
						{/* text */}
						<div>
							<h1 className='text-4xl font-semibold'>Welcome to</h1>
							<h1 className='text-4xl font-semibold pt-1'>Qi-Gallery</h1>
							<p className='pt-1'>Lets bring your business around the globe</p>
						</div>

						<div className='absolute top-[7rem] lg:top-[5rem] left-0 lg:-left-[8rem] rotate-[70deg]'>
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
