// Import dependencies using ES module syntax
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

// Import the connectDB function and route files
import connectDB from './config/database.js';
import userRoutes from './routes/userRouter.js';
import postRoutes from './routes/postRouter.js';
import commentRoutes from './routes/commentRouter.js';

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Root route (optional, useful for testing)
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Error handling for invalid routes
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.table(`Server running on port ${PORT}`);
});


