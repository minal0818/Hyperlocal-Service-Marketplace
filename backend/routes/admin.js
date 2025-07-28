const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Provider = require("../models/Provider"); // Create if not exists

// GET all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// GET all providers
router.get("/providers", async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch providers" });
  }
});

// DELETE booking
router.delete("/bookings/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// DELETE provider
router.delete("/providers/:id", async (req, res) => {
  try {
    await Provider.findByIdAndDelete(req.params.id);
    res.json({ message: "Provider deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
