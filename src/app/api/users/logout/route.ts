/**
 * Handle GET request for logging out a user.
 *
 * This function is responsible for handling a GET request that logs out a user by clearing their authentication token cookie.
 *
 * - A NextResponse object indicating the result of the logout operation.
 */
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		// Create a successful response indicating a successful logout
		const response = NextResponse.json({
			message: 'Logout successful',
			success: true,
		});
		// Clear the 'token' cookie by setting it to an empty value and an expired date
		response.cookies.set('token', '', {
			httpOnly: true,
			expires: new Date(0),
		});
		// Return the successful response
		return response;
	} catch (error: any) {
		// If an error occurs during the logout process, handle it gracefully
		// by returning a response with an error message and a 500 status code.
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
