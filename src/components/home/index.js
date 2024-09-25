import React from "react";
import HeroSection from "./HeroSection";
import Tools from "./Tools";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Upgrade from "./Upgrade";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Tools />
      <Features />
      <Testimonials />
      <Upgrade />
    </div>
  );
}

export default Home;
