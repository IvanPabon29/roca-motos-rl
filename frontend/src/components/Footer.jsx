import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de Pie de Página (Footer)
 * Estructura semántica avanzada con navegación integrada y estilo de taller clásico.
 */
const Footer = () => {
  // Año dinámico para mantener los derechos de autor siempre actualizados automáticamente
  const añoActual = new Date().getFullYear();

  return (
    <footer className="bg-vintage-grisOscuro text-vintage-crema border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección de Bloques Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
          
          {/* Bloque 1: Identidad Corporativa Provisional */}
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xl font-black tracking-wider uppercase">
              Moto<span className="text-vintage-verde italic font-serif">Vintage</span>
            </span>
            <p className="text-vintage-crema/60 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Tu aliado confiable en la ruta. Proveemos componentes seleccionados de alta calidad para que tu motocicleta nunca se detenga.
            </p>
          </div>

          {/* Bloque 2: Enlaces Rápidos de Navegación Estructural */}
          <div className="space-y-3 text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-vintage-verde">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-vintage-cafe transition-colors duration-200">Inicio</Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-vintage-cafe transition-colors duration-200">Productos</Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-vintage-cafe transition-colors duration-200">Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-vintage-cafe transition-colors duration-200">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Bloque 3: Estado de Soporte y Canales Oficiales */}
          <div className="space-y-3 text-center md:text-right">
            <h3 className="text-xs font-bold uppercase tracking-widest text-vintage-verde">
              Soporte Digital
            </h3>
            <p className="text-sm text-vintage-crema/70">
              ¿Dudas con un pedido o referencia?
            </p>
            <div className="pt-2">
              <span className="inline-block px-4 py-2 bg-vintage-verde/20 border border-vintage-verde/30 text-vintage-verde text-xs font-bold uppercase tracking-widest rounded">
                Canal de WhatsApp Activo
              </span>
            </div>
          </div>

        </div>

        {/* Sección Inferior de Derechos de Autor */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-vintage-crema/40 font-medium tracking-wide space-y-2 sm:space-y-0">
          <p>
            &copy; {añoActual} MotoVintage. Todos los derechos reservados.
          </p>
          <p className="font-mono">
            Diseñado & Desarrollado By Ivan Pabon
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;