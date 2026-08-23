import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de Pie de Página (Footer)
 * Incluye navegación, enlace directo a WhatsApp Business y redes sociales.
 */
const Footer = () => {
  // Año dinámico para mantener los derechos de autor siempre actualizados automáticamente
  const añoActual = new Date().getFullYear();

  // Configuración de WhatsApp Business
  const numeroWhatsApp = "573142669478";
  const mensajePredeterminado = encodeURIComponent(
    "Hola, estoy interesado en repuestos o servicios técnicos para mi motocicleta."
  );
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajePredeterminado}`;

  return (
    <footer className="bg-vintage-grisOscuro text-vintage-crema border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección Principal de Bloques Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
          
          {/* Bloque 1: Identidad Corporativa Oficial */}
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xl font-black tracking-wider uppercase text-white">
              Roca<span className="text-vintage-verde italic font-serif font-normal"> Motos RL</span>
            </span>
            <p className="text-vintage-crema/60 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Tu aliado confiable en la ruta. Proveemos componentes seleccionados de alta calidad para que tu motocicleta nunca se detenga.
            </p>

            {/* Redes Sociales Oficiales */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-vintage-crema/50 block">
                Síguenos en Redes
              </span>
              <div className="flex justify-center md:justify-start space-x-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rocamotosrl?utm_source=qr&igsi=MWk3cXFoNWFzZ29odw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-white/5 hover:bg-vintage-verde hover:text-white rounded-lg text-vintage-crema/80 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1GZrdQ3KwY/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 bg-white/5 hover:bg-vintage-verde hover:text-white rounded-lg text-vintage-crema/80 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@rocamotorl?_r=1&_t=ZS-9958Gu7dsb1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="p-2 bg-white/5 hover:bg-vintage-verde hover:text-white rounded-lg text-vintage-crema/80 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 2.29 6.338 6.338 0 00-.73 7.027 6.332 6.332 0 008.287 2.457 6.31 6.31 0 003.856-5.83V9.289a8.16 8.16 0 004.77 1.517V7.361a4.832 4.832 0 01-1.554-.675z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bloque 2: Navegación Estructural */}
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

          {/* Bloque 3: Soporte Digital & WhatsApp Directo */}
          <div className="space-y-3 text-center md:text-right">
            <h3 className="text-xs font-bold uppercase tracking-widest text-vintage-verde">
              Soporte Digital
            </h3>
            <p className="text-sm text-vintage-crema/70">
              ¿Dudas con un repuesto o compatibilidad?
            </p>
            <div className="pt-2">
              <a
                href={enlaceWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-vintage-verde hover:bg-vintage-cafe text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>

        </div>

        {/* Sección Inferior de Derechos de Autor */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-vintage-crema/40 font-medium tracking-wide space-y-2 sm:space-y-0">
          <p>
            &copy; {añoActual} Roca Motos RL. Todos los derechos reservados.
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