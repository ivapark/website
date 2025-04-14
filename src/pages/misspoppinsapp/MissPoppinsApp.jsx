import React, { useState } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import './MissPoppinsApp.css';
import Header from '../../components/Header/Header';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const AffinityCarousel = () => {
  const images = [
    "/misspoppinsapp/image3.svg",
    "/misspoppinsapp/image4.svg",
    "/misspoppinsapp/image5.svg",
    "/misspoppinsapp/image6.svg",
    "/misspoppinsapp/image7.svg",
    "/misspoppinsapp/image8.svg",
    "/misspoppinsapp/image9.svg",
    "/misspoppinsapp/image10.svg"
  ];
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box className="mp-affinity-section">
      <Typography className="mp-subtitle">Affinity Mapping</Typography>
      <p className="mp-main-text mp-affinity-description">
        The affinity diagram below uses different colors to represent insights from each participant:
      </p>

      <Box className="mp-carousel-wrapper">
        <IconButton onClick={handlePrev} className="mp-carousel-button">
          <ArrowBackIosIcon />
        </IconButton>

        <img
          src={images[currentIndex]}
          alt={`Affinity image ${currentIndex + 2}`}
          className="mp-carousel-image"
        />

        <IconButton onClick={handleNext} className="mp-carousel-button">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const MissPoppinsApp = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Box className="mp-container">
        <Box className="mp-text-section">
          <Typography className="mp-title">
            MissPoppins App Redesign:
          </Typography>

          <Typography className="mp-subtitle">
            Simplifying Navigation and Boosting User Engagement
          </Typography>

          <Box className="mp-info">
            <Typography className="mp-main-text mp-info-line">
            <Box component="span" sx={{ fontWeight: 500 }}>Overview:</Box>
              <span className="mp-main-text"> Streamlined navigation and introduced 
               strategic pricing to enhance the coach-client experience.</span>
            </Typography>

            <Typography className="mp-main-text mp-info-line">
            <Box component="span" sx={{ fontWeight: 500 }}>Role:</Box>
              <span className="mp-main-text"> UX Researcher, UX/UI Designer</span>
            </Typography>

            <Typography className="mp-main-text mp-info-line">
            <Box component="span" sx={{ fontWeight: 500 }}>Toolkit:</Box>
              <span className="mp-main-text"> Figma, FigJam, Pencil and Paper</span>
            </Typography>
          </Box>
        </Box>

        <Box className="mp-image-section">
        <video
          className="mp-video"
          src="/misspoppinsapp/misspoppinsappvideo1.mov"
          autoPlay
          muted
          loop
          playsInline
        />
      </Box>

      </Box>

      {/* Background Section */}
      <Box className="mp-background-section">
        <Typography className="mp-title">Background</Typography>

        <Typography className="mp-main-text">
          <span className="highlight-purple">MissPoppins</span> is an app that connects parents with expert coaches through
        </Typography>

        <Box className="mp-background-icons">
          <Box className="mp-background-icon">
            <img src="/misspoppinsapp/consultation.svg" alt="Consultation" />
            <Typography className="mp-background-small-text">One time free consultation</Typography>
          </Box>

          <Box className="mp-background-icon">
            <img src="/misspoppinsapp/videochat.svg" alt="Video Support" />
            <Typography className="mp-background-small-text">Ongoing support via video calls and chat</Typography>
          </Box>

          <Box className="mp-background-icon">
            <img src="/misspoppinsapp/webinars.svg" alt="Articles and Webinars" />
            <Typography className="mp-background-small-text">Access to articles and webinars</Typography>
          </Box>
        </Box>

        <Typography className="mp-main-text">
          It’s a <strong>one-stop</strong> platform for parenting needs like sleep, nutrition, development, and wellness.
        </Typography>
      </Box>




      {/* Research Goal Section */}
        <Box className="mp-research-section">
        <Typography className="mp-title">Research Goal</Typography>

        <Typography className="mp-main-text mp-goal-text">
            The goal is to understand parents'{" "}
            <span className="highlight-purple">needs</span>,{" "}
            <span className="highlight-purple">preferences</span>, and{" "}
            <span className="highlight-purple">pain points</span> when seeking
            coaching services and accessing parenting resources.
        </Typography>

        {/* 3-Step Research Insights */}
        <Box className="mp-research-steps">
            <Box className="mp-step">
            <Typography className="mp-small-text step-number">1.</Typography>
            <Typography className="mp-small-text step-label">
                How parents navigate the process of finding the right coach
            </Typography>
            <img src="/misspoppinsapp/step1.svg" alt="Step 1 Icon" />
            </Box>
            <Box className="mp-step">
            <Typography className="mp-small-text step-number">2.</Typography>
            <Typography className="mp-small-text step-label">
                What their expectations for consultations and ongoing support
            </Typography>
            <img src="/misspoppinsapp/step2.svg" alt="Step 2 Icon" />
            </Box>
            <Box className="mp-step">
            <Typography className="mp-small-text step-number">3.</Typography>
            <Typography className="mp-small-text step-label">
                How they engage with articles, webinars, and community features
            </Typography>
            <img src="/misspoppinsapp/step3.svg" alt="Step 3 Icon" />
            </Box>
        </Box>

        {/* Subcategory Icons */}
        <Box className="mp-subcategories">
          <Box className="mp-subcategory">
            <img src="/misspoppinsapp/info-sources.svg" alt="Common Info Sources" />
            <Typography className="mp-small-text-research">Common Information Sources</Typography>
          </Box>

          <Box className="mp-subcategory">
            <img src="/misspoppinsapp/architecture.svg" alt="Confusing Info Architecture" />
            <Typography className="mp-small-text-research">Confusing Information Architecture for App</Typography>
          </Box>

          <Box className="mp-subcategory">
            <img src="/misspoppinsapp/package.svg" alt="Package Pricing" />
            <Typography className="mp-small-text-research">Package Pricing</Typography>
          </Box>

          <Box className="mp-subcategory">
            <img src="/misspoppinsapp/community.svg" alt="Community Support" />
            <Typography className="mp-small-text-research">Community and Peer Support (Mentorship)</Typography>
          </Box>

          <Box className="mp-subcategory">
            <img src="/misspoppinsapp/accessibility.svg" alt="Resource Access" />
            <Typography className="mp-small-text-research">Resource and Information Accessibility</Typography>
          </Box>
        </Box>

        <Typography className="mp-small-text mp-note">
            (To improve organization and clarity, I added subcategories to provide more detailed insights related to the primary topics)
        </Typography>

        <Typography className="mp-main-text mp-conclusion">
            This research aims to inform design improvements that enhance usability, streamline access to resources, and create a supportive and user-friendly experience.
        </Typography>
        </Box>



        {/* Methodology */}
        <Box className="mp-methodology-section">
          <Typography className="mp-title">Methodologies</Typography>

          <Box className="mp-methodology-list-wrapper">
            <Box className="mp-methodology-list">
              <Typography className="mp-main-text">1. Competitive analysis</Typography>
              <Typography className="mp-main-text">2. User interviews</Typography>
            </Box>
          </Box>
        </Box>



        {/* Competitive Analysis */}
        <Box className="mp-analysis-section">
          <Typography className="mp-subsection-title">1. Competitive analysis</Typography>

          <Box className="mp-image-wrapper">
            <img
              src="/misspoppinsapp/image2.png"
              alt="Competitive Analysis Table"
              className="mp-hover-image"
            />
          </Box>
        </Box>

        {/* Key Findings from the Competitive Analysis  */}
        <Box className="mp-key-findings-section">
          <Typography className="mp-subtitle">Key Findings from the Competitive Analysis</Typography>

          {/* Finding 1 */}
          <Box className="mp-finding">
            <img src="/misspoppinsapp/strength.svg" alt="Strengths Icon" />
            <Box className="mp-finding-text">
              <Typography className="mp-finding-title">Strengths to Leverage</Typography>
              <Typography className="mp-finding-body">
                Competitors excel in personalized support, community engagement, and comprehensive services but often lack direct-to-consumer accessibility.
              </Typography>
            </Box>
          </Box>

          {/* Finding 2 */}
          <Box className="mp-finding">
            <img src="/misspoppinsapp/strength.svg" alt="Strengths Icon" />
            <Box className="mp-finding-text">
              <Typography className="mp-finding-title">Opportunities for MissPoppins</Typography>
              <Typography className="mp-finding-body">
                Build a strong mobile experience, foster community features, and offer accessible services beyond employer partnerships.
              </Typography>
            </Box>
          </Box>

          {/* Finding 3 */}
          <Box className="mp-finding">
            <img src="/misspoppinsapp/keydiff.svg" alt="Key Differentiator Icon" />
            <Box className="mp-finding-text">
              <Typography className="mp-finding-title">Key Differentiator</Typography>
              <Typography className="mp-finding-body" sx={{ fontStyle: 'italic' }}>
                Address accessibility gaps by combining proactive care, personalized support, and community-driven features for all parents.
              </Typography>
            </Box>
          </Box>
        </Box>



        {/* user interview*/}
        <Box className="mp-user-interviews-section">
          <Typography className="mp-subsection-title">2. User interviews</Typography>

          <Box className="mp-user-interview-content">
            <Box className="mp-user-interview-info">
              <img src="/misspoppinsapp/number7.svg" alt="7 Interviews" />
              <Typography className="mp-main-text">user interviews conducted</Typography>
            </Box>

            <img
              src="/misspoppinsapp/userinterview.svg"
              alt="User Interviewees"
              className="mp-user-interview-image"
            />
          </Box>
        </Box>


        {/* affinity diagram */}
      <AffinityCarousel />



        {/* Research Finding1 */}
        <Box className="mp-findings-section">
          <Typography className="mp-title">Research Findings</Typography>

          <Box className="mp-finding-header">
            <img src="/misspoppinsapp/researchfindingsicon1.svg" alt="Finding Icon" className="mp-finding-icon" />
            <Typography className="mp-subtitle mp-finding-subtitle">
              1. How parents navigate the process of finding the right coach
            </Typography>
          </Box>

          <Box className="mp-finding-body">
            <img
              src="/misspoppinsapp/researchfindings1.svg"
              alt="Finding Insight Sticky Note"
              className="mp-finding-postit1"
            />
          </Box>
        </Box>

        {/* Research Finding 2 */}
        <Box className="mp-researchfinding-section">
          <Box className="mp-finding-header">
            <img src="/misspoppinsapp/researchfindings2icon.svg" className="mp-finding-icon" />
            <Typography className="mp-finding-subtitle">
              2. What their expectations for consultations and ongoing support
            </Typography>
          </Box>

          <Box className="mp-row">
            <img src="/misspoppinsapp/researchfindings2.svg" className="mp-finding-postit" />
            <img src="/misspoppinsapp/researchfindings2-1.svg" className="mp-finding-postit" />
            <img src="/misspoppinsapp/researchfindings2-2.svg" className="mp-finding-postit" />
          </Box>

          <Box className="mp-row mp-bottom-row">
            <img src="/misspoppinsapp/researchfindings2-3.svg" className="mp-finding-postit" />
            <img src="/misspoppinsapp/researchfindings2-4.svg" className="mp-finding-postit" />
          </Box>
        </Box>

        {/* Research Finding 3 */}
        <Box className="mp-researchfinding-section">
          <Box className="mp-finding-header">
            <img src="/misspoppinsapp/researchfindings3icon.svg" className="mp-finding-icon2" />
            <Typography className="mp-finding-subtitle2">
              3. How they engage with articles, webinars, and community features
            </Typography>
          </Box>

          <Box className="mp-row">
            <img src="/misspoppinsapp/researchfindings3.svg" className="mp-finding-postit" />
            <img src="/misspoppinsapp/researchfindings3-1.svg" className="mp-finding-postit" />
          </Box>

          <Box className="mp-row mp-bottom-row">
            <img src="/misspoppinsapp/researchfindings3-2.svg" className="mp-finding-postit" />
            <img src="/misspoppinsapp/researchfindings3-3.svg" className="mp-finding-postit" />
          </Box>
        </Box>





        {/* How Might We*/}
        <Box className="mp-hmw-section">
          <Typography className="mp-subtitle">Turning Key Insights into How Might We Statements</Typography>

          <Box className="mp-hmw-header">
            <Box className="mp-hmw-column">
              <img src="/misspoppinsapp/hmwproblem.svg" alt="Problem Icon" />
              <Typography className="mp-hmw-subtitle">Problem</Typography>
            </Box>
            <Box className="mp-hmw-column">
              <img src="/misspoppinsapp/hmwidea.svg" alt="Idea Icon" />
              <Typography className="mp-hmw-subtitle">How Might We</Typography>
            </Box>
          </Box>

          {/* 4 Problem-Solution Pairs */}
          {[
            {
              problem: "Flexibility in rescheduling appointments and reliable, curated resources are essential.",
              solution: (
                <>How might we create a platform that offers <span className="highlight-red">flexibility in rescheduling appointments</span> to accommodate the busy schedules of parents?</>
              ),
            },
            {
              problem: "Many prefer pay-per-session models or subscription options depending on the frequency of use.",
              solution: (
                <>How might we <span className="highlight-red">design a package or session model</span> that feels intuitive and manageable for users, ensuring they aren’t overwhelmed by options?</>
              ),
            },
            {
              problem: "Unclear navigation and scattered resources are common frustrations.",
              solution: (
                <>How might we design a navigation system that <span className="highlight-red">simplifies access to resources</span> and eliminates user frustration?</>
              ),
            },
            {
              problem: "Most parents are open to mentorship opportunities but emphasize the need for trustworthy advice.",
              solution: (
                <>How might we <span className="highlight-red">build a community</span> that ensures the advice shared is trustworthy and credible?</>
              ),
            },
          ].map((item, idx) => (
            <Box className="mp-hmw-row" key={idx}>
              <Box className="mp-hmw-bubble">{item.problem}</Box>
              <img src="/misspoppinsapp/yellowarrow.svg" alt="Arrow" className="mp-hmw-arrow" />
              <Box className="mp-hmw-bubble">{item.solution}</Box>
            </Box>
          ))}
        </Box>


          {/* How Might We 1 */}
          <Box className="mp-hmw-answer-section">
            <Typography className="mp-subtitle">Answering How Might We Statements (Design Process)</Typography>

            <Box className="mp-hmw-container">
              <Typography className="mp-hmw-question">
                How might we create a platform that offers flexibility in rescheduling appointments to accommodate the busy schedules of parents?
              </Typography>
            </Box>

            {/* Strategy Icons and Steps */}
            <Box className="mp-hmw-steps">
              <Box className="mp-hmw-step">
                <Box className="mp-hmw-icontext">
                  <img src="/misspoppinsapp/calendaricon.svg" alt="Calendar Icon" className="mp-hmw-icon" />
                  <Box>
                    <Typography className="mp-hmw-step-title">
                      1. <b>Integrate a scheduling calendar</b>
                    </Typography>
                    <Typography className="mp-hmw-step-desc">
                      option that allows users to view, manage, and reschedule their appointments seamlessly.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="mp-hmw-step">
                <Box className="mp-hmw-icontext">
                  <img src="/misspoppinsapp/timeicon.svg" alt="Timer Icon" className="mp-hmw-icon" />
                  <Box>
                    <Typography className="mp-hmw-step-title">
                      2. <b>Include real-time availability updates</b>
                    </Typography>
                    <Typography className="mp-hmw-step-desc">
                      from consultants and automated reminders for upcoming sessions.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>


            {/* Before and After Comparison */}
            <Box className="mp-hmw-before-after-row">

            {/* Before */}
            <Box className="mp-hmw-combo">
              <Typography className="mp-hmw-label">Before</Typography>
              <Box className="mp-hmw-pair">
                <img src="/misspoppinsapp/hmwbefore1.svg" alt="Before Scheduling" className="mp-hmw-phone" />
                <Typography className="mp-hmw-text">
                  Currently, the app lacks a scheduling feature, requiring users to communicate with the coach via chat after purchasing a package, which is inconvenient for both parties.
                </Typography>
              </Box>
            </Box>

            {/* After */}
            <Box className="mp-hmw-combo">
              <Typography className="mp-hmw-label">After</Typography>
              <Box className="mp-hmw-pair">
                <img src="/misspoppinsapp/hmwafter1.svg" alt="After Scheduling" className="mp-hmw-phone" />
                <Typography className="mp-hmw-text">
                  Adding a scheduling calendar with flexible rescheduling capabilities will streamline the process and reduce effort for both users and coaches. <br /><br />
                  <br /><br /><br /><br /><br /><br /><br /><br />
                  Providing real-time availability updates, along with reminders, will allow parents to reschedule directly through the app without needing to contact support.
                </Typography>
              </Box>
            </Box>
          </Box>
          </Box>

          {/* How Might We 2 */}
          <Box className="mp-hmw-answer-section">
            <Box className="mp-hmw-container">
              <Typography className="mp-hmw-question">
                How might we design a package or session model that feels intuitive and manageable for users, ensuring they aren't overwhelmed by options?
              </Typography>
            </Box>

            {/* Strategy Icons and Steps */}
            <Box className="mp-hmw-steps">
              <Box className="mp-hmw-step">
                <Box className="mp-hmw-icontext">
                  <img src="/misspoppinsapp/selectchoices.svg" alt="Select Icon" className="mp-hmw-icon" />
                  <Box>
                    <Typography className="mp-hmw-step-title">
                      1. <b>Use the Iyengar and Lepper Jam Study and Decoy Effect to <br /> structure session packages into three clear tiers:</b>
                    </Typography>
                    <ul className="mp-hmw-bullets">
                      <li><b>Mini:</b> 1 session for those with one-off needs.</li>
                      <li><b>Pro:</b> 3 sessions for short-term or specific support.</li>
                      <li><b>Elite:</b> 9 sessions for comprehensive, long-term guidance.</li>
                    </ul>
                  </Box>
                </Box>
              </Box>

              <Box className="mp-hmw-step">
                <Box className="mp-hmw-icontext">
                  <img src="/misspoppinsapp/goldstar.svg" alt="Gold Star" className="mp-hmw-icon2" />
                  <Box>
                    <Typography className="mp-hmw-step-title2">
                      2. <b>Highlight popular or recommended packages</b> to provide decision-making cues and reduce the feeling of being overwhelmed.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography className="mp-hmw-refs">
                      <b>Iyengar and Lepper Jam Study:</b> This study shows that too many choices can overwhelm individuals, leading to lower satisfaction and reduced likelihood of making a decision.
                      <br /><br />
                      <b>Decoy Effect:</b> Adding a strategically priced option can influence users to choose a more favorable or premium tier.
                    </Typography>
            </Box>

            {/* Before and After Comparison */}
            <Box className="mp-hmw-before-after-row">
              <Box className="mp-hmw-combo">
                <Typography className="mp-hmw-label">Before</Typography>
                <Box className="mp-hmw-pair">
                  <img src="/misspoppinsapp/hmwbefore2.svg" alt="Before Packages" className="mp-hmw-phone" />
                  <Typography className="mp-hmw-text">
                    The app’s current package page is <b>cluttered and disorganized</b>, presenting users with a wide range of session numbers and price points.
                    <br /><br />
                    This <span className="highlight">lack of uniformity</span> leads to confusion and makes selecting a package overwhelming.
                  </Typography>
                </Box>
              </Box>

              <Box className="mp-hmw-combo">
                <Typography className="mp-hmw-label">After</Typography>
                <Box className="mp-hmw-pair">
                  <img src="/misspoppinsapp/hmwafter2.svg" alt="After Packages" className="mp-hmw-phone" />
                  <Typography className="mp-hmw-text">
                    By incorporating the Decoy Effect into the session and pricing structure, and clearly labeling and describing each tier with a focus on their specific benefits, the <span className="highlight">decision-making process becomes simpler</span>, reducing decision fatigue and creating a more user-friendly experience.
                    <br /><br />
                    Highlighting popular or recommended packages can help users feel more confident in their choice and reduce the time and effort spent evaluating all available options.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>


          {/* How Might We 3 */}
          <Box className="hmw3-section">
          <Typography className="hmw3-question">
            How might we design a navigation system that simplifies access to resources and eliminates user frustration?
          </Typography>

          <Box className="hmw3-step">
            <img src="/misspoppinsapp/hmwsearchicon.svg" alt="Search Icon" className="hmw3-icon" />
            <Box className="hmw3-step-text">
              <span className="hmw3-bold">
                1. Introduce a Generative AI-powered search bar
              </span>{" "}
              that allows users to type natural language queries and receive tailored recommendations for articles, sessions, or features.
            </Box>
          </Box>

          <Box className="mp-hmw-before-after-row3">
              <Box className="mp-hmw-combo3">
                <Typography className="mp-hmw-label3">Before</Typography>
                <Box className="mp-hmw-pair3">
                  <img src="/misspoppinsapp/hmwbefore3.svg" alt="Before Packages" className="mp-hmw-phone" />
                  <Typography className="mp-hmw-text">
                  <br /><br />

                  The app's rigid category-based organization lacks intuitive pathways, making it difficult for users to quickly find relevant content.RetryClaude can make mistakes. Please double-check responses.
                  </Typography>
                </Box>
              </Box>

              <Box className="mp-hmw-combo3">
                <Typography className="mp-hmw-label">After</Typography>
                <Box className="mp-hmw-pair3">
                  <img src="/misspoppinsapp/hmwafter3.svg" alt="After Packages" className="mp-hmw-phone" />
                  <Typography className="mp-hmw-text">
                  For example, users can ask questions like "Which coaching package is best for first-time parents?" "What are some quick tips for calming a crying baby?" or "Can you help me find articles on toddler sleep training?"
                  <br /><br />
                  <br /><br />
                  <br /><br />

                  The AI will provide responses based on the app's verified expert-reviewed content, ensuring accurate and reliable information.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* HMW 3.2 - Sliding Sidebar */}
            <Box className="hmw3-subsection">
              <Box className="hmw3-step">
                <img src="/misspoppinsapp/hmwslidebar.svg" alt="Slidebar Icon" className="hmw3-icon" />
                <Box className="hmw3-step-text">
                  <span className="hmw3-bold">2. Simplify the information architecture</span> by reducing unnecessary clicks and pages. Implement a <span className="hmw3-red">sliding sidebar</span> menu for quick access to key categories like resources, appointment scheduling, and session packages.
                </Box>
              </Box>

              <Box className="hmw3-row-slider">
                {/* BEFORE COLUMN */}
                <Box className="hmw3-column">
                  <Typography className="hmw3-label3-2">Before</Typography>
                  <Box className="hmw3-img-description">
                  <video
                    className="mp-video3-2"
                    src="/misspoppinsapp/hmw3-2.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                    <Box className="hmw3-text-list">
                      <Typography className="hmw3-caption">
                        Currently, booking an appointment involves navigating through multiple steps:
                      </Typography>
                      <ol className="hmw3-list">
                        <li>Selecting one of nine categories (lactation, sleep, nutrition, parenting, etc.)</li>
                        <li>Choosing whether the appointment is for themselves or their child</li>
                        <li>Viewing package options</li>
                        <li>Clicking to see package details</li>
                        <li>Navigating to the coach profile</li>
                        <li>And finally accessing the coach’s package offerings</li>
                      </ol>
                      <Typography className="hmw3-note">
                        This complex process makes it difficult to find and book information efficiently.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* AFTER COLUMN */}
                <Box className="hmw3-column">
                  <Typography className="hmw3-label3-2">After</Typography>
                  <Box className="hmw3-img-description">
                    <video
                      className="mp-video3-2"
                      src="/misspoppinsapp/hmw3-2-2.mov"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <Typography className="hmw3-text">
                      By consolidating these steps into a <span className="hmw3-red">sliding sidebar</span>, users can view coach details, package information, and session options seamlessly in one place, without the need to click through multiple pages. <br /><br />
                      This approach streamlines the process, saving time and reducing frustration.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* HMW 4 */}
            <Box className="hmw4-section">
              <Typography className="hmw4-question">
                How might we build a community that ensures the advice shared is trustworthy and credible?
              </Typography>

              <Box className="hmw4-top-row">
                {/* Step 1 */}
                <Box className="hmw4-step">
                  <img src="/misspoppinsapp/hmw4hand.svg" alt="Mentorship Icon" className="hmw4-icon" />
                  <Typography className="hmw4-step-text">
                    <b>1. Develop a mentorship community</b> where parents can connect with mentors or peers who have relevant experience.
                  </Typography>
                </Box>

                {/* Step 2 */}
                <Box className="hmw4-step">
                  <img src="/misspoppinsapp/hmw4chat.svg" alt="Chat Icon" className="hmw4-icon" />
                  <Typography className="hmw4-step-text">
                    <b>2. Enable an open chat feature</b> that is monitored and reviewed by Generative AI for moderation, ensuring that shared advice is credible and any inappropriate or misleading information is flagged or removed promptly.
                  </Typography>
                </Box>
              </Box>

              <Box className="hmw4-phone-row">
                <img src="/misspoppinsapp/hmw4before.svg" className="hmw4-phone" alt="Before Chat & Mentor" />
                <img src="/misspoppinsapp/hmw4after.svg" className="hmw4-phone" alt="After Chat & Mentor" />
              </Box>
            </Box>


            {/* UX Design Wireframes Section */}
            <Box className="mp-wireframes-section">
              <Typography className="mp-title">UX Design</Typography>
              <Typography className="mp-subtitle-wireframe">Wireframes Sketch</Typography>

              <Box className="mp-wireframes-row">
                <img src="/misspoppinsapp/wireframe1.svg" alt="Wireframe 1" className="mp-wireframe-img" />
                <img src="/misspoppinsapp/wireframe2.svg" alt="Wireframe 2" className="mp-wireframe-img" />
                <img src="/misspoppinsapp/wireframe3.svg" alt="Wireframe 3" className="mp-wireframe-img" />
              </Box>
            </Box>


            {/* UX Design Final Wireframes Section */}
            <Box className="mp-wireframes-section">
              <Typography className="mp-subtitle">Wireframes </Typography>

              <Box className="mp-wireframes-row">
                <img src="/misspoppinsapp/hmwafter3.svg" alt="Wireframe 1" className="mp-wireframe-img" />
                <img src="/misspoppinsapp/hmwafter2.svg" alt="Wireframe 2" className="mp-wireframe-img" />
                <img src="/misspoppinsapp/hmwafter1.svg" alt="Wireframe 3" className="mp-wireframe-img" />
              </Box>

              <a
                href="https://www.figma.com/design/5dB9u3QPRTMTGqOQzCRLgr/Iva-Portfolio-Projects?node-id=1-910&t=UZcxefPIcX2asmg2-1"
                target="_blank"
                rel="noopener noreferrer"
                className="mp-wireframes-button"
              >
                View Full Wireframe
              </a>
            </Box>





                                  

        </Box>





    </>
  );
};

export default MissPoppinsApp;
