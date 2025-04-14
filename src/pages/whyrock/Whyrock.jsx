import React from "react";
import "./WhyRock.css";
import Header from "../../components/Header/Header";
import rockMain from "/rock2.svg";

const WhyRock = () => {
  return (
    <div className="whyrock-container">
      <Header />
      <h1 className="whyrock-title">Design with Purpose</h1>

      <h2 className="whyrock-subtitle">Why Rock?</h2>

      <div className="rock-section">
        <img src={rockMain} alt="main rock" className="rock-bg" />
        <p className="rock-description">
          Strength emerges through cycles of breakdown and reconstruction. Like rocks that
          weather, transform, and reform into new structures, both life and design find
          resilience through the continuous process of breaking apart and rebuilding into
          something more durable.
        </p>
      </div>
    </div>
  );
};

export default WhyRock;
