import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  // 🔁 For now hardcode userId (in real app use login state or JWT)
  const userId = 'USER_ID_FROM_MONGODB';  // replace with actual user ID

  useEffect(() => {
    axios.get(`http://localhost:5000/api/bookings/user/${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2>🗓️ Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking, index) => (
            <li key={index} className="booking-card">
              <p><strong>Service:</strong> {booking.service}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Address:</strong> {booking.address}</p>
              <p><strong>Status:</strong> {booking.status}</p>
              <small>📅 Booked on: {new Date(booking.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
