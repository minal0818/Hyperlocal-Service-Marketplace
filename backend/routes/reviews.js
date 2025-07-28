const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST /api/reviews - Add a review
router.post('/', async (req, res) => {
  const { providerId, userId, rating, comment } = req.body;
  try {
    const review = new Review({ providerId, userId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save review' });
  }
});

// GET /api/reviews/:providerId - Get reviews for a provider
router.get('/:providerId', async (req, res) => {
  try {
    const reviews = await Review.find({ providerId: req.params.providerId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

module.exports = router;
