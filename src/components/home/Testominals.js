import React from "react";

const Testimonials = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side: Header */}
        <div className="col-md-6">
          <h2>What our customers say about us</h2>
          <p>
            More than 700 million people who have tried the application and gave
            their opinion
          </p>
        </div>

        {/* Right Side: Testimonial */}
        <div className="col-md-6 text-center">
          <blockquote className="blockquote">
            <p className="mb-4">
              "A digital wallet platform that provides complete financial
              solutions to meet your entire financial tasks"
            </p>
            <footer className="blockquote-footer d-flex justify-content-center align-items-center">
              <img
                src="your-profile-image-url-here" // Replace with the actual image URL
                alt="Customer"
                className="rounded-circle mr-3"
                width="50"
                height="50"
              />
              <div className="text-left">
                <strong>Doni Darman</strong>
                <br />
                Founder of skyclub Corp
              </div>
            </footer>
          </blockquote>

          {/* Left/Right Arrow Controls */}
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-secondary mx-2">&lt;</button>
            <button className="btn btn-outline-secondary mx-2">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
