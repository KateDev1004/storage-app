import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Eng"); // Default language

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang); // Update the selected language
  };

  // Navigation menu items
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Discover", href: "#discover" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Resources", href: "#resources" },
  ];

  // Language dropdown items
  const languages = [
    { label: "English", value: "English" },
    { label: "Français", value: "Français" },
    { label: "Español", value: "Español" },
    { label: "Deutsch", value: "Deutsch" },
    { label: "中文", value: "中文" },
  ];

  return (
    <header className="header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="/" className="logo navbar-brand d-flex align-items-center">
            <img
              src="assets/images/logo.png"
              alt="FileSafe Logo"
              className="me-2"
            />
            <span className="text-white h3 mb-0 ps-3 pe-5">
              FILE<i>SAFE</i>
            </span>
          </a>

          {/* Hamburger Icon */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and actions */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center">
              <a href="#register" className="text-light me-3">
                Register
              </a>
              <button className="btn text-white px-4 me-3">Sign In</button>

              {/* Language Selector Dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  🌐 {selectedLanguage} &nbsp;
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {languages.map((lang) => (
                    <li key={lang.value}>
                      <a
                        className="dropdown-item"
                        href="#!"
                        onClick={() => handleLanguageChange(lang.label)}
                      >
                        {lang.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
