import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="main-hero">
      <div className="content-side">
        <h1 className="main-title">
          One platform to<br />
          master your whole<br />
          business operation.
        </h1>
        
        <p className="description-text">
          Prodgest centralizes your client relationships, inventory tracking, and sales analytics in one intuitive dashboard. Built to help modern businesses scale with total clarity.
        </p>
        
        <div className="email-signup">
          <div className="input-field">
            Enter your work email
          </div>
          <button className="submit-button">
            Get Started
          </button>
        </div>
        
        <div className="extra-actions">
          <span className="label-text">Trusted by industry leaders</span>
          <div className="action-row">
            <div className="action-button primary">
              <strong>Request a Demo</strong>
            </div>
            <div className="action-button secondary">
              <strong>View Pricing</strong>
            </div>
          </div>
        </div>
      </div>
      
      <div className="visual-side">
        <div className="visual-container">
          <div className="primary-pill">
            <img src="/business-1.png" alt="Sarah Jenkins" />
            <div className="profile-badge">
              <strong>SARAH JENKINS</strong>
              <small>Operations Director</small>
            </div>
          </div>
          
          <div className="secondary-stack">
            <div className="secondary-pill purple">
              <img src="/business-2.png" alt="" />
            </div>
            <div className="secondary-pill orange">
              <img src="/business-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
