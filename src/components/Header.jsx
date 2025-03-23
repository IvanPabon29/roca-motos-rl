import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/img/logo.webp"; 
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Link to="/" className="div-logo">
        <img src={logo} alt="logo" title="Logo-Domicilio" />
        <h3>Domicilios Express</h3>
      </Link>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/" exact onClick={toggleMenu}>Inicio</NavLink></li>
          <li><NavLink to="/servicios" onClick={toggleMenu}>Servicios</NavLink></li>
          <li><NavLink to="/domicilios" onClick={toggleMenu}>Domicilios</NavLink></li>
          <li><NavLink to="/nosotros" onClick={toggleMenu}>Nosotros</NavLink></li>
          <li><NavLink to="/contacto" onClick={toggleMenu}>Contacto</NavLink></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
}

export default Header;
