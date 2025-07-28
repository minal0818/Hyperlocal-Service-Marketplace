import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get('/api/providers') // assumes route that fetches all providers
      .then(res => setProviders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Providers</h2>
      <ul>
        {providers.map(provider => (
          <li key={provider._id}>
            <h4>{provider.name} ({provider.specialization})</h4>
            <Link to={`/provider/${provider._id}`}>View Profile</Link> {/* ← 👈 HERE */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderList;
