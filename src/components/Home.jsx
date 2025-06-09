import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Services from "./Services";
import Pricing from "./Pricing";
import Roadmap from "./RoadMap";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer1 from "./Foooter/Footer1";
import Footer from "./Foooter/Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
        <Footer1 />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
