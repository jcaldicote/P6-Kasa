import React from 'react';
import './Navbar.scss';
import logokasa from '../assets/logokasa.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logokasa} alt="logokasa" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  );
}

export default Navbar;
