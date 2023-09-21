/**
 * Authentication Server-Side Endpoint
 *
 * This module contains a server-side endpoint for user authentication.
 * It handles login requests, verifies user credentials, and provides a JSON web token (JWT) upon successful authentication.
 *
 */
import { connect } from '@/dbConfig/dbConfig'; // Import the database connection setup
import User from '@/models/userModels'; // Import the User model
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'; // Import the bcryptjs library for password hashing
import jwt from 'jsonwebtoken'; // Import the JWT library for token generation

// Initialize the database connection
connect();

/**
 * Handle POST Request
 *
 * This function handles incoming POST requests to the authentication endpoint.
 * It expects a JSON payload containing user email and password for login.
 * It verifies user credentials and issues a JWT token upon successful login.
 *
 * request - The incoming request object.
 * The response object containing JSON data and status code.
 */
export async function POST(request: NextRequest) {
	try {
		// Parse the JSON payload
		const reqBody = await request.json();

		// Extract email and password from the request body
		const { email, password } = reqBody;
		// console.log(reqBody);

		// Check if the user exists in the database
		const user = await User.findOne({ email });
		if (!user) {
			// If the user does not exist, return a 404 response with an error message
			return NextResponse.json(
				{ error: 'User does not exist' },
				{ status: 404 }
			);
		}

		// Check if the provided password matches the stored hashed password
		const validPassword = await bcryptjs.compare(password, user.password);

		if (!validPassword) {
			// If the password is invalid, return a 400 response with an error message
			return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
		}

		// Create token data to include in the JWT payload
		const tokenData = {
			id: user._id,
			username: user.username,
			email: user.email,
		};

		// Create a JWT token with a specified expiration time (1 day)
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: '1d',
		});

		// Create a successful response with a message and set the token as a HTTP-only cookie
		const response = NextResponse.json({
			message: 'Login successful',
			success: true,
		});

		response.cookies.set('token', token, {
			httpOnly: true,
		});
		return response;
	} catch (error: any) {
		// If an error occurs during the authentication process, return a 500 response with an error message
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
