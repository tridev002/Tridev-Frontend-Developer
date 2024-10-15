import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EthAI</div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">Why Us</a></li>
        <li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Whitepaper</button>
      </div>
    </nav>
  );
}

export default Navbar;
