import React from 'react';
import heroImg from '../assets/hero.png'; // Importación de la imagen 

/**
 * Componente Hero Section
 * Presentación principal de la tienda con tipografía fuerte y estética de taller clásico.
 */
const Hero = () => {
  return (
    <section id="inicio" className="relative bg-vintage-crema overflow-hidden border-b border-vintage-grisClaro py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO Y LLAMADO A LA ACCIÓN */}
          <div className="text-center md:text-left space-y-6">
            <span className="inline-block px-3 py-1 bg-vintage-verde/10 text-vintage-verde font-bold text-xs uppercase tracking-widest rounded">
              Repuestos & Accesorios Para Tu Moto
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-vintage-grisOscuro uppercase tracking-tight leading-none">
              Pura esencia <br />
              <span className="text-vintage-cafe font-serif italic normal-case font-normal">Mecánica</span> para tu moto
            </h1>
            
            <p className="text-base sm:text-lg text-vintage-grisOscuro/70 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Encuentra el catálogo de repuestos de alta rotación para mantener tu motocicleta en perfecto estado. Calidad garantizada, atención experta y asesoría directa por WhatsApp.
            </p>
            
            <div className="pt-4">
              <a
                href="/productos"
                className="inline-block px-8 py-4 bg-vintage-verde hover:bg-vintage-cafe text-white font-bold tracking-widest text-sm uppercase rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Explorar Catálogo
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: IMAGEN CON MARCO VINTAGE */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-md md:max-w-full aspect-square md:aspect-video lg:aspect-square bg-vintage-grisClaro rounded-2xl border-4 sm:border-8 border-white shadow-2xl overflow-hidden group">
              {/* Overlay suave para integrar la imagen al tono vintage */}
              <div className="absolute inset-0 bg-vintage-cafe/5 mix-blend-multiply z-10 pointer-events-none" />
              
              <img
                src={heroImg}
                alt="Repuestos de motocicletas vintage"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
