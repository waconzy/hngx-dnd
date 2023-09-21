// import mongoose
import mongoose from 'mongoose';

/**
 * MongoDB Connection Function
 *
 * This function is responsible for establishing a connection to a MongoDB database using Mongoose.
 */

export async function connect() {
	try {
		// Connect to the MongoDB database using the URL provided in the environment variables
		mongoose.connect(process.env.MONGO_URL!);

		// Get the database connection instance
		const connection = mongoose.connection;

		// Event listener for successful database connection
		connection.on('connected', () => {
			console.log('MongoDB connected succesfully');
		});

		// Event listener for database connection error
		connection.on('error', (err) => {
			console.log(
				'MongoDB connection error. Please make sure MongoDB is running. ' + err
			);
			// Terminate the Node.js process if a connection error occurs
			process.exit();
		});
	} catch (error) {
		// Handle any exceptions that may occur during the connection process
		console.log('Someething went wrong');
		console.log(error);
	}
}
