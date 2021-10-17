import React from "react";
import aboutimage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor
          voluptate dolores, dicta officiis earum tempora, perspiciatis
          cupiditate quod, nisi odio corrupti a unde mollitia asperiores vero
          laboriosam facilis nesciunt.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
};

export default About;
