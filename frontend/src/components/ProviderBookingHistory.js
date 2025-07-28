import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProviderBookingHistory = ({ providerId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`/api/bookings/provider/${providerId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, [providerId]);

  return (
    <div>
      <h2>Provider Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            <strong>{b.service}</strong> - {b.date} at {b.time}, {b.address}
            <br />User ID: {b.userId} | Status: {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderBookingHistory;
