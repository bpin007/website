import React from "react";
import '../styleSheet/About.css'
import Hom from "../asset/About1.jpg";
import { color } from "@mui/system";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Hom})` }}
      ></div>
      <div className="aboutBottom"></div>
      <h1 className=" text-bg-danger" >ABOUT US</h1>
      
      <p className="p-10">
        Welcome to our Tea Shop! We are a cozy and inviting tea house dedicated
        to providing a unique and memorable tea experience for our customers.
        Our tea shop offers a wide variety of high-quality teas sourced from
        around the world, including black, green, oolong, white, and herbal
        blends. We also offer a variety of tea-based drinks, including iced tea,
      
      </p>
    </div>
  );
};

export default About;
