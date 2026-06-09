import React from 'react';

/**
 * Página de Canales de Atención y Contacto
 */
const Contacto = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6 animate-fade-in">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-vintage-grisOscuro uppercase tracking-wider">
          Canales de <span className="text-vintage-verde italic font-serif normal-case font-normal">Contacto</span>
        </h1>
        <p className="text-vintage-grisOscuro/70 max-w-md mx-auto text-base">
          ¿Tienes dudas sobre la compatibilidad de una pieza? Escríbenos o visítanos directamente en el local.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        {/* Bloque de Información de Horario */}
        <div className="bg-white border border-vintage-grisClaro p-6 rounded-xl text-left shadow-sm">
          <h3 className="font-bold text-vintage-verde uppercase text-sm tracking-wider mb-2">Ubicación y Horarios</h3>
          <p className="text-vintage-grisOscuro font-medium text-sm">Bogotá, Colombia</p>
          <p className="text-vintage-grisOscuro/60 text-xs mt-1">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
        </div>

        {/* Bloque de Acción Inmediata */}
        <div className="bg-white border border-vintage-grisClaro p-6 rounded-xl text-left flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="font-bold text-vintage-cafe uppercase text-sm tracking-wider mb-2">Asesoría Inmediata</h3>
            <p className="text-vintage-grisOscuro font-medium text-sm">WhatsApp Business Activo</p>
          </div>
          <button className="mt-4 w-full py-3 bg-vintage-verde hover:bg-vintage-cafe text-white font-bold rounded uppercase text-xs tracking-wider shadow-md transition-colors duration-300">
            Chatear Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
