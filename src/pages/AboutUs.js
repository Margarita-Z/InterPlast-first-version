import React from "react";
import "../assets/css/about-us.css";
import AboutUsSectionOne from "../components/sections/aboutUs-sections/AboutUsSectionOne";
//import AboutUsSectionTwo from "../components/sections/aboutUs-sections/AboutUsSectionTwo";
//import Gallery from "../components/sections/aboutUs-sections/AboutUsSectionThree";
//import AboutUsExmp from "../components/sections/aboutUs-sections/AboutUsExmp";
//import AboutUsExamp1 from "../components/sections/aboutUs-sections/AboutUsExamp1";
import AboutUsGallery from "../components/sections/aboutUs-sections/AboutUsGallery";
import AboutUsSectionFour from "../components/sections/aboutUs-sections/AboutUsSectionFour";
import History from "../components/sections/aboutUs-sections/History";

function AboutUs() {
  return (
    <div>
      <AboutUsSectionOne />
      <History />
      <AboutUsSectionFour />
      <AboutUsGallery />
    </div>
  );
}

export default AboutUs;
