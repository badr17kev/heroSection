import React from 'react';
import { FiUsers, FiBox, FiBarChart2 } from 'react-icons/fi';
import './Features.css';

export default function Features() {
  return (
    <section className="service-features" id="features">
      <div className="section-intro">
        <h2 className="intro-title">One platform, infinite possibilities</h2>
        <p className="intro-subtitle">
          Discover how our specialized tools can transform your daily
          business operations.
        </p>
      </div>

      <div className="features-container">
        <div className="service-card">
          <div className="icon-wrapper">
            <FiUsers size={18} strokeWidth={1.8} />
          </div>
          <div className="service-title">Client Management</div>
          <p className="service-text">Track all your interactions and strengthen your customer relationships with an integrated CRM.</p>
        </div>

        <div className="service-card">
          <div className="icon-wrapper">
            <FiBox size={18} strokeWidth={1.8} />
          </div>
          <div className="service-title">Inventory Control</div>
          <p className="service-text">Manage your stocks in real time, avoid shortages and optimize your supply chain with ease.</p>
        </div>

        <div className="service-card">
          <div className="icon-wrapper">
            <FiBarChart2 size={18} strokeWidth={1.8} />
          </div>
          <div className="service-title">Sales Analytics</div>
          <p className="service-text">Analyze your commercial performance with detailed dashboards and financial forecasts.</p>
        </div>
      </div>
    </section>
  );
}
