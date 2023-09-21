# **Image Gallery with Drag and Drop (Next.js)**
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Overview

This web application is an Image Gallery with an integrated Authentication System. It allows users to freely drag and drop images when logged in. This web application also allows you search for images by their tag name and filters and displays them. The application is built using modern web technologies, including Next.js, MongoDB, React, and more

## Technologies Used
- **Next.js:** The foundation of the application, providing server-side rendering and routing capabilities.
- **MongoDB:** A NoSQL database used to store user information and image data.
- **bcrypt:** A library for securely hashing and managing user passwords.
- **JSON Web Tokens (JWT):** Used for user authentication and authorization.
- **Axios:** A popular HTTP client for making requests to server APIs.
- **React-hot-toast:** A library for displaying toast notifications.
- **React-beautiful-dnd:** Used to implement the drag-and-drop functionality for images.
- **Tailwind CSS:** A utility-first CSS framework for styling the user interface.
- **TypeScript:** Provides static typing to enhance code quality and maintainability.
- **Blurhash:** A compact representation of a placeholder for an image.

## Features
- User Authentication (Register, Login, Logout)
- Drag and Drop Image Gallery
- Image Search Functionality
- Secure Password Storage
- Toast Notifications
- Modern UI with Tailwind CSS
- Server-side Rendering with Next.js
- MongoDB Integration

## Getting Started
Follow these steps to set up and run the project locally:

**Clone the Repository:**
(https://github.com/waconzy/hngx-dnd.git)

**Install Dependencies:**
cd image-galley-dnd
npm install

**Set Environment Variables:**
Create a .env.local file in the project root directory and add the following environment variables:
MONGO_URL= YOUR_MONGODB_CONNECTION_STRING
TOKEN_SECRET= YOUR_TOKEN_SECRET
DOMAIN= YOUR_DOMAIN

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
**Registration:** Create a new user account by clicking the "Register" link and providing your name, email, and password.

**Login:** After registering, log in with your email and password.

**Image Gallery:** When logged in, you can freely drag and drop images within the gallery.

**Image Search:** Use the search bar to filter images by tags.

**Logout:** Click the "Logout" button to log out of your account.

