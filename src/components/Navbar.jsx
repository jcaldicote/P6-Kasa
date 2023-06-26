import React from "react";
import "./Navbar.scss";
import logokasa from "../assets/logokasa.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logokasa} alt="logokasa" />
      </div>
      <Link to="/">
        <div>Accueil</div>
      </Link>
      <Link to="/about">
        <div>A propos</div>
      </Link>
    </nav>
  );
}

export default Navbar;
