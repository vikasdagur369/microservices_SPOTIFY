# User Service

This repository contains the **User Service** for handling user authentication and authorization in the Spotify application.

## flow of project :

[project flow](https://app.eraser.io/workspace/t5q0f3lmFrY95uyDGfWO?origin=share)

## Features

- **User Authentication**: Secure login and registration functionality.
- **Authorization**: Role-based access control for users.
- **Token Management**: Support for JWT-based authentication.
- **Password Encryption**: Secure storage of user credentials using hashing algorithms.

## Installation

1. Clone the repository:
   ```bash
   git clone
   ```
2. Navigate to the project directory:
   ```bash
   cd user-service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the service:
   ```bash
   npm start
   ```
2. Access the API endpoints for authentication and authorization.

## API Endpoints

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate an existing user.
- **GET /auth/verify**: Verify user token.
- **GET /auth/roles**: Fetch user roles.

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DB_URI=your_database_uri
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- bcrypt.js

## License

This project is licensed under the MIT License.
