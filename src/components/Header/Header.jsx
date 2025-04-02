import React from 'react';
import './Header.css';  // Make sure to link the header styling

const Header = () => {
  return (
    <header>
      <div className="header-content">
      <a href="#landing-page" >Iva Park</a>

        <nav>
          <a href="#about-me">About Me</a>
          <a href="#why-rock">Why Rock?</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
