import React from "react";
import { Box, Typography } from "@mui/material";
import Header from '../../components/Header/Header';
import "./MLasl.css";

const MLasl = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Box className="asl-container">
        <Box className="asl-text-section">
          <Typography className="asl-title">
          American Sign Language Detector with Machine Learning
          </Typography>

          <Typography className="asl-subtitle">
            Bridging the Gap between Signers and Technology
          </Typography>

          <Box className="asl-info">
            <Typography className="asl-main-text asl-info-line">
            <Box component="span" sx={{ fontWeight: 500 }}>Overview:</Box>
              <span className="asl-main-text"> Real-time American Sign Language (ASL) alphabet 
              recognition system that uses machine learning and computer vision to detect hand signs from a webcam.
              </span>
            </Typography>

            <Typography className="asl-main-text mp-info-line">
            <Box component="span" sx={{ fontWeight: 500 }}>Role:</Box>
              <span className="asl-main-text"> Front-End, Back-End, UX/UI Designer</span>
            </Typography>

            <Typography className="asl-main-text asl-info-line">
            <Box component="span" sx={{ fontWeight: 500 }}>Toolkit:</Box>
              <span className="asl-main-text"> Python, TensorFlow / Keras, OpenCV, MongoDB Atlas, Docker, Pytest, Black& Flake8, HTML, CSS, JavaScript, Figma </span>
            </Typography>
          </Box>
        </Box>

        <Box className="asl-image-section">
          <img
            src={`${import.meta.env.BASE_URL}mlaslpictures/mlaslmain.svg`}
            alt="ASL Demo"
            className="asl-main-img"
          />
        </Box>

      </Box>

      {/* About the Project Section */}
      <Box className="asl-about-section">
        <Typography className="asl-title1" sx={{ textAlign: "center", marginBottom: "3rem" }}>
          About the Project
        </Typography>

        <Box className="asl-about-content">
          <Box className="asl-about-img-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}mlaslpictures/childsigning1.svg`}
              alt="Child Signing"
              className="asl-about-img"
            />
          </Box>

          <Box className="asl-about-text">
            <Typography className="asl-main-text" paragraph>
              While typing remains an option in digital spaces like video conferencing platforms,
              signing allows users to express tone, emotion, and nuance more naturally.
            </Typography>

            <Typography className="asl-main-text" paragraph>
              This tool supports that expressiveness by recognizing hand signs in real time—making
              communication more intuitive and inclusive for ASL users, and taking a meaningful step
              toward bridging the gap between signers and non-signers in digital platforms.
            </Typography>

            <Typography className="asl-main-text">
              The system uses advanced computer vision techniques to detect and interpret ASL alphabet signs,
              enabling more seamless communication between people who sign and those who don't,
              all within digital environments.
            </Typography>
          </Box>
        </Box>
      </Box>


      {/* ASL Chart Section */}
      <Box className="asl-chart-section">
        <Box className="asl-chart-text">
          <Typography className="asl-main-text">
            At its core is a Convolutional Neural Network (CNN) built with TensorFlow, trained to
            recognize all 26 letters (A–Z) of the ASL alphabet. The model takes in a hand image,
            predicts the most likely letter, and returns both the predicted label and a confidence score.
            Results are logged in a MongoDB database for historical tracking and analysis.
          </Typography>
        </Box>

        <Box className="asl-chart-card">
          <img
            src={`${import.meta.env.BASE_URL}mlaslpictures/aslchart1.svg`}
            alt="ASL Alphabet Chart"
            className="asl-chart-img"
          />
        </Box>
      </Box>

      {/* Demo Section */}
      <Box className="asl-demo-section">
        <Typography className="asl-title1">
          Demo
        </Typography>

        <video className="asl-demo-video" controls>
          <source src={`${import.meta.env.BASE_URL}mlaslpictures/ML_ASL_demo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>


      {/* What I Did Section */}
      <Box className="asl-whatidid-section">
        <Typography className="asl-title1" sx={{ textAlign: "center", marginBottom: "3rem" }}>
          What I Did
        </Typography>

        <Box className="asl-whatidid-content">
          <Box className="asl-whatidid-img-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}mlaslpictures/meworking.svg`}
              alt="Working on ASL Project"
              className="asl-whatidid-img"
            />
          </Box>

          <ul className="asl-whatidid-list">
            <li>
              Built and trained a CNN model using TensorFlow on over 52,000 images—2,000 hand sign images per letter (A–Z)—captured using my own hand under different lighting and angles to improve real-world accuracy and avoid overfitting.
            </li>
            <li>
              Wrote a Flask backend that receives an input image (from webcam or API), preprocesses it using OpenCV, performs prediction, and saves the result to MongoDB Atlas with a timestamp.
            </li>
            <li>
              Containerized the entire app using Docker and Docker Compose to run the machine learning client, web server, and database together.
            </li>
            <li>
              Implemented unit tests with Pytest and added CI/CD workflows using GitHub Actions to automatically lint, format, and test the code on every push.
            </li>
            <li>
              Ensured clean, readable code using Black and Flake8 for formatting and style checks.
            </li>
            <li>
              Designed and implemented the frontend using HTML, CSS, and JavaScript to make the interface clean, accessible, and easy to use.
            </li>
          </ul>
        </Box>
      </Box>

      
      {/* GitHub Button */}
      <Box className="asl-github-button-wrapper">
        <a
          href="https://github.com/software-students-spring2025/4-containers-something/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="asl-github-button"
        >
          View My Github
        </a>
      </Box>




    </>
  );
};

export default MLasl;
