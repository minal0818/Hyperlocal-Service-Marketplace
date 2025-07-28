import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1, icon: '🔧', title: 'Plumber', desc: 'Fix all plumbing issues.' },
  { id: 2, icon: '⚡', title: 'Electrician', desc: 'Electrical repair services.' },
  { id: 3, icon: '💄', title: 'Beautician', desc: 'At-home beauty services.' },
];

const Home = () => {
    const navigate = useNavigate();
  
    const handleBook = (serviceTitle) => {
      navigate(`/book/${serviceTitle.toLowerCase()}`);
    };


  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Welcome to Local Services</h1>
        <p>Hire trusted professionals at your doorstep</p>
      </div>

      <div className={styles.grid}>
        {services.map(service => (
          <div key={service.id} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.desc}</p>
            <button className={styles.button}  onClick={() => handleBook(service.title)}> Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
