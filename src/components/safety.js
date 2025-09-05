// SafetyTab.jsx
// React + Bootstrap version (uses Bootstrap icons for visuals)
// Optional: ensure you have Bootstrap & bootstrap-icons loaded in your project
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

import React from 'react';

export default function SafetyTab() {
  return (
    <section className="py-5  " >
      <div className="container containerr mt-4">
        {/* Hero */}
        <div className="p-4 p-md-5 mb-5 bg-white shadow-sm position-relative overflow-hidden">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h1 className="display-6 fw-bold mb-2">
                Safety & Trust
              </h1>
              <p className="lead text-secondary mb-3">
                We build for safety first—privacy by design, verified profiles, secure payments, and real-time support. Here’s how we protect every user on our platform.
              </p>
              <ul className="list-unstyled mb-0 small text-secondary">
                <li className="mb-1"><i className="bi bi-shield-check me-2"></i>End‑to‑end TLS encryption across our website</li>
                <li className="mb-1"><i className="bi bi-person-badge me-2"></i>Multi‑layer verification to reduce fake profiles</li>
                <li className="mb-1"><i className="bi bi-credit-card-2-front me-2"></i>PCI‑aware payment gateways, no card data stored locally</li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-end">
              <span className="badge rounded-pill bg-primary-subtle text-primary  py-2 me-2">
                <i className="bi bi-lock-fill me-1"></i> Privacy First
              </span>
              <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
                <i className="bi bi-people-fill me-1"></i> Community Moderated
              </span>
            </div>
          </div>
          <div className="position-absolute top-0 end-0 opacity-25 pe-3 pt-3 d-none d-md-block" aria-hidden>
            <i className="bi bi-shield-lock display-1"></i>
          </div>
        </div>

        {/* Pillars */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-person-check fs-3 me-3 text-primary" aria-hidden></i>
                  <h5 className="card-title mb-0">Verified Identities</h5>
                </div>
                <p className="card-text text-secondary mb-3">
                  Profile verification via phone/email + risk screening. Suspicious accounts are paused pending manual review.
                </p>
                <ul className="small text-secondary ps-3 mb-0">
                  <li>Device & IP reputation checks</li>
                  <li>Flagged content auto‑review</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-lock fs-3 me-3 text-success" aria-hidden></i>
                  <h5 className="card-title mb-0">Privacy & Encryption</h5>
                </div>
                <p className="card-text text-secondary mb-3">
                  All traffic uses HTTPS (TLS). Sensitive data is encrypted at rest. You control what you share and with whom.
                </p>
                <ul className="small text-secondary ps-3 mb-0">
                  <li>Private in‑app chat (no phone/email reveal)</li>
                  <li>Download your data & delete anytime</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-credit-card fs-3 me-3 text-warning" aria-hidden></i>
                  <h5 className="card-title mb-0">Secure Payments</h5>
                </div>
                <p className="card-text text-secondary mb-3">
                  Payments are handled by trusted gateways. We never store raw card details. Fraud protections and chargeback support are in place.
                </p>
                <ul className="small text-secondary ps-3 mb-0">
                  <li>3‑D Secure & OTP where applicable</li>
                  <li>Transaction alerts & receipts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How we keep you safe */}
        <div className="mb-5">
          <h2 className="h4 fw-bold mb-3">How we keep you safe</h2>
          <div className="row g-3">
            {[
              { icon: 'bi-chat-dots', text: 'In‑app messaging only—keeps personal info private until you choose.' },
              { icon: 'bi-geo-alt', text: 'Optional live location share with trusted contacts during a booking.' },
              { icon: 'bi-exclamation-octagon', text: 'One‑tap report & block. Our Trust & Safety team reviews fast.' },
              { icon: 'bi-shield-exclamation', text: 'AI + human moderation to remove scams and abuse.' },
              { icon: 'bi-telephone-inbound', text: '24/7 support for urgent safety concerns.' },
              { icon: 'bi-star-half', text: 'Two‑sided ratings & reviews after every experience.' },
              { icon: 'bi-file-earmark-lock', text: 'Data minimization: we collect only what is necessary.' },
              { icon: 'bi-incognito', text: 'Anonymity controls: hide surname & blur profile photo if desired.' },
            ].map((item, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div className="h-100 bg-white rounded-4 border-0 shadow-sm p-3">
                  <div className="d-flex align-items-start">
                    <i className={`${item.icon} fs-4 me-3`} aria-hidden></i>
                    <p className="small text-secondary mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy controls (visual only) */}
        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-lg-7">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <h3 className="h5 fw-bold mb-3"><i className="bi bi-sliders me-2"></i>Privacy Controls</h3>
              <p className="text-secondary small">These toggles illustrate controls available in account settings.</p>
              <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" id="toggle1" defaultChecked />
                <label className="form-check-label" htmlFor="toggle1">Hide my last name</label>
              </div>
              <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" id="toggle2" defaultChecked />
                <label className="form-check-label" htmlFor="toggle2">Blur profile photo for non‑verified users</label>
              </div>
              <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" id="toggle3" />
                <label className="form-check-label" htmlFor="toggle3">Enable live location during bookings</label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="toggle4" defaultChecked />
                <label className="form-check-label" htmlFor="toggle4">Two‑factor authentication (2FA)</label>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <h3 className="h5 fw-bold mb-3"><i className="bi bi-graph-up-arrow me-2"></i>Transparency</h3>
              <div className="row text-center g-3">
                <div className="col-4">
                  <div className="fw-bold fs-4">99.95%</div>
                  <div className="small text-secondary">Uptime</div>
                </div>
                <div className="col-4">
                  <div className="fw-bold fs-4">&lt;2m</div>
                  <div className="small text-secondary">Avg. first reply</div>
                </div>
                <div className="col-4">
                  <div className="fw-bold fs-4">98%</div>
                  <div className="small text-secondary">Disputes resolved</div>
                </div>
              </div>
              <p className="small text-secondary mt-3 mb-0">We publish regular trust & safety reports to keep our community informed.</p>
            </div>
          </div>
        </div>

        {/* FAQ / Policies */}
        <div className="row g-4 mb-5">
          <div className="col-lg-7">
            <div className="accordion rounded-4 overflow-hidden shadow-sm" id="safetyAccordion">
              {[
                { q: 'What is your verification process?', a: 'We verify email and phone, check device/IP reputation, and review flagged content. Additional checks may apply for high‑risk patterns.' },
                { q: 'How do payments stay secure?', a: 'All payments go through certified gateways with 3‑D Secure/OTP where applicable. We never store raw card details on our servers.' },
                { q: 'How can I report an issue?', a: 'Use the in‑app “Report” button on any profile or message. You can also block users—our team will review within priority SLAs.' },
                { q: 'Can I delete my data?', a: 'Yes. You can download a copy of your data and delete your account at any time from Settings > Privacy.' },
              ].map((item, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={`head${idx}`}>
                    <button className={`accordion-button ${idx!==0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded={idx===0} aria-controls={`collapse${idx}`}>
                      {item.q}
                    </button>
                  </h2>
                  <div id={`collapse${idx}`} className={`accordion-collapse collapse ${idx===0 ? 'show' : ''}`} aria-labelledby={`head${idx}`} data-bs-parent="#safetyAccordion">
                    <div className="accordion-body text-secondary">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <h3 className="h5 fw-bold mb-3"><i className="bi bi-flag me-2"></i>Report a Concern</h3>
              <p className="text-secondary small">If something doesn’t feel right, block and report immediately. Our Trust & Safety team prioritizes urgent risks.</p>
              <div className="d-grid gap-2">
                <Link to="#report" className="btn btn-danger rounded-3">
                  <i className="bi bi-shield-exclamation me-2"></i>Report / Block User
                </Link>
                <Link to="#support" className="btn btn-outline-secondary rounded-3">
                  <i className="bi bi-headset me-2"></i>Contact 24/7 Safety Support
                </Link>
              </div>
              <hr className="my-4" />
              <p className="small text-secondary mb-0">
                Note: We comply with local laws, respond to lawful requests, and permanently ban accounts for policy violations.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 text-center">
          <h3 className="h5 fw-bold mb-2">Your safety is our top priority</h3>
          <p className="text-secondary small mb-3">Read our full Safety Policy and Community Guidelines before booking.</p>
          <div className="d-flex justify-content-center gap-2">
            <Link to="#policy" className="btn btn-primary rounded-3"><i className="bi bi-book me-2"></i>Safety Policy</Link>
            <Link to="#guidelines" className="btn btn-outline-secondary rounded-3"><i className="bi bi-people me-2"></i>Community Guidelines</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
