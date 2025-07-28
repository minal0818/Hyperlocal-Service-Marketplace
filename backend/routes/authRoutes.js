// backend/routes/authRoutes.js

// const express = require("express");
// const router = express.Router();

// const { register, login, profile } = require("../controllers/authController");
// const { protect } = require("../middleware/authMiddleware");

// router.post("/register", register);
// router.post("/login", login);
// router.get("/profile", protect, profile);

// module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed });
  await user.save();
  res.json({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token, user });
});

module.exports = router;
