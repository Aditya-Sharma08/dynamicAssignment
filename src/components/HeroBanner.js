import React from "react";
import "./HeroBanner.css";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const { title, description } = useSelector((state) => state.hero);
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
