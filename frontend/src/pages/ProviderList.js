import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/providers')
      .then(res => setProviders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2>Our Service Providers</h2>
      <div className="provider-grid">
        {providers.map(provider => (
          <div key={provider._id} className="provider-card">
            <img src={provider.profileImage || 'https://via.placeholder.com/150'} alt={provider.name} />
            <h3>{provider.name}</h3>
            <p><b>Service:</b> {provider.serviceType}</p>
            <p><b>Experience:</b> {provider.experience}</p>
            <p><b>Location:</b> {provider.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
