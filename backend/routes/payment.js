// // const express = require("express");
// // const Razorpay = require("razorpay");
// // const router = express.Router();

// // const razorpay = new Razorpay({
// //   key_id: process.env.RAZORPAY_KEY_ID,
// //   key_secret: process.env.RAZORPAY_KEY_SECRET
// // });

// // router.post("/create-order", async (req, res) => {
// //   const { amount } = req.body;
// //   const options = {
// //     amount: amount * 100, // amount in paise
// //     currency: "INR",
// //     receipt: "receipt_order_" + Date.now()
// //   };
// //   try {
// //     const order = await razorpay.orders.create(options);
// //     res.status(200).json(order);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // module.exports = router;


// const Razorpay = require('razorpay');
// const express = require('express');
// const router = express.Router();

// // const razorpay = new Razorpay({
// //   key_id: process.env.RAZORPAY_KEY_ID,
// //   key_secret: process.env.RAZORPAY_SECRET,
// // });

// router.post('/create-order', async (req, res) => {
//   const { amount } = req.body;
//   try {
//     const order = await razorpay.orders.create({
//       amount: amount * 100, // ₹500 -> 50000 paise
//       currency: 'INR',
//       receipt: 'receipt_order_1',
//     });
//     res.status(200).json(order);
//   } catch (error) {
//     console.error('Error creating Razorpay order:', error);
//     res.status(500).json({ error: 'Order creation failed' });
//   }
// });

// module.exports = router;
