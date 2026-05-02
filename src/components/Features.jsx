import React from 'react';
import { FiUsers, FiPackage, FiBarChart2 } from 'react-icons/fi';
import './Features.css';

const cards = [
  {
    Icon: FiUsers,
    name: 'Client Management',
    desc: 'Track all your clients and contacts, manage exchanges, handle opportunities and improve your acquisition funnel.',
  },
  {
    Icon: FiPackage,
    name: 'Inventory Control',
    desc: 'Stay on top of stock in real-time. Receive alerts on low stock, track multiple warehouses and automate replenishment.',
  },
  {
    Icon: FiBarChart2,
    name: 'Sales Analytics',
    desc: 'Analyze your commercial performance with detailed dashboards, sales reports and financial forecasts.',
  },
];

const Features = () => (
  <section className="features" id="features">
    <div className="features-header">
      <h2 className="features-title">One platform, infinite possibilities</h2>
      <p className="features-sub">
        Discover how our specialized tools can transform your daily
        business operations.
      </p>
    </div>

    <div className="features-grid">
      {cards.map(({ Icon, name, desc }) => (
        <div className="feature-card" key={name}>
          <div className="feature-icon">
            <Icon size={18} strokeWidth={1.8} />
          </div>
          <div className="feature-name">{name}</div>
          <p className="feature-desc">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
