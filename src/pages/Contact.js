import React from "react";
import "../assets/css/contact.css";
import SectionTwo from "../components/sections/contact-us/SectionTwo";
import SectionThree from "../components/sections/contact-us/SectionThree";
import SectionOne from "../components/sections/contact-us/SectionOne";

function Contact() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default Contact;
