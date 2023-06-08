import React from "react";
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>
          </p>
          <a href="mailto:anshumanjnvdhanbad@gmail.com">anshumanjnvdhanbad@gmail.com</a>
        </div>

        <div className="contact-info">
          <p>
            <strong>Phone:</strong>
          </p>
          <p>+91 6200744090</p>
        </div>

        <div className="contact-info">
          <p>
            <strong>Social Media:</strong>
          </p>
          <div className="social-media-links">
            <a href="https://www.facebook.com/yourname">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/yourname">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourname">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/yourname">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
