import React from 'react';

/**
 * Página de Información Corporativa (Nosotros)
 */
const Nosotros = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6 animate-fade-in">
      <h1 className="text-4xl font-black text-vintage-grisOscuro uppercase tracking-wider">
        Sobre <span className="text-vintage-cafe italic font-serif normal-case font-normal">Nosotros</span>
      </h1>
      
      <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 text-left md:p-12 space-y-6 shadow-md">
        <p className="text-vintage-grisOscuro/80 leading-relaxed text-base sm:text-lg">
          [Plantilla] Aquí irá la historia de cómo nació el emprendimiento de repuestos. Ideal para conectar con los entusiastas de las motocicletas que buscan un taller y proveedor de confianza.
        </p>
        <p className="text-vintage-grisOscuro/80 leading-relaxed text-base sm:text-lg">
          Enfoque en la calidad, repuestos seleccionados y una atención al mecánico y motero del común con la velocidad que necesitan.
        </p>
      </article>
    </section>
  );
};

export default Nosotros;