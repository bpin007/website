import React from "react";
import { Link } from "react-router-dom";
import Hom from "../asset/home1.jpg";
import "../styleSheet/Home.css";
const Home = () => {
  return (
    <div
      className="headerContainer"
      style={{ background: `url(${Hom})` }}
    >
      <div className="home">
        <h1>PETWAL TEA SHOP</h1>
      <br></br>
        <p>"TASTE OF RELAXATION"</p>
        <Link to="/Menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
