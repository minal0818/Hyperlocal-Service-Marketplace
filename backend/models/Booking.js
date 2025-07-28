// // backend/models/Booking.js
// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   service: String,
//   date: String,
//   time: String,
//   address: String,
//   status: { type: String, default: 'Pending' },
// }, { timestamps: true });

// module.exports = mongoose.model('Booking', bookingSchema);
/
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' }, // optional
  service: String,
  date: String,
  time: String,
  address: String,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
