import React from 'react';

/**
 * Página de Catálogo de Productos
 * Estructura base para el grid de repuestos de motocicletas.
 */
const Productos = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center animate-fade-in">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-vintage-grisOscuro uppercase tracking-wider mb-4">
          Catálogo de <span className="text-vintage-verde italic font-serif normal-case font-normal">Repuestos</span>
        </h1>
        <p className="text-vintage-grisOscuro/70 max-w-xl mx-auto text-base sm:text-lg">
          Explora nuestros componentes disponibles. Haz clic en cualquier artículo para solicitar información técnica directa por WhatsApp.
        </p>
      </header>

      {/* Grilla provisional estructurada de forma semántica */}
      <div className="border-2 border-dashed border-vintage-grisClaro bg-white rounded-2xl py-24 text-vintage-grisOscuro/40 font-bold uppercase tracking-widest shadow-sm">
        Espacio asignado para la grilla del catálogo (Sanity.io)
      </div>
    </section>
  );
};

export default Productos;
