// PricingTab.jsx
// A modern 3-tier pricing section using React + Bootstrap

import React from 'react';
import { Link} from "react-router-dom";

export default function PricingTab() {
  return (
    <section className="py-4">
      <div className="container containerr  mt-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Pricing Plans</h1>
          <p className="text-secondary">Choose a plan that fits your lifestyle. Simple, transparent pricing.</p>
        </div>

        {/* Pricing cards */}
        <div className="row g-4">
          {/* Standard */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2">Standard</h5>
                <h2 className="fw-bold mb-3">$19 <small className="text-muted fs-6">/day</small></h2>
                <p className="text-secondary small mb-4">Perfect for everyday rides and casual trips.</p>
                <ul className="list-unstyled mb-4 text-secondary small">
                  <li>✔ Comfortable seating</li>
                  <li>✔ Basic amenities</li>
                  <li>✔ Verified drivers</li>
                  <li>✔ 24/7 support</li>
                </ul>
                <Link to="#signup" className="btn btn-outline-primary mt-auto rounded-3">Choose Standard</Link>
              </div>
            </div>
          </div>

          {/* Luxury */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-primary rounded-4 position-relative">
              <div className="position-absolute top-0 end-0 bg-primary text-white small px-3 py-1 rounded-bottom-start">
                Popular
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2">Luxury</h5>
                <h2 className="fw-bold mb-3">$49 <small className="text-muted fs-6">/day</small></h2>
                <p className="text-secondary small mb-4">Premium experience with added comfort and style.</p>
                <ul className="list-unstyled mb-4 text-secondary small">
                  <li>✔ Luxury vehicles</li>
                  <li>✔ Premium interiors</li>
                  <li>✔ Priority booking</li>
                  <li>✔ Dedicated support</li>
                </ul>
                <Link to="#signup" className="btn btn-primary mt-auto rounded-3">Choose Luxury</Link>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold mb-2">Premium</h5>
                <h2 className="fw-bold mb-3">$99 <small className="text-muted fs-6">/day</small></h2>
                <p className="text-secondary small mb-4">Elite service for those who demand the very best.</p>
                <ul className="list-unstyled mb-4 text-secondary small">
                  <li>✔ Premium fleet</li>
                  <li>✔ Chauffeur service</li>
                  <li>✔ Complimentary extras</li>
                  <li>✔ Priority safety checks</li>
                </ul>
                <Link to="#signup" className="btn btn-outline-primary mt-auto rounded-3">Choose Premium</Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA*/}
        <div className="text-center mt-5">
          <p className="text-secondary small mb-3">Not sure which plan suits you best?</p>
          <Link to="#contact" className="btn btn-outline-secondary rounded-3">
            <i className="bi bi-chat-dots me-2"></i> Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
