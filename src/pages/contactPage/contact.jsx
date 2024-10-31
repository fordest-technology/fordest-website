import React from "react";
import Background from "/image.png";
import mail from "/mail.png";
import call from "/call.png";
import { Link } from "react-router-dom";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactUsSection";
import ContactInfoSection from "./components/ContactInfoSection";

function Contact() {
  return (
    <div className=" ">
      <ContactHero />
      <ContactSection />
      <ContactInfoSection />
    </div>
  );
}

export default Contact;
