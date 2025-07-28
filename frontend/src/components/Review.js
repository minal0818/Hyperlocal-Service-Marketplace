import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Review = ({ providerId, userId }) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: '', comment: '' });

  useEffect(() => {
    axios.get(`/api/reviews/${providerId}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error('Failed to fetch reviews:', err));
  }, [providerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reviews', { ...form, providerId, userId });
      setForm({ rating: '', comment: '' });

      const updated = await axios.get(`/api/reviews/${providerId}`);
      setReviews(updated.data);
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  return (
    <div>
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={e => setForm({ ...form, rating: e.target.value })}
          min="1"
          max="5"
          required
        />
        <br />
        <textarea
          placeholder="Write a comment"
          value={form.comment}
          onChange={e => setForm({ ...form, comment: e.target.value })}
          required
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>

      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((r, idx) => (
          <div key={idx}>
            ⭐ {r.rating} - {r.comment}
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

export default Review;
