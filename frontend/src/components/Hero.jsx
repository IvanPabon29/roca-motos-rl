import { Link } from 'react-router-dom';

/**
 * Componente Hero Section - Diseño Minimalista e Imagen Realista
 */
const Hero = () => {
  // Imagen real de taller/repuestos de motocicletas (Unsplash)
  const imagenMecanica = "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFsbGVyJTIwZGUlMjBtb3Rvc3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <section id="inicio" className="relative bg-vintage-crema border-b border-vintage-grisClaro/60 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO Y LLAMADO A LA ACCIÓN */}
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-4">
            <span className="inline-block px-3 py-0.5 bg-vintage-verde/10 border border-vintage-verde/30 text-vintage-verde font-bold text-xs uppercase tracking-widest rounded-md">
              Repuestos & Accesorios Para Tu Moto
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vintage-grisOscuro uppercase tracking-tight leading-tight">
              El camino es tuyo<br />
              <span className="text-vintage-verde font-serif italic normal-case font-normal">Nosotros</span> lo equipamos.
            </h1>
            
            <p className="text-sm sm:text-base text-vintage-grisOscuro/80 max-w-lg leading-relaxed">
              Encuentra el catálogo de repuestos de alta rotación para mantener tu motocicleta en perfecto estado. Calidad garantizada, atención experta y asesoría directa por WhatsApp.
            </p>
            
            <div className="pt-2 w-full sm:w-auto">
              <Link
                to="/productos"
                className="inline-block w-full sm:w-auto text-center px-7 py-3 bg-vintage-verde hover:bg-vintage-cafe text-white font-bold tracking-widest text-xs uppercase rounded-lg shadow-sm transition-colors duration-200"
              >
                Explorar Catálogo
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA: IMAGEN REAL SIN BORDES ANCHOS */}
          <div className="flex justify-center items-center w-full">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-sm bg-vintage-grisClaro">
              <img
                src={imagenMecanica}
                alt="Taller y repuestos de motocicleta Ebenezer Motor's RL"
                className="w-full h-[260px] sm:h-[340px] lg:h-[380px] object-cover object-center"
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
