
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const { userId, service, date, time, address } = req.body;
    const booking = new Booking({ userId, service, date, time, address });
    await booking.save();
    res.status(201).json({ message: 'Booking confirmed', booking });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  const bookings = await Booking.find().populate('userId', 'name email');
  res.json(bookings);
});

// GET /api/bookings/user/:userId
router.get('/user/:userId', async (req, res) => {
    try {
      const bookings = await Booking.find({ userId: req.params.userId }).sort({ createdAt: -1 });
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  

module.exports = router;