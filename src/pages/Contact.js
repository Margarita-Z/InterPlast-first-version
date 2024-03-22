import React from "react";
import "../assets/css/contact.css";
import ContactSectionOne from "../components/sections/contact-sections/ContactSectionOne";
import ContactForm from "../components/sections/contact-sections/ContactForm";
import FormContact from "../components/sections/contact-sections/FormContact";

function Contact() {
  return (
    <div>
      <ContactSectionOne />
      <ContactForm />
      <FormContact />
    </div>
  );
}

export default Contact;
