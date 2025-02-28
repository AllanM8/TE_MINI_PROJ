import React from "react";

const ContactPage = () => {
  return (
    <div className="container my-5">
      {/* Contact Section */}
      <div className="row g-5 align-items-center">
        {/* Contact Info */}
        <div className="col-lg-6">
          <div className="p-4">
            <h2 className="fw-bold text-primary mb-4">📍 Contact Information</h2>
            <p className="fs-5"><strong>🏠 Address:</strong> 123 Estate Avenue, New York, USA</p>
            <p className="fs-5"><strong>📧 Email:</strong> <a href="mailto:contact@estatebit.com" className="text-decoration-none text-dark">contact@estatebit.com</a></p>
            <p className="fs-5"><strong>📞 Phone:</strong> <a href="tel:+1234567890" className="text-decoration-none text-dark">+1 234 567 890</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card p-4 shadow-lg border-0 rounded-4">
            <h2 className="fw-bold text-center text-primary">📬 Contact Us</h2>
            <p className="text-center text-muted">We’d love to hear from you!</p>
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control p-3 rounded-3 border" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input type="email" className="form-control p-3 rounded-3 border" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Your Message</label>
                <textarea className="form-control p-3 rounded-3 border" rows="4" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 p-3 rounded-pill fw-bold">
                📩 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <h3 className="fw-bold text-center text-primary">📌 Find Us Here</h3>
        <div className="rounded-4 shadow-lg overflow-hidden mt-3">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.815434216236!2d-73.98542818459366!3d40.74881707932782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a2a8cb%3A0x240d176bc9a57b62!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1618194464859!5m2!1sen!2sus"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
