// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/Booking');

// // POST /api/bookings
// router.post('/', async (req, res) => {
//   try {
//     const { userId, service, date, time, address } = req.body;
//     const booking = new Booking({ userId, service, date, time, address, status: 'Pending' });
//     await booking.save();
//     res.status(201).json({ message: 'Booking confirmed', booking });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;


// Get bookings by user IDconst express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings - Create a new booking
router.post('/', async (req, res) => {
  try {
    const { userId, providerId, service, date, time, address } = req.body;
    const booking = new Booking({
      userId,
      providerId, // optional
      service,
      date,
      time,
      address,
      status: 'Pending',
    });
    await booking.save();
    res.status(201).json({ message: 'Booking confirmed', booking });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/bookings/user/:userId - Get bookings by user
router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user bookings' });
  }
});

// GET /api/bookings/provider/:providerId - Get bookings by provider
router.get('/provider/:providerId', async (req, res) => {
  try {
    const bookings = await Booking.find({ providerId: req.params.providerId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch provider bookings' });
  }
});

module.exports = router;
