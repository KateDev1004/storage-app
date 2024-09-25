import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Hero Text Content */}
          <div className="col-lg-6 col-md-12 hero-content">
            <h1 className="title">
              More than just <br /> <span>Cloud Storage</span>
            </h1>
            <p className="mt-3 lead">
              Easy to use, reliable, private, and secure. It’s no wonder
              FileSafe is the choice for storing and sharing your most important
              files.
            </p>
            <div className="mt-5 pt-3 cta-buttons">
              <button className="unlock-btn btn btn-lg mb-3 text-white">
                Unlock Smart Management
              </button>
              <button className="unlimited-btn btn btn-lg text-white">
                Unlimited Cloud Storage
              </button>
            </div>
            <a href="#features" className="explore-link mb-5 d-block">
              Explore All Features <span>&rarr;</span>
            </a>
          </div>

          {/* Hero Image */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-end hero-image">
            <img
              src="assets/images/hero-phone.png"
              alt="Phone App"
              className="img-fluid phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
