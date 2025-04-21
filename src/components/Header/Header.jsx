import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';


const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">Iva Park</Link> 

        <nav>
          <a href="#about">About Me</a>
          <a href="#whyrock">Why Rock?</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
