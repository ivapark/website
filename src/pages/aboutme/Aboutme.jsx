import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="about-me-container">
            {/* Profile Picture */}
            <img
                src="/profilepic.png"
                alt="Iva Park"
                className="profile-picture"
            />

            {/* About Me Text */}
            <div className="about-me-text">
                <h1 className="about-me-title">About Me</h1>
                <p className="about-me-paragraph">
                    I'm Iva, a Junior at NYU double majoring in Computer Science and
                    Psychology. I specialize in UI/UX design and problem-solving, with
                    hands-on experience in creating user-centered designs and enhancing
                    digital experiences.
                </p>
                <p className="about-me-paragraph">
                    My work spans startups and research projects, where I combine technical
                    expertise with a deep understanding of human behavior to craft
                    impactful solutions. 
                </p>
                <p className="about-me-paragraph">
                    I'm passionate about bridging technology and
                    humanity, particularly in areas like perception and action, and I'm
                    dedicated to developing accessible and meaningful innovations.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;