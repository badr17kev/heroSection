import React from 'react';
import { FiShield } from 'react-icons/fi';
import './CtaBanner.css';

const CtaBanner = () => (
  <div className="cta-banner">

    {/* Dark left */}
    <div className="cta-dark">
      <div>
        <h2 className="cta-dark-title">
          Ready to transform<br />your management?
        </h2>
        <p className="cta-dark-sub">
          More than 2,000 companies trust Prodgest to streamline
          their daily operations.
        </p>
      </div>
    </div>

    {/* Green right */}
    <div className="cta-green">
      <div className="cta-green-icon">
        <FiShield size={36} strokeWidth={1.5} color="white" />
      </div>
      <div className="cta-green-title">Certified &amp; Secure</div>
      <p className="cta-green-desc">
        Your data is protected by enterprise-grade encryption and
        continuous security audits.
      </p>
    </div>

  </div>
);

export default CtaBanner;
