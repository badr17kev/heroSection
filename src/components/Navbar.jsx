import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="header-nav">
      <div className="brand-name">Prodgest<span>.</span></div>
      
      <div className="menu-links">
        <button className="nav-link-button">Solutions</button>
        <button className="nav-link-button">Inventory</button>
        <button className="nav-link-button">Sales</button>
        <button className="nav-link-button">Clients</button>
        <button className="nav-link-button">Pricing</button>
      </div>
      
      <div className="user-actions">
        <button className="login-link nav-link-button">Login</button>
        <button className="signup-button">Get Started</button>
      </div>
    </nav>
  );
}
