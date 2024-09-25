import React from "react";

const Upgrade = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#1B1E3F" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text Section */}
          <div className="col-md-6 text-white">
            <h1 className="display-4 fw-bold">
              Upgrade personal cloud storage
            </h1>
            <p className="lead mt-3">
              We help you to find flights easily and efficiently.
              <br />
              We provide various flight recommendations that match what you
              want.
            </p>

            {/* Email Input and Button */}
            <div className="input-group mt-4" style={{ maxWidth: "400px" }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                aria-label="Email address"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Get Access
              </button>
            </div>
          </div>

          {/* Right Side: Image Section */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="your-image-url-here" // Replace with your actual image path
              alt="Mobile App Mockup"
              className="img-fluid"
              style={{ maxWidth: "300px", borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
