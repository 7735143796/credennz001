import React from "react";
import Contactusnav from "../components/contactus/contactusnav";
import "../components/contactus/contactusnav.css";
import Testimonial from "../components/home/testimonial";
import "../components/home/testimonial.css";
import ContactFooterhero from "../components/contactus/contactfooterhero";
import "../components/contactus/contactfooterhero.css";
import ContactFooter from "../components/contactus/contactfooter";
import "../components/contactus/contactfooter.css"
export default function Contactus() {
  return (
    <div>
      <Contactusnav />
      <Testimonial />
      <ContactFooterhero />
      <ContactFooter />
    </div>
  );
}
