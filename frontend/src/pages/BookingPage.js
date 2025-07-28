// import React, { useState } from 'react'; //
// import { useParams } from 'react-router-dom';
// import API from '../api'; // your Axios config file

// const BookingPage = () => {
//   const { serviceName } = useParams();
//   const [form, setForm] = useState({
//     date: '',
//     time: '',
//     address: '',
//   });
//   const handleBooking = async () => {
//     const user = JSON.parse(localStorage.getItem('profile'));
  
//     try {
//       const amount = 500; // ₹500 or any other amount
  
//       // 1. Create order from backend
//       const { data: order } = await API.post('/payments/create-order', { amount });
  
//       // 2. Open Razorpay popup
//       const options = {
//         key: 'YOUR_RAZORPAY_KEY_ID',
//         amount: order.amount,
//         currency: order.currency,
//         name: 'Urban Service Booking',
//         description: `Booking for ${serviceName}`,
//         order_id: order.id,
//         handler: async function (response) {
//           // 3. Save booking if payment success
//           await API.post('/bookings', {
//             userId: user.user._id,
//             service: serviceName,
//             ...form,
//           });
//           alert('Payment successful! Booking confirmed.');
//         },
//         prefill: {
//           name: user.user.name,
//           email: user.user.email,
//         },
//         theme: {
//           color: '#6c63ff',
//         },
//       };
  
//       const razor = new window.Razorpay(options);
//       razor.open();
//     } catch (error) {
//       alert('Something went wrong during payment');
//       console.log(error);
//     }
//   };
  

//   return (
//     <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
//       <h2>Book {serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}</h2>

//       <input
//         type="date"
//         name="date"
//         onChange={handleChange}
//         placeholder="Select Date"
//         style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
//       />
//       <input
//         type="time"
//         name="time"
//         onChange={handleChange}
//         placeholder="Select Time"
//         style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
//       />
//       <input
//         type="text"
//         name="address"
//         placeholder="Your Address"
//         onChange={handleChange}
//         style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
//       />
//       <button
//         onClick={handleBooking}
//         style={{
//           marginTop: '1.5rem',
//           padding: '0.7rem 1.5rem',
//           backgroundColor: '#6c63ff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//         }}
//       >
//         Confirm Booking
//       </button>
//     </div>
//   );
// };

// export default BookingPage;



import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api'; // your Axios config file

const BookingPage = () => {
  const { serviceName } = useParams();
  const [form, setForm] = useState({
    date: '',
    time: '',
    address: '',
  });

  // ✅ Add this function to fix the error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    try {
      const amount = 500; // ₹500 or any other amount

      // 1. Create order from backend
      const { data: order } = await API.post('/payments/create-order', { amount });

      // 2. Open Razorpay popup
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Urban Service Booking',
        description: `Booking for ${serviceName}`,
        order_id: order.id,
        handler: async function (response) {
          // 3. Save booking if payment success
          await API.post('/bookings', {
            userId: user.user._id,
            service: serviceName,
            ...form,
          });
          alert('Payment successful! Booking confirmed.');
        },
        prefill: {
          name: user.user.name,
          email: user.user.email,
        },
        theme: {
          color: '#6c63ff',
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      alert('Something went wrong during payment');
      console.log(error);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Book {serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}</h2>

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Select Date"
        style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        placeholder="Select Time"
        style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <input
        type="text"
        name="address"
        value={form.address}
        placeholder="Your Address"
        onChange={handleChange}
        style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <button
        onClick={handleBooking}
        style={{
          marginTop: '1.5rem',
          padding: '0.7rem 1.5rem',
          backgroundColor: '#6c63ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
