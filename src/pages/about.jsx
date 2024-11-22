import React from "react";
import Abounav from "../components/abouts page/abounav";
import "../components/abouts page/aboutnav.css";
import MeetTheFounders from "../components/abouts page/meetTheFounders";
import VideoPlayer from "../components/abouts page/aboutvedio";
import AboutFooter from "../components/abouts page/aboutsfooter";
import "../components/abouts page/aboutsfooter.css";
import AboutFooterhero from "../components/abouts page/aboutsfooterhero";
import "../components/abouts page/aboutsfooterhero.css";
import AboutTrusthero from "../components/abouts page/aboutstrusthero";
import "../components/abouts page/aboutstrusthero.css";
import Abouttest from "../components/abouts page/abouttest";

export default function About() {
  return (
    <div>
      <Abounav />
      <Abouttest />
      <AboutTrusthero />
      <MeetTheFounders />
      <VideoPlayer />
      <AboutFooterhero />
      <AboutFooter />
    </div>
  );
}
