import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));

  return (
    <nav className={styles.navbar}>
      <div><Link to="/">Home</Link></div>
      <div className={styles.links}>
        {!profile ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <span>Welcome, {profile.user.name}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
