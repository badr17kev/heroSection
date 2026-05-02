import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="header-nav">
      <div className="brand-name">Prodgest<span>.</span></div>
      
      <div className="menu-links">
        <a href="#">Solutions</a>
        <a href="#">Inventory</a>
        <a href="#">Sales</a>
        <a href="#">Clients</a>
        <a href="#">Pricing</a>
      </div>
      
      <div className="user-actions">
        <a href="#" className="login-link">Login</a>
        <button className="signup-button">Get Started</button>
      </div>
    </nav>
  );
}
