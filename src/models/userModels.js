import mongoose from 'mongoose';

/**
 * User Model Schema
 *
 * This module defines the schema for the User model, including the fields for user data such as name, email, password, and various authentication tokens and flags.
 */

// Define the schema for the User model
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a username'],
	},

	email: {
		type: String,
		required: [true, 'Please provide an email'],
		unique: true,
	},

	password: {
		type: String,
		required: [true, 'Please provide a password'],
	},

	isVerified: {
		type: Boolean,
		default: false,
	},

	isAdmin: {
		type: Boolean,
		default: false,
	},

	forgotPasswordToken: String,
	forgotPasswordTokenExpiry: Date,
	verifyToken: String,
	verifyTokenExpiry: Date,
});

/**
 * User Model
 *
 * This is the User model created from the defined schema. If the model already exists, it is used; otherwise, a new model is created with the name 'users'.
 */
const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
