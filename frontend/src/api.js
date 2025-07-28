import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' }); // your backend URL

// Attach token if available
API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile');
  if (profile) {
    req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
});

export default API;
