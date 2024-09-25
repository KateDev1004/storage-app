import React from "react";
import HeroSection from "./HeroSection";
import Integration from "./Integration";
import Features from "./Features";
import Testimonials from "./Testominals";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Integration />
      <Features />
      <Testimonials />
    </div>
  );
}

export default Home;
