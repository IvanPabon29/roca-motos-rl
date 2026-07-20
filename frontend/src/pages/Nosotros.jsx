import React from 'react';

/**
 * Pagina de Información (Nosotros)
 * Presenta la Misión, Visión y Objetivos Estratégicos del negocio.
 */
const Nosotros = () => {
  // Arreglo de objetivos específicos para renderizar la lista limpiamente
  const objetivosEspecificos = [
    'Comercializar repuestos originales y de excelente calidad para diferentes marcas de motocicletas.',
    'Ofrecer una amplia variedad de accesorios y lujos que permitan mejorar el rendimiento de las motocicletas.',
    'Mantener un excelente servicio al cliente basado en el respeto, la honestidad y la responsabilidad.',
    'Innovar constantemente en productos y servicios para satisfacer las necesidades del mercado.',
    'Construir relaciones duraderas con nuestros clientes mediante la confianza y el cumplimiento.',
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in space-y-12">
      
      {/* ENCABEZADO DE LA PÁGINA */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-black text-vintage-grisOscuro uppercase tracking-wider">
          Sobre <span className="text-vintage-cafe italic font-serif normal-case font-normal">Nosotros</span>
        </h1>
        <p className="text-vintage-grisOscuro/70 max-w-xl mx-auto text-base">
          Conoce nuestra filosofía de trabajo, compromiso con la calidad y visión en el sector de motocicletas.
        </p>
      </header>

      {/* BLOQUE: MISIÓN Y VISIÓN (Grilla de 2 columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Misión */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-vintage-verde/40 transition-colors duration-300">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-vintage-verde/10 rounded-xl">
              <svg className="w-8 h-8 text-vintage-verde" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
              Misión
            </h2>
            <p className="text-vintage-grisOscuro/80 text-sm sm:text-base leading-relaxed">
              Brindar a nuestros clientes productos y servicios de alta calidad para motocicletas, ofreciendo repuestos, accesorios y lujos. Nos comprometemos a proporcionar una atención de calidad, precios competitivos y soluciones que garanticen la seguridad, el buen funcionamiento y la satisfacción de cada motociclista.
            </p>
          </div>
        </article>

        {/* Visión */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-vintage-cafe/40 transition-colors duration-300">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-vintage-cafe/10 rounded-xl">
              <svg className="w-8 h-8 text-vintage-cafe" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
              Visión
            </h2>
            <p className="text-vintage-grisOscuro/80 text-sm sm:text-base leading-relaxed">
              Ser una empresa líder y reconocida en Colombia por la excelencia en la comercialización de repuestos, accesorios y servicio técnico para motocicletas, destacándonos por la calidad de nuestros productos, la innovación, la confianza de nuestros clientes y un excelente servicio.
            </p>
          </div>
        </article>

      </div>

      {/* BLOQUE: OBJETIVOS ESTRATÉGICOS */}
      <div className="space-y-8">
        
        {/* Objetivo General */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-vintage-cafe">
            Enfoque Principal
          </span>
          <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
            Objetivo General
          </h2>
          <p className="text-vintage-grisOscuro/80 text-base sm:text-lg leading-relaxed">
            Ofrecer soluciones integrales para motocicletas mediante la venta de repuestos, accesorios y lujos, garantizando calidad, confianza y satisfacción a nuestros clientes.
          </p>
        </article>

        {/* Objetivos Específicos */}
        <article className="bg-white border border-vintage-grisClaro rounded-2xl p-8 shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-vintage-verde">
            Estrategia de Crecimiento
          </span>
          <h2 className="text-2xl font-black text-vintage-grisOscuro uppercase tracking-wide">
            Objetivos Específicos
          </h2>

          <ul className="grid grid-cols-1 gap-4">
            {objetivosEspecificos.map((objetivo, index) => (
              <li 
                key={index} 
                className="flex items-start space-x-3 p-4 rounded-xl bg-vintage-crema/60 border border-vintage-grisClaro/60"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vintage-verde/10 text-vintage-verde font-black text-xs flex items-center justify-center mt-0.5">
                  ✓
                </span>
                <span className="text-vintage-grisOscuro/80 text-sm sm:text-base font-medium leading-normal">
                  {objetivo}
                </span>
              </li>
            ))}
          </ul>
        </article>

      </div>

    </section>
  );
};

export default Nosotros;
