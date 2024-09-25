import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>More than just Cloud Storage</h1>
        <p>
          Save, organize, and share files effortlessly with advanced storage
          solutions.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Unlock Smart Environment</button>
          <button className="secondary-btn">Unlimited Cloud Storage</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/images/phone-app.png" alt="Cloud storage app" />
      </div>
    </section>
  );
};

export default HeroSection;
