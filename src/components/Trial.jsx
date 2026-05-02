import React from 'react';
import './Trial.css';

const Trial = () => (
  <section className="trial">
    <div className="trial-card">
      <h2 className="trial-title">Start your free trial today</h2>
      <p className="trial-sub">
        Join the leaders in the market and discover the power of clarity
        in operations. No credit card required.
      </p>
      <div className="trial-btns">
        <button className="trial-btn-primary">Create a free account</button>
        <button className="trial-btn-outline">Contact an expert</button>
      </div>
    </div>
  </section>
);

export default Trial;
