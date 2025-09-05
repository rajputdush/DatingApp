import React from 'react'

const Contact = () => {
    return (
       // ContactTab.jsx
    <section className="py-4" >
      <div className="container containerr mt-5">
        <div className="row align-items-center ">
          
          {/* Left - Contact Info */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-4">Get in Touch</h1>
            <p className="mb-4">We’d love to hear from you! Reach out for any questions, feedback, or support.</p>
            <ul className="list-unstyled fs-6">
              <li className="mb-3"><i className="bi bi-telephone me-2"></i> +91 98765 43210</li>
              <li className="mb-3"><i className="bi bi-envelope me-2"></i> support@luxurydrive.com</li>
              <li className="mb-3"><i className="bi bi-geo-alt me-2"></i> New Delhi, India</li>
            </ul>
          </div>

          {/* Right - Contact Form */}
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-4 p-4" style={{ backdropFilter: "blur(10px)", background: "rgba(255, 255, 255, 0.9)" }}>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input type="text" className="form-control rounded-3" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email address</label>
                  <input type="email" className="form-control rounded-3" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea className="form-control rounded-3" rows="4" placeholder="Write your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* Optional Google Map Embed */}
        <div className="mt-5 rounded-4 overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.902741253637!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3582d3c5bb%3A0x9df6d92b0e6d98e!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1693400000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default Contact
