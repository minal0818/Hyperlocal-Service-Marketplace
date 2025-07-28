import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserBookingHistory = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`/api/bookings/user/${userId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            <strong>{b.service}</strong> - {b.date} at {b.time}, {b.address}
            <br />Status: {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBookingHistory;
