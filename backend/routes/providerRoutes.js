const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');

// GET all providers
router.get('/', async (req, res) => {
  const providers = await Provider.find();
  res.json(providers);
});

// POST a new provider
router.post('/', async (req, res) => {
  const provider = new Provider(req.body);
  await provider.save();
  res.status(201).json(provider);
});



router.get('/:id', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });
    res.json(provider);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
