import React from 'react';
import './Navbar1.css';

function Navbar1() {
  // Scroll to the specific section on the page
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Culture Explorer</div>
        <ul className="navbar-menu">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('introduction')}>Introduction</li>
          <li onClick={() => scrollToSection('districts')}>Districts</li>
          <li onClick={() => scrollToSection('languages')}>Languages</li>
          <li onClick={() => scrollToSection('folk-dance-music')}>Folk Dance & Music</li>
          <li onClick={() => scrollToSection('clothing')}>Clothing</li>
          <li onClick={() => scrollToSection('flora')}>Flora</li>
          <li onClick={() => scrollToSection('fauna')}>Fauna</li>
          <li onClick={() => scrollToSection('heritage-sites')}>Heritage Sites</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar1;
