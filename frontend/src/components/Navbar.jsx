import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Componente de Navegación Superior (Navbar)
 * Utiliza React Router para la navegación instantánea entre páginas.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Permite saber en qué página estamos para activar los enlaces

  // Función auxiliar para resaltar el enlace de la página activa
  const activeClass = (path) => {
    return location.pathname === path
      ? 'text-vintage-verde'
      : 'text-vintage-crema hover:text-vintage-cafe';
  };

  return (
    <nav className="sticky top-0 z-50 bg-vintage-grisOscuro/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-wider text-white uppercase">
              Moto<span className="text-vintage-verde italic font-serif">Vintage</span>
            </Link>
          </div>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex space-x-10 font-bold text-sm tracking-widest uppercase">
            <Link to="/" className={`${activeClass('/')} transition-colors duration-200`}>
              Inicio
            </Link>
            <Link to="/productos" className={`${activeClass('/productos')} transition-colors duration-200`}>
              Productos
            </Link>
            <Link to="/nosotros" className={`${activeClass('/nosotros')} transition-colors duration-200`}>
              Nosotros
            </Link>
            <Link to="/contacto" className={`${activeClass('/contacto')} transition-colors duration-200`}>
              Contacto
            </Link>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-vintage-crema hover:text-vintage-verde focus:outline-none p-2"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <svg className="h-6 width-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 width-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMenuOpen && (
        <div className="md:hidden bg-vintage-grisOscuro border-b border-white/10 px-4 pt-2 pb-4 space-y-2 font-bold uppercase tracking-wider text-center text-sm">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-vintage-crema hover:bg-white/5 rounded">Inicio</Link>
          <Link to="/productos" onClick={() => setIsMenuOpen(false)} className="block py-2 text-vintage-crema hover:bg-white/5 rounded">Productos</Link>
          <Link to="/nosotros" onClick={() => setIsMenuOpen(false)} className="block py-2 text-vintage-crema hover:bg-white/5 rounded">Nosotros</Link>
          <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className="block py-2 text-vintage-crema hover:bg-white/5 rounded">Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
