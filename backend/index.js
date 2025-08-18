import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// List of allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL || "https://tour-management-htux.vercel.app",
  "http://localhost:3000", // For local development
  "http://localhost:5173", // For Vite dev server
];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Reject the request
    }
  },
  credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes setup
app.use("/api/auth", authRoute);
app.use("/api/tours", tourRoute);
app.use("/api/users", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// MongoDB connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed", err);
  }
};

// Start server
app.listen(port, () => {
  connect();
  console.log(`Server listening on port ${port}`);
});
