import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">YourLogo</div>
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <div className="social-icons">
          <img src="/assets/images/facebook-icon.png" alt="Facebook" />
          <img src="/assets/images/twitter-icon.png" alt="Twitter" />
          <img src="/assets/images/instagram-icon.png" alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
