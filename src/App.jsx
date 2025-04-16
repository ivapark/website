import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import MissPoppinsApp from './pages/misspoppinsapp/MissPoppinsApp';
import AboutMe from './pages/aboutme/Aboutme';
import WhyRock from './pages/whyrock/Whyrock';
import MLasl from './pages/mlasl/MLasl';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/misspoppinsapp" element={<MissPoppinsApp />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/whyrock" element={<WhyRock />} />
      <Route path="/mlasl" element={<MLasl />} />



    </Routes>
  );
};

export default App;
