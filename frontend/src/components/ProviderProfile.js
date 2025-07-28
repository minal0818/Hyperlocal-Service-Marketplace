import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Review from '../components/Review'; // ✅ Only this

const ProviderProfile = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    axios.get(`/api/providers/${id}`)
      .then(res => setProvider(res.data))
      .catch(err => console.error('Failed to fetch provider:', err));
  }, [id]);

  if (!provider) return <p>Loading provider profile...</p>;

  return (
    <div>
      <h2>{provider.name}</h2>
      <p><strong>Specialization:</strong> {provider.specialization}</p>
      <p><strong>Experience:</strong> {provider.experience} years</p>
      <p><strong>Email:</strong> {provider.email}</p>
      <p><strong>Phone:</strong> {provider.phone}</p>
      <p><strong>About:</strong> {provider.bio}</p>

      {/* ✅ Show Review Section Once */}
      <Review providerId={id} userId="demo-user-id" />
    </div>
  );
};

export default ProviderProfile;
