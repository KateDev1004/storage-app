import React from "react";
import "./Features.css";

const accordionItems = [
  {
    id: "one",
    title: "Centralize your folder more easily",
    content:
      "Automate time-consuming processes with powerful admin and collaboration tools.",
  },
  {
    id: "two",
    title: "Schedule your upload",
    content: "Easily schedule your uploads and keep your files organized.",
  },
  {
    id: "three",
    title: "High level of security to protect your files",
    content:
      "Your files are protected with industry-standard security protocols.",
  },
  {
    id: "four",
    title: "Smart Management",
    content: "Smart file management for optimal workflow.",
  },
];

const Features = () => {
  return (
    <div className="features container mt-5">
      <div className="heading row mb-5 mx-auto text-center">
        <h1 className="col-12">
          Join over 700 million registered users who trust FileSafe
        </h1>
        <p className="col-12 mt-3">
          FileSafe brings everything—traditional files, cloud content, and web
          shortcuts—together in one place.
        </p>
      </div>

      <div className="row align-items-center pt-5">
        {/* Left Side: Image */}
        <div className="image col-lg-6 col-12">
          <img
            src="assets/images/features-phone.png"
            alt="Phone Mockup"
            className="img-fluid phone-image"
          />
        </div>

        {/* Right Side: Accordion */}
        <div className="accordian-container col-lg-6 col-12">
          <h2 className="heading text mb-5">See what we can do</h2>

          <div className="accordion" id="featuresAccordion">
            {accordionItems.map((item, index) => (
              <div
                className="accordion-item custom-accordion-item"
                key={item.id}
              >
                <h2 className="accordion-header" id={`heading${item.id}`}>
                  <button
                    className={`accordion-button ${
                      index === 0 ? "" : "collapsed"
                    } custom-accordion-button`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${item.id}`}
                  data-bs-parent="#featuresAccordion"
                >
                  <div className="accordion-body custom-accordion-body">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
