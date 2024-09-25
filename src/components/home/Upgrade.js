import React from "react";
import "./Upgrade.css";

const Upgrade = () => {
  return (
    <div
      className="upgrade container-fluid"
      style={{ backgroundColor: "#1B1E3F" }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between upgrade-main-container">
          {/* Left Side: Text Section */}
          <div className="col-lg-6 col-12 upgrade-content">
            <h1 className="heading">Upgrade personal cloud storage</h1>
            <p className="lead my-5">
              We help you to find flights easily and efficiently.
              <br />
              We provide various flight recommendations that match what you
              want.
            </p>

            <div class="input-container">
              <input
                type="email"
                placeholder="Enter your email address"
                class="input-field"
              />
              <button class="submit-btn">Get Access</button>
            </div>
          </div>

          {/* Right Side: Image Section */}
          <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-end image">
            <img
              src="assets/images/upgrade.png" // Replace with your actual image path
              alt="Mobile App Mockup"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
