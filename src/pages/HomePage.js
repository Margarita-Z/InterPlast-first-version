import React from "react";
import "../assets/css/home-page.css";
import SectionOne from "../components/sections/home-section/SectionOne";
import SectionTwo from "../components/sections/home-section/SectionTwo";
import Products from "../components/sections/home-section/SectionFour";
import Advantages from "../components/sections/home-section/Advantages";
import Clients from "../components/sections/home-section/Clients";


function HomePage() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <Advantages />
      <Products />
      <Clients />
    </div>
  );
}

export default HomePage;
