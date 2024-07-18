# Node.js and MongoDB Connection Example

This project demonstrates a basic connection between a Node.js application and a MongoDB database. It provides a simple setup to help you get started with Node.js and MongoDB integration.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation and Setup

### Steps to Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Environment variables**:

    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-db-name
    ```

4. **Start the server**:
    ```sh
    npm start
    ```

    The server will start on `http://localhost:3000`.

## Project Structure

```
.
├── config
│   └── db.js           # Database connection configuration
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Code Explanation

### 1. Database Connection (config/db.js)

This file contains the logic to connect to the MongoDB database using Mongoose.

```javascript
// config/db.js

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 2. Application Entry Point (app.js)

This file initializes the application, connects to the database, and starts the server.

```javascript
// app.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Running the Application

To run the application, follow these steps:

1. **Ensure MongoDB is running**:
    Make sure your MongoDB server is up and running. You can start it using the following command:
    ```sh
    mongod
    ```

2. **Start the Node.js application**:
    ```sh
    npm start
    ```

3. **Access the application**:
    Open your browser and go to `http://localhost:3000`. You should see the message "Hello, world!".

## Contributing

We welcome contributions to improve this basic setup. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using this Node.js and MongoDB connection example. We hope it helps you get started with your projects. If you have any questions or feedback, please feel free to contact us.

Happy Coding!
