import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">

      {/* Brand */}
      <div>
        <div className="footer-brand-name">Prodgest</div>
        <p className="footer-brand-desc">
          An all-in-one business management platform. Manage products,
          clients and sales — from anywhere, at any time.
        </p>
      </div>

      {/* Product */}
      <div className="footer-col">
        <div className="footer-col-title">Product</div>
        <ul>
          <li><a href="#inventory">Inventory</a></li>
          <li><a href="#crm">CRM</a></li>
          <li><a href="#analytics">Analytics</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div className="footer-col">
        <div className="footer-col-title">Legal</div>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#cookies">Cookie Settings</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="footer-col">
        <div className="footer-col-title">Support</div>
        <ul>
          <li><a href="#contact">Contact Support</a></li>
          <li><a href="#help">Help Center</a></li>
          <li><a href="#status">Status</a></li>
        </ul>
      </div>

    </div>

    <div className="footer-bottom">
      © 2025 Prodgest. All rights reserved.
    </div>
  </footer>
);

export default Footer;
