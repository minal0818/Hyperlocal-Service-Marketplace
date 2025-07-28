import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchProviders();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/bookings");
    setBookings(res.data);
  };

  const fetchProviders = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/providers");
    setProviders(res.data);
  };

  const deleteBooking = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/bookings/${id}`);
    fetchBookings();
  };

  const deleteProvider = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/providers/${id}`);
    fetchProviders();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 All Bookings</h2>
      {bookings.map((b) => (
        <div key={b._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><b>Service:</b> {b.service}</p>
          <p><b>Date:</b> {b.date} at {b.time}</p>
          <p><b>User:</b> {b.userId?.name || "N/A"}</p>
          <button onClick={() => deleteBooking(b._id)}>Delete</button>
        </div>
      ))}

      <h2>👨‍🔧 All Providers</h2>
      {providers.map((p) => (
        <div key={p._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><b>Name:</b> {p.name}</p>
          <p><b>Service:</b> {p.service}</p>
          <button onClick={() => deleteProvider(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
