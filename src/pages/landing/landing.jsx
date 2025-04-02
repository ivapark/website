import React, { useState, useEffect } from 'react';
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
          <source src="/IvaNewWebsite1.mov" type="video/mp4" />
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
                  <p>Hello, my name is Iva</p>
                </div>
                
                <div className="rocks-container">
                  {/* Letter I */}
                  <div className="letter-i">
                    <div className="i-column">
                      <img src="/rock1.svg" className="rock" alt="rock" />
                      <img src="/rock2.svg" className="rock" alt="rock" />
                      <img src="/rock3.svg" className="rock" alt="rock" />
                      <img src="/rock4.svg" className="rock" alt="rock" />
                      <img src="/rock5.svg" className="rock" alt="rock" />
                    </div>
                  </div>

                  {/* Letter V */}
                  <div className="letter-v">
                    <div className="v-left">
                      <img src="/rockv1.svg" className="rock" alt="rock" />
                      <img src="/rockv2.svg" className="rock" alt="rock" />
                      <img src="/rockv3.svg" className="rock" alt="rock" />
                      <img src="/rockv4.svg" className="rock" alt="rock" />
                      <img src="/rockv5.svg" className="rock" alt="rock" />
                    </div>
                    <div className="v-right">
                      <img src="/rockv5.svg" className="rock" alt="rock" />
                      <img src="/rockv6.svg" className="rock" alt="rock" />
                      <img src="/rockv7.svg" className="rock" alt="rock" />
                      <img src="/rockv8.svg" className="rock" alt="rock" />
                      <img src="/rockv9.svg" className="rock" alt="rock" />
                    </div>
                  </div>

                  {/* Letter A */}
                  <div className="letter-a">
                    <div className="a-left">
                      <img src="/rocka1.svg" className="rock" alt="rock" />
                      <img src="/rocka2.svg" className="rock" alt="rock" />
                      <img src="/rocka3.svg" className="rock" alt="rock" />
                      <img src="/rocka3.svg" className="rock" alt="rock" />
                      <img src="/rocka3.svg" className="rock" alt="rock" />
                    </div>
                    <div className="a-middle">
                      <img src="/rocka4.svg" className="rock" alt="rock" />
                    </div>
                    <div className="a-right">
                      <img src="/rocka5.svg" className="rock" alt="rock" />
                      <img src="/rocka6.svg" className="rock" alt="rock" />
                      <img src="/rocka7.svg" className="rock" alt="rock" />
                      <img src="/rocka3.svg" className="rock" alt="rock" />
                      <img src="/rocka3.svg" className="rock" alt="rock" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Portfolio Section */}
          <div className="portfolio-section">
                    <h2>Explore My Work</h2>
                    <div className="portfolio-grid">
                      <div className="portfolio-item">
                        <img src="/MissPoppinsApp.png" alt="MissPoppins App Redesign" />
                        <p>MissPoppins App Redesign</p>
                      </div>
                      <div className="portfolio-item">
                        <img src="/MissPoppinsDashboard.png" alt="MissPoppins Dashboard Redesign" />
                        <p>MissPoppins Dashboard Redesign</p>
                      </div>
                      <div className="portfolio-item">
                        <img src="/LinkLease.png" alt="LinkLease" />
                        <p>LinkLease</p>
                      </div>
                      <div className="portfolio-item">
                        <img src="/Nerofilm.png" alt="Nerofilm" />
                        <p>Nerofilm</p>
                      </div>
                      <div className="portfolio-item">
                        <img src="/MBTIRamenProject.png" alt="MBTI Ramen Project" />
                        <p>MBTI Ramen Project</p>
                      </div>
                      <div className="portfolio-item">
                        <img src="/JobTracker.png" alt="Job Tracker" />
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