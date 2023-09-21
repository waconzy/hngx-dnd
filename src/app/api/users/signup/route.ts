import { connect } from '@/dbConfig/dbConfig'; // Import the database connection setup
import User from '@/models/userModels'; // Import the User model
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'; // Import the bcryptjs library for password hashing

/**
 * User Registration API Endpoint
 *
 * This API endpoint is responsible for registering a new user by receiving a POST request with user registration data and saving it to the database after performing necessary validation and password hashing.
 *
 * {NextRequest} request - The incoming HTTP request containing user registration data.
 * {NextResponse} - A NextResponse object indicating the result of the user registration operation.
 */

// Initialize the database connection
connect();

export async function POST(request: NextRequest) {
	try {
		// Parse the request body as JSON
		const reqBody = await request.json();
		const { name, email, password } = reqBody;

		// console.log(reqBody);

		// Check if a user with the provided email already exists in the database
		const user = await User.findOne({ email });

		// If a user with the same email exists, return an error response
		if (user) {
			return NextResponse.json(
				{ error: 'User already exists' },
				{ status: 400 }
			);
		}

		// Generate a salt and hash the user's password using bcrypt
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		// Create a new User model instance with the user's registration data
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		});

		// Save the new user to the database
		const savedUser = await newUser.save();
		// console.log(savedUser);

		// Return a success response with details about the registered user
		return NextResponse.json({
			message: 'User created successfully',
			success: true,
			savedUser,
		});
	} catch (error: any) {
		// Handle any exceptions that may occur during user registration
		// Return an error response with a 500 status code
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
