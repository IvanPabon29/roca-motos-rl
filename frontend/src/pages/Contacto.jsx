import React from 'react';

/**
 * Página de Contacto y Ubicación
 * Muestra información de atención, enlace directo a WhatsApp Business,
 * redes sociales y mapa de localización del taller.
 */
const Contacto = () => {
  // Configuración del enlace de WhatsApp Business
  const numeroWhatsApp = "573142669478";
  const mensajePredeterminado = encodeURIComponent(
    "Hola, estoy interesado en repuestos o servicios técnicos para mi motocicleta."
  );
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajePredeterminado}`;

  // Arreglo de redes sociales
  const redesSociales = [
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com/rocamotosrl?utm_source=qr&igsi=MWk3cXFoNWFzZ29odw%3D%3D',
      icono: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      nombre: 'Facebook',
      url: 'https://www.facebook.com/share/1GZrdQ3KwY/',
      icono: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      nombre: 'TikTok',
      url: 'https://www.tiktok.com/@rocamotorl?_r=1&_t=ZS-9958Gu7dsb1',
      icono: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 2.29 6.338 6.338 0 00-.73 7.027 6.332 6.332 0 008.287 2.457 6.31 6.31 0 003.856-5.83V9.289a8.16 8.16 0 004.77 1.517V7.361a4.832 4.832 0 01-1.554-.675z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in space-y-12">
      
      {/* ENCABEZADO */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-black text-vintage-grisOscuro uppercase tracking-wider">
          Canales de <span className="text-vintage-verde italic font-serif normal-case font-normal">Contacto</span>
        </h1>
        <p className="text-vintage-grisOscuro/70 max-w-xl mx-auto text-base">
          Estamos listos para atenderte. Escríbenos directamente o visítanos en nuestro punto de atención.
        </p>
      </header>

      {/* TARJETAS DE INFORMACIÓN GENERAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 1. WHATSAPP BUSINESS */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-vintage-verde/50 transition-all duration-300 group">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-vintage-verde/10 rounded-xl group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-vintage-verde" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
              WhatsApp Business
            </h2>
            <p className="text-vintage-grisOscuro/70 text-sm leading-relaxed">
              Respuesta inmediata para cotización de repuestos, accesorios y consultas mecánicas.
            </p>
            <p className="text-lg font-black text-vintage-cafe font-mono">
              +57 314 2669478
            </p>
          </div>

          <div className="pt-6">
            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-vintage-verde hover:bg-vintage-cafe text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow transition-colors duration-300"
            >
              Escribir al WhatsApp
            </a>
          </div>
        </article>

        {/* 2. HORARIO DE ATENCIÓN */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-vintage-cafe/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-vintage-cafe/10 rounded-xl">
              <svg className="w-8 h-8 text-vintage-cafe" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
              Horarios de Atención
            </h2>
            
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm border-b border-vintage-grisClaro/60 pb-2">
                <span className="font-bold text-vintage-grisOscuro">Lunes a Sábado:</span>
                <span className="text-vintage-verde font-bold">7:00 am - 4:00 pm</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-vintage-grisOscuro">Domingos y Festivos:</span>
                <span className="text-vintage-cafe/80 font-medium italic">Cerrado</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-vintage-grisOscuro/60 italic pt-6">
            * Se reciben solicitudes por WhatsApp fuera de horario para atención al siguiente día hábil.
          </p>
        </article>

        {/* 3. REDES SOCIALES */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-vintage-grisOscuro/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-vintage-grisOscuro/10 rounded-xl">
              <svg className="w-8 h-8 text-vintage-grisOscuro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
              Síguenos
            </h2>
            <p className="text-vintage-grisOscuro/70 text-sm leading-relaxed">
              Entérate de nuevos repuestos, promociones especiales y contenido sobre mantenimiento de motos.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6">
            {redesSociales.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                title={red.nombre}
                className="flex flex-col items-center justify-center p-3 bg-vintage-crema border border-vintage-grisClaro rounded-xl text-vintage-grisOscuro hover:bg-vintage-grisOscuro hover:text-white transition-colors duration-300"
              >
                {red.icono}
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
                  {red.nombre}
                </span>
              </a>
            ))}
          </div>
        </article>

      </div>

      {/* SECCIÓN DE UBICACIÓN Y MAPA */}
      <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-vintage-grisClaro/60 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-vintage-verde">
              Punto de Venta & Taller
            </span>
            <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
              Nuestra Ubicación
            </h2>
            <p className="text-vintage-grisOscuro/80 text-sm sm:text-base">
              Visítanos para asesoría personalizada en repuestos y servicios técnicos.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-vintage-grisOscuro bg-vintage-crema px-4 py-3 rounded-xl border border-vintage-grisClaro self-start md:self-center">
            <svg className="w-5 h-5 text-vintage-cafe flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-bold text-sm">
              Colombia
            </span>
          </div>
        </div>

        {/* CONTENEDOR DEL MAPA (Google Maps Iframe) */}
        <div className="w-full h-80 bg-vintage-crema rounded-xl overflow-hidden border border-vintage-grisClaro relative">
          <iframe
            title="Ubicación Ebenezer Motor's RL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508930.2974052309!2d-74.24789531818274!3d4.648625933092284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6a53a%3A0x2000216773a4b086!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </article>

    </section>
  );
};

export default Contacto;
