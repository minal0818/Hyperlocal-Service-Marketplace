
const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: String,
  serviceType: String,
  bio: String,
  rating: Number,
  available: Boolean,
  email: String,
  phone: String,
  experience: String,
  location: String,
  profileImage: String,
}, { timestamps: true });

module.exports = mongoose.model('Provider', providerSchema);