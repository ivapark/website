import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import Header from '../../components/Header/Header';

const LandingPage = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [hasPlayedBefore, setHasPlayedBefore] = useState(false);

  useEffect(() => {
    const played = localStorage.getItem('videoPlayed');
    if (played) {
      setHasPlayedBefore(true);
    } else {
      setHasPlayedBefore(false);
    }

    window.onbeforeunload = () => {
      localStorage.removeItem('videoPlayed');
    };
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    localStorage.setItem('videoPlayed', 'true');
  };

  return (
    <div className="container">
      {!hasPlayedBefore && !videoEnded && (
        <video
          className="intro-video"
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src={`${import.meta.env.BASE_URL}IvaNewWebsite1.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {(videoEnded || hasPlayedBefore) && (
        <div className="landing-page">
          <Header />

          <div className="content-wrapper">
            <div className="main-content">
              <div className="text-and-rocks">
                <div className="greeting">
                  <p className="typing">Hello, my name is Iva</p>
                </div>

                <div className="rocks-container">
                  {/* Letter I */}
                  <div className="letter-i">
                    <div className="i-column">
                      <img src={`${import.meta.env.BASE_URL}rock1.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rock2.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rock3.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rock4.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rock5.svg`} className="rock" alt="rock" />
                    </div>
                  </div>

                  {/* Letter V */}
                  <div className="letter-v">
                    <div className="v-left">
                      <img src={`${import.meta.env.BASE_URL}rockv1.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv2.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv3.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv4.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv5.svg`} className="rock" alt="rock" />
                    </div>
                    <div className="v-right">
                      <img src={`${import.meta.env.BASE_URL}rockv1.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv6.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv7.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rockv8.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rock1.svg`} className="rock" alt="rock" />
                    </div>
                  </div>

                  {/* Letter A */}
                  <div className="letter-a">
                    <div className="a-left">
                      <img src={`${import.meta.env.BASE_URL}rocka1.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka2.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka3.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka4.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka5.svg`} className="rock" alt="rock" />
                    </div>
                    <div className="a-middle">
                      <img src={`${import.meta.env.BASE_URL}rocka6.svg`} className="rock" alt="rock" />
                    </div>
                    <div className="a-right">
                      <img src={`${import.meta.env.BASE_URL}rocka7.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka6.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka7.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka3.svg`} className="rock" alt="rock" />
                      <img src={`${import.meta.env.BASE_URL}rocka1.svg`} className="rock" alt="rock" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* About Me Section */}
          <div className="about-section" id="about">
            <div className="about-content">
              <div className="about-image">
                <img src={`${import.meta.env.BASE_URL}ivapfptrasparent.svg`} alt="Iva" />
              </div>
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  I’m Iva, a Senior at NYU double majoring in Computer Science and Psychology.
                  I specialize in UI/UX design and problem-solving, with hands-on experience in
                  creating user-centered designs and enhancing digital experiences.
                </p>
                <p>
                  My work spans startups and research projects, where I combine technical expertise
                  with a deep understanding of human behavior to craft impactful solutions.
                </p>
                <p>
                  I’m passionate about bridging technology and humanity, particularly in areas like
                  perception and action, and I’m dedicated to developing accessible and meaningful
                  innovations.
                </p>
              </div>
            </div>
          </div>


          {/* Portfolio Section */}
          <div className="portfolio-section" id="portfolio">
            <h2>Explore My Work</h2>
            <div className="portfolio-grid">
              <div className="portfolio-textandimage">
                <div className="portfolio-item">
                  <Link to="/misspoppinsapp">
                    <div className="portfolio-item-image-container phone">
                      <img src={`${import.meta.env.BASE_URL}MissPoppinsApp.png`} alt="MissPoppins App Redesign" />
                    </div>
                  </Link>
                </div>
                <p>MissPoppins App Redesign</p>
              </div>

              <div className="portfolio-textandimage">
                <div className="portfolio-item">
                  <div className="portfolio-item-image-container desktop">
                    <img src={`${import.meta.env.BASE_URL}MissPoppinsDashboard.png`} alt="MissPoppins Dashboard Redesign" />
                  </div>
                </div>
                <p>MissPoppins Dashboard Redesign</p>
              </div>

              <div className="portfolio-textandimage">
                <div className="portfolio-item">
                  <Link to="/mlasl">
                    <div className="portfolio-item-image-container desktop">
                      <img src={`${import.meta.env.BASE_URL}mlaslpic.svg`} alt="MLasl" />
                    </div>
                  </Link>
                </div>
                <p>Machine Language ASL Detector</p>
              </div>

              <div className="portfolio-textandimage">
                <div className="portfolio-item">
                  <div className="portfolio-item-image-container desktop">
                    <img src={`${import.meta.env.BASE_URL}Nerofilm.png`} alt="Nerofilm" />
                  </div>
                </div>
                <p>Nerofilm</p>
              </div>

              <div className="portfolio-textandimage">
                <div className="portfolio-item">
                  <div className="portfolio-item-image-container desktop">
                    <img src={`${import.meta.env.BASE_URL}MBTIRamenProject.png`} alt="MBTI Ramen Project" />
                  </div>
                </div>
                <p>MBTI Ramen Project</p>
              </div>

              <div className="portfolio-textandimage">
                <div className="portfolio-item">
                  <div className="portfolio-item-image-container phone">
                    <img src={`${import.meta.env.BASE_URL}JobTracker.png`} alt="Job Tracker" />
                  </div>
                </div>
                <p>Job Tracker</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
