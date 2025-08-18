import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "../routes/tours.js";
import userRoute from "../routes/users.js";
import authRoute from "../routes/auth.js";
import reviewRoute from "../routes/reviews.js";
import bookingRoute from "../routes/bookings.js";

dotenv.config();

// MongoDB connection
mongoose.set("strictQuery", false);
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed", err);
    throw err;
  }
};

const app = express();

// List of allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL || "https://tour-management-htux.vercel.app",
  "https://tour-management-htux.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Connect to database before handling requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
});

// Routes setup
app.use("/api/auth", authRoute);
app.use("/api/tours", tourRoute);
app.use("/api/users", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "API is working",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Debug route
app.get("/api/debug", (req, res) => {
  res.json({
    message: "Debug endpoint working",
    availableRoutes: [
      "/api/auth",
      "/api/tours",
      "/api/users", 
      "/api/review",
      "/api/booking"
    ],
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    availableRoutes: [
      "/",
      "/api/debug",
      "/api/auth",
      "/api/tours",
      "/api/users", 
      "/api/review",
      "/api/booking"
    ]
  });
});

export default app;