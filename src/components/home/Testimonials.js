import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    quote:
      "A digital wallet platform that provides complete storage solutions to meet your entire daily tasks.",
    author: "Doni Darman",
    title: "Founder of skyclub Corp",
    img: "assets/images/avatar1.png",
  },
  {
    quote:
      "FileSafe helped us streamline our processes and saved us a ton of time!",
    author: "Emma Watson",
    title: "CEO of TimeSavvy Solutions",
    img: "assets/images/avatar2.png",
  },
  {
    quote:
      "An incredible tool that offers all the functionality we need in one place.",
    author: "John Doe",
    title: "CTO of FutureWorks Inc.",
    img: "assets/images/avatar3.png",
  },
];

const Testimonials = () => {
  // State to track the currently displayed testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const fadeDuration = 300; // 300ms fade effect

  // Function to handle "Next" button click with fade effect
  const nextTestimonial = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      setIsFading(false);
    }, fadeDuration);
  };

  // Function to handle "Prev" button click with fade effect
  const prevTestimonial = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
      );
      setIsFading(false);
    }, fadeDuration);
  };

  return (
    <div className="container testimonials-section">
      <div className="row align-items-start justify-content-between">
        {/* Left Side: Heading and Description */}
        <div className="col-lg-5 col-12 text-md-start text-center mb-4 mb-md-0">
          <h2 className="mb-4">What our customers say about us</h2>
          <p>
            More than 700 million people who have tried the application and gave
            their opinion
          </p>
        </div>

        {/* Right Side: Testimonial */}
        <div className="col-lg-6 col-12 text-center text-md-start">
          <div className={`testimonial-content ${isFading ? "fade" : ""}`}>
            <blockquote className="testimonial-quote">
              "{testimonialsData[currentIndex].quote}"
            </blockquote>
            <hr></hr>
            <div className="d-flex">
              <div className="testimonial-author mt-4 d-flex align-items-center justify-content-center justify-content-md-start mt-3">
                <img
                  src={testimonialsData[currentIndex].img}
                  alt={testimonialsData[currentIndex].author}
                  className="author-img me-3"
                />
                <div className="mt-3">
                  <h5 className="author-name">
                    {testimonialsData[currentIndex].author}
                  </h5>
                  <p className="author-title">
                    {testimonialsData[currentIndex].title}
                  </p>
                </div>
              </div>
              <div className="ms-auto d-flex align-items-center justify-content-center mt-3">
                <button
                  className="btn-arrow btn-prev pb-1"
                  onClick={prevTestimonial}
                >
                  &lt;
                </button>
                <button
                  className="btn-arrow btn-next ms-2 pb-1 ps-2"
                  onClick={nextTestimonial}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
