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
      <h1>ABOUT US</h1>
      
      <p className="p-5">
        Welcome to our Tea Shop! We are a cozy and inviting tea house dedicated
        to providing a unique and memorable tea experience for our customers.
        Our tea shop offers a wide variety of high-quality teas sourced from
        around the world, including black, green, oolong, white, and herbal
        blends. We also offer a variety of tea-based drinks, including iced tea,
        bubble tea, and tea lattes. In addition to our teas, we offer a
        selection of sweet and savory treats to pair with your tea. Our menu
        features a range of pastries, sandwiches, and light bites that are
        freshly prepared daily using only the finest ingredients. At our tea
        shop, we pride ourselves on providing exceptional customer service and
        creating a warm and welcoming environment for all of our guests. Whether
        you're a tea enthusiast or a first-time visitor, we look forward to
        sharing our passion for tea with you and providing you with a delightful
        tea experience.
      </p>
    </div>
  );
};

export default About;
