import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanity';

/**
 * Página de Catálogo de Productos con Filtros Avanzados
 * Incluye barra de búsqueda reactiva y selectores de categoría.
 * Recupera los repuestos en tiempo real desde Sanity.io usando GROQ.
 */
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  // Estados para el control de filtros en tiempo real
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');

  // Listado unificado de categorías para renderizar los botones de filtro
  const categorias = [
    { label: 'Todos', value: 'todas' },
    { label: 'Motor', value: 'motor' },
    { label: 'Frenos', value: 'frenos' },
    { label: 'Transmisión', value: 'transmision' },
    { label: 'Suspensión', value: 'suspension' },
    { label: 'Eléctrico', value: 'electrico' },
    { label: 'Lujos', value: 'lujos' },
    { label: 'Aceites', value: 'aceites' },
  ];

  useEffect(() => {
    // Consulta GROQ optimizada
    const query = '*[_type == "producto"]';

    client
      .fetch(query)
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al conectar con Sanity Content Lake:', error);
        setCargando(false);
      });
  }, []);

  // Formateador estándar para pesos colombianos (COP)
  const formatPrecio = (valor) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(valor);
  };

  /**
   * Lógica de Filtrado Combinado (Derivación de estado eficiente)
   * Filtra por texto (nombre/compatibilidad) y por categoría simultáneamente.
   */
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = 
      categoriaSeleccionada === 'todas' || producto.categoria === categoriaSeleccionada;
    
    const textoAFiltrar = busqueda.toLowerCase();
    const coincideNombre = producto.nombre?.toLowerCase().includes(textoAFiltrar);
    
    // Verifica si el texto coincide con alguna moto de la lista de compatibilidades
    const coincideMoto = producto.compatibilidad?.some((moto) => 
      moto.toLowerCase().includes(textoAFiltrar)
    );

    return coincideCategoria && (coincideNombre || coincideMoto);
  });

  if (cargando) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-vintage-grisOscuro/60 font-bold uppercase tracking-widest animate-pulse">
          Cargando catálogo de repuestos...
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      
      {/* Encabezado Principal */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-vintage-grisOscuro uppercase tracking-wider mb-3">
          Catálogo de <span className="text-vintage-verde italic font-serif normal-case font-normal">Repuestos</span>
        </h1>
        <p className="text-vintage-grisOscuro/70 max-w-xl mx-auto text-sm sm:text-base">
          Explora nuestros productos disponibles. Haz clic en cualquier artículo para comprar o solicitar información técnica directa por <span className="font-black text-vintage-grisOscuro">WhatsApp.</span>
        </p>
      </header>

      {/* SECCIÓN DE CONTROLES: BUSCADOR Y FILTROS */}
      <div className="bg-white border border-vintage-grisClaro rounded-2xl p-6 mb-12 shadow-sm space-y-6">
        
        {/* 1. Barra de Búsqueda Reactiva */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-vintage-grisOscuro/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre de repuesto o modelo de moto (Ej: NKD, Pulsar, Apache, etc)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-vintage-crema border border-vintage-grisClaro rounded-xl text-vintage-grisOscuro placeholder-vintage-grisOscuro/40 font-medium focus:outline-none focus:border-vintage-verde transition-colors text-sm"
          />
        </div>

        {/* 2. Filtros por Botones de Categorías */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {categorias.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoriaSeleccionada(cat.value)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all duration-200 cursor-pointer ${
                categoriaSeleccionada === cat.value
                  ? 'bg-vintage-grisOscuro border-vintage-grisOscuro text-white shadow-sm'
                  : 'bg-white border-vintage-grisClaro text-vintage-grisOscuro/70 hover:border-vintage-grisOscuro hover:text-vintage-grisOscuro'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* RENDERIZADO DE RESULTADOS */}
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-vintage-grisClaro shadow-sm">
          <p className="text-vintage-grisOscuro/50 font-bold uppercase tracking-wider text-sm">
            Ningún repuesto coincide con los criterios de búsqueda
          </p>
        </div>
      ) : (
        /* Grilla del Catálogo */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <article 
              key={producto._id} 
              className="bg-white border border-vintage-grisClaro rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Contenedor Multimedia */}
              <div className="aspect-square bg-vintage-crema relative overflow-hidden border-b border-vintage-grisClaro">
                {producto.imagen && (
                  <img
                    src={urlFor(producto.imagen).url()}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-vintage-grisOscuro text-white text-[10px] font-black uppercase tracking-widest rounded shadow-sm">
                  {producto.categoria}
                </span>
              </div>

              {/* Contenido / Metadatos */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-black text-vintage-grisOscuro uppercase tracking-tight leading-tight">
                    {producto.nombre}
                  </h2>
                  <p className="text-2xl font-black text-vintage-cafe">
                    {formatPrecio(producto.precio)}
                  </p>
                  {producto.descripcion && (
                    <p className="text-sm text-vintage-grisOscuro/70 line-clamp-2 leading-relaxed">
                      {producto.descripcion}
                    </p>
                  )}
                </div>

                {/* Compatibilidades */}
                {producto.compatibilidad && producto.compatibilidad.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {producto.compatibilidad.map((moto, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-0.5 bg-vintage-verde/10 text-vintage-verde font-bold text-[9px] uppercase tracking-wide rounded"
                      >
                        {moto}
                      </span>
                    ))}
                  </div>
                )}

                {/* Botón de Enlace Directo a WhatsApp */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/573000000000?text=Hola,%20estoy%20interesado%20en%20el%20repuesto:%20${encodeURIComponent(producto.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 bg-vintage-verde hover:bg-vintage-cafe text-white font-bold rounded uppercase text-xs tracking-widest shadow transition-colors duration-300"
                  >
                    Consultar Disponibilidad
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Productos;
