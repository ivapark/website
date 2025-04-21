import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  
  const handleLogoClick = () => {
    localStorage.removeItem('videoPlayed');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="header-content">
        <Link to="/" onClick={handleLogoClick}>Iva Park</Link> 

        <nav>
          <button onClick={() => scrollToSection('about')}>About Me</button>
          <button onClick={() => scrollToSection('whyrock')}>Why Rock?</button>
          <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
