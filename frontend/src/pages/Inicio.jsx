import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

/**
 * Página Principal de Inicio
 * Renderiza el Hero y secciones informativas clave.
 */
const Inicio = () => {
  // Configuración de WhatsApp Business
  const numeroWhatsApp = "573142669478";
  const mensajePredeterminado = encodeURIComponent(
    "Hola, no encuentro un repuesto en el sitio web y me gustaría consultar disponibilidad."
  );
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajePredeterminado}`;

  // Datos para categorías destacadas
  const categorias = [
    {
      titulo: 'Kits de Arrastre',
      descripcion: 'Cadenas, catalinas y piñones de alta durabilidad.',
      icono: (
        <svg className="w-8 h-8 text-vintage-verde" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Sistema de Frenos',
      descripcion: 'Pastillas, bandas y discos para tu seguridad.',
      icono: (
        <svg className="w-8 h-8 text-vintage-verde" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      titulo: 'Lubricantes & Aceites',
      descripcion: 'Protección óptima para el motor de tu moto.',
      icono: (
        <svg className="w-8 h-8 text-vintage-verde" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      titulo: 'Accesorios & Lujos',
      descripcion: 'Cascos, luces LED, impermeables y más.',
      icono: (
        <svg className="w-8 h-8 text-vintage-verde" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  // Datos de beneficios
  const beneficios = [
    {
      titulo: 'Asesoría Técnica',
      descripcion: 'Te ayudamos a verificar la compatibilidad exacta del repuesto para tu modelo.',
      icono: '🔧',
    },
    {
      titulo: 'Calidad Garantizada',
      descripcion: 'Trabajamos con marcas homologadas y repuestos originales de alta rotación.',
      icono: '🛡️',
    },
    {
      titulo: 'Atención Directa',
      descripcion: 'Atención rápida y experta por WhatsApp.',
      icono: '⚡',
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. SECCIÓN HERO (COMPONENTE MODULAR) */}
      <Hero />

      {/* 2. SECCIÓN DE CATEGORÍAS DESTACADAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-black text-vintage-grisOscuro uppercase tracking-wider">
            Líneas de <span className="text-vintage-verde italic font-serif font-normal">Productos</span>
          </h2>
          <p className="text-vintage-grisOscuro/70 text-sm max-w-md mx-auto">
            Componentes esenciales seleccionados para el máximo rendimiento de tu vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, index) => (
            <div
              key={index}
              className="bg-white border border-vintage-grisClaro rounded-2xl p-6 hover:border-vintage-verde transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-vintage-crema rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {cat.icono}
                </div>
                <h3 className="text-lg font-black text-vintage-grisOscuro uppercase">
                  {cat.titulo}
                </h3>
                <p className="text-vintage-grisOscuro/70 text-xs leading-relaxed">
                  {cat.descripcion}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/productos"
                  className="text-xs font-bold uppercase tracking-wider text-vintage-verde hover:text-vintage-cafe flex items-center space-x-1"
                >
                  <span>Ver repuestos</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN DE BENEFICIOS / POR QUÉ ELEGIRNOS */}
      <section className="bg-vintage-grisOscuro text-vintage-crema py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-vintage-verde">
              Respaldo & Compromiso
            </span>
            <h2 className="text-3xl font-black uppercase tracking-wider">
              ¿Por qué comprar en <span className="text-vintage-verde italic font-serif font-normal">Ebenezer</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center space-y-4 hover:border-vintage-verde/50 transition-colors"
              >
                <div className="text-4xl">{item.icono}</div>
                <h3 className="text-xl font-black uppercase text-white">
                  {item.titulo}
                </h3>
                <p className="text-vintage-crema/70 text-xs leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BANNER DE LLAMADO A LA ACCIÓN (CTA) DIRECTO A WHATSAPP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-vintage-crema border-2 border-vintage-verde/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-black text-vintage-grisOscuro uppercase tracking-tight">
            ¿No encuentras el repuesto que buscas?
          </h2>
          <p className="text-vintage-grisOscuro/70 text-sm sm:text-base max-w-2xl mx-auto">
            Consulta directamente la disponibilidad con nuestro equipo técnico por WhatsApp. Te respondemos al instante con precio y compatibilidad.
          </p>
          <div>
            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-vintage-verde hover:bg-vintage-cafe text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-colors duration-300"
            >
              {/* Ícono Vectorial de WhatsApp */}
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Inicio;
