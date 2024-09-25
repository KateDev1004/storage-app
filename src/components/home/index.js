import React from "react";
import HeroSection from "./HeroSection";
import Tools from "./Tools";
import Features from "./Features";
import Testimonials from "./Testominals";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Tools />
      <Features />
      <Testimonials />
    </div>
  );
}

export default Home;
