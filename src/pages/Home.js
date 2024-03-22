import React from "react";
import "../assets/css/home.css";
import HomeSectionOne from "../components/sections/home-section/HomeSectionOne";
import HomeSectionThree from "../components/sections/home-section/HomeSectionThree";
import HomeSectionFour from "../components/sections/home-section/HomeSectionFour";
import OurPartners from "../components/sections/home-section/OurPartners";
import ChangeAboutUs from "../components/sections/home-section/ChangeAboutUs";

function Home() {
  return (
    <div>
      <HomeSectionOne />
      <ChangeAboutUs />
      <HomeSectionThree />
      <HomeSectionFour />
      <OurPartners />
    </div>
  );
}

export default Home;
