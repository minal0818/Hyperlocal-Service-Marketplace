// // backend/server.js
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/urban-service', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Booking Route
// const bookingRoutes = require("./routes/bookingRoutes");
// app.use("/api/bookings", bookingRoutes);

// // Feedback (Your existing feature)
// let feedbacks = [];

// app.post("/api/feedback", (req, res) => {
//     const { name, message } = req.body;
//     feedbacks.push({ name, message });
//     res.status(201).json({ success: true, feedbacks });
// });

// app.get("/api/feedback", (req, res) => {
//     res.json({ feedbacks });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

// app.get("/", (req, res) => {
//     res.send("✅ Backend is working!");
//   });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const Review = require('./models/Review'); // path depends on your structure

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// GET reviews
app.get('/api/reviews/:providerId', async (req, res) => {
  try {
    const reviews = await Review.find({ providerId: req.params.providerId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// POST review
app.post('/api/reviews', async (req, res) => {
  try {
    const { providerId, userId, rating, comment } = req.body;
    const review = new Review({ providerId, userId, rating, comment });
    await review.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});