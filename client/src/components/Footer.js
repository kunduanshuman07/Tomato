import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';
const Footer = () => {
  return (
    <footer class="footer">
      <p>
        &copy; 2023 Food Delivery App. All rights reserved. |{" "}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </p>
      <p>
        Contact us at <a href="mailto:anshumanjnvdhabad@gmail.com">anshumanjnvdhanbad@gmail.com</a>
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
    </footer>
  );
};

export default Footer;
