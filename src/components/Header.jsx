// Header.js
import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/img/logo.webp"; 
import { Link, NavLink } from "react-router-dom";

/**
 * Componente Header
 * 
 * Muestra el encabezado del sitio, que incluye el logo y la navegación principal.
 * Implementa un menú responsivo con un botón hamburger para dispositivos móviles.
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Alterna la visibilidad del menú móvil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="div-logo">
        <img src={logo} alt="Logo Domicilios Express" title="Logo-Domicilio" />
        <h3>Domicilios Express</h3>
      </Link>

      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" onClick={toggleMenu}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/domicilios" onClick={toggleMenu}>
              Domicilios
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" onClick={toggleMenu}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={toggleMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Se añade la clase "open" al contenedor del botón hamburger segun el estado */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
