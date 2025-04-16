import React from "react";
import "./Aboutme.css";
import Header from "../../components/Header/Header";


const About = () => {
  return (
    <div className="about-container">
      <Header />
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={`${import.meta.env.BASE_URL}ivapfp.png`} className="ivapfp" alt="ivapfpn" />
        <div className="about-text">
          <p>
            I’m Iva, a Junior at NYU double majoring in Computer Science and Psychology.
            I specialize in UI/UX design and problem-solving, with hands-on experience in
            creating user-centered designs and enhancing digital experiences.
          </p>
          <p>
            My work spans startups and research projects, where I combine technical expertise
            with a deep understanding of human behavior to craft impactful solutions.
          </p>
          <p>
            I’m passionate about bridging technology and humanity, particularly in areas like
            perception and action, and I’m dedicated to developing accessible and meaningful innovations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
