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


          {/* Why Rock Section */}
          <div className="whyrock-section" id="whyrock">
            <div className="whyrock-content">
              <div className="whyrock-text">
                <h2>Why Rock?</h2>
                <h3>Design with Purpose</h3>
                <p className="whyrock-purple">
                  Strength isn’t just born — it’s built, skill by skill. Like rocks shaped through weathering,
                  my skills as a designer were forged through cycles of breaking down complexity, learning,
                  and rebuilding with greater clarity. Each rock represents a skill — carefully formed through
                  challenge, refinement, and growth — shaping who I am as a designer today.
                </p>
                <p className="whyrock-note">
                  Hover on each rock to learn more!
                </p>
              </div>

              <div className="whyrock-rocks">
                <div className="rock-grid">
                  <div className="rock-item">
                    <img
                      src={`${import.meta.env.BASE_URL}Whyrock/problemsolving.svg`}
                      alt="Problem Solving"
                      className="rock-skill"
                    />
                    
                    <div className="rock-popup">
                      <div className="rock-popup-header">
                        <img
                          src={`${import.meta.env.BASE_URL}Whyrock/problemsolvingicon.svg`}
                          alt="Problem Solving Icon"
                          className="popup-icon"
                        />
                        <h4>Problem Solving</h4>
                      </div>
                      <p>
                        At Miss Poppins, I tackled complex user challenges by redesigning the pricing model
                        and streamlining the scheduling system, boosting user engagement by 30%.
                        I approach design problems by breaking them down into core pain points and
                        crafting clear, actionable solutions.
                      </p>
                    </div>
                  </div>




                  <div className="rock-item">
                  <img
                    src={`${import.meta.env.BASE_URL}Whyrock/userResearch.svg`}
                    alt="User Research"
                    className="rock-skill"
                  />
                  
                  <div className="rock-popup">
                    <div className="rock-popup-header">
                      <img
                        src={`${import.meta.env.BASE_URL}Whyrock/usericon.svg`}
                        alt="Problem Solving Icon"
                        className="popup-icon"
                      />
                      <h4>User Research</h4>
                    </div>
                    <p>
                      I leveraged affinity diagrams and user research findings to reimagine core features at Miss Poppins, 
                      directly addressing pain points in navigation and scheduling. I believe effective design starts with
                      listening, observing, and deeply analyzing user behaviors and feedback.
                    </p>
                  </div>
                </div>


                <div className="rock-item">
                  <img
                    src={`${import.meta.env.BASE_URL}Whyrock/collaboration.svg`}
                    alt="Collaboration"
                    className="rock-skill"
                  />
                  
                  <div className="rock-popup">
                    <div className="rock-popup-header">
                      <img
                        src={`${import.meta.env.BASE_URL}Whyrock/collaborationicon.svg`}
                        alt="Problem Solving Icon"
                        className="popup-icon"
                      />
                      <h4>Collaboration</h4>
                    </div>
                    <p>
                    As a Quality Team Lead at Scale AI and a Research Assistant at NYU, collaboration was 
                    key to refining projects, improving outcomes, and building strong workflows. Moreover, 
                    at Miss Poppins, I worked closely with cross-functional teams — including engineers, 
                    researchers, and stakeholders — to translate ideas into user-centered realities.
                    </p>
                  </div>
                </div>


                <div className="rock-item">
                  <img
                    src={`${import.meta.env.BASE_URL}Whyrock/interaction.svg`}
                    alt="Interaction Design"
                    className="rock-skill"
                  />
                  
                  <div className="rock-popup">
                    <div className="rock-popup-header">
                      <img
                        src={`${import.meta.env.BASE_URL}Whyrock/interactionicon.svg`}
                        alt="Interaction Design Icon"
                        className="popup-icon"
                      />
                      <h4>Interaction Design</h4>
                    </div>
                    <p>
                      I designed and wireframed seamless scheduling flows for Miss Poppins using Figma, 
                      where I have over 4 years of hands-on experience. I focus on clear microinteractions 
                      like real-time updates and automated reminders, crafting interactions that feel natural, 
                      fluid, and rewarding — reducing friction while enhancing user confidence.
                    </p>
                  </div>
                </div>

                <div className="rock-item">
                  <img
                    src={`${import.meta.env.BASE_URL}Whyrock/visual.svg`}
                    alt="Visual Storytelling"
                    className="rock-skill"
                  />
                  
                  <div className="rock-popup">
                    <div className="rock-popup-header">
                      <img
                        src={`${import.meta.env.BASE_URL}Whyrock/visualicon.svg`}
                        alt="Visual Storytelling Icon"
                        className="popup-icon"
                      />
                      <h4>Visual Storytelling</h4>
                    </div>
                    <p>
                    Through projects like NeroFilm and my MBTI Ramen, I focused on creating intuitive, 
                    visually engaging interfaces that guide users naturally through their experience. 
                    I believe every design tells a story — and I shape visual flows that connect users 
                    emotionally and logically to the product.
                    </p>
                  </div>
                </div>

                <div className="rock-item">
                  <img
                    src={`${import.meta.env.BASE_URL}Whyrock/adaptability.svg`}
                    alt="Adaptability"
                    className="rock-skill"
                  />
                  
                  <div className="rock-popup">
                    <div className="rock-popup-header">
                      <img
                        src={`${import.meta.env.BASE_URL}Whyrock/adaptabilityicon.svg`}
                        alt="Adaptability Icon"
                        className="popup-icon"
                      />
                      <h4>Adaptability</h4>
                    </div>
                    <p>
                    From building a machine learning-based ASL detector to leading cross-cultural teams at Scale AI, 
                    I’ve thrived in fast-changing environments by staying flexible and learning quickly. I adapt my 
                    design and technical approaches to meet evolving user needs, technologies, and team goals.
                    </p>
                  </div>
                </div>


                <div className="rock-item">
                  <img
                    src={`${import.meta.env.BASE_URL}Whyrock/empathy.svg`}
                    alt="Empathy"
                    className="rock-skill"
                  />
                  
                  <div className="rock-popup">
                    <div className="rock-popup-header">
                      <img
                        src={`${import.meta.env.BASE_URL}Whyrock/empathyicon.svg`}
                        alt="Empathy Icon"
                        className="popup-icon"
                      />
                      <h4>Empathy</h4>
                    </div>
                    <p>
                    From building a machine learning-based ASL detector to leading cross-cultural 
                    teams at Scale AI, I’ve thrived in fast-changing environments by staying flexible 
                    and learning quickly. I adapt my design and technical approaches to meet evolving 
                    user needs, technologies, and team goals.
                    </p>
                  </div>
                </div>


                </div>
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
