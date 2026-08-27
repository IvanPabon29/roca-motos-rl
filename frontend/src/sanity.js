import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

/**
 * Configuración del cliente oficial de Sanity para el Frontend.
 * Permite realizar consultas GROQ a la base de datos en la nube.
 */
export const client = createClient({
  // Lee las credenciales desde el archivo .env 
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2026-08-27',
  useCdn: true, // usa la caché global de Sanity (respuestas en milisegundos)
});

// Inicializador del constructor de URLs para archivos multimedia
const builder = createImageUrlBuilder(client);

/**
 * Helper para transformar las referencias de imágenes de Sanity en URLs HTTP legibles.
 * @param {Object} source - Objeto de la imagen retornado por la base de datos.
 * @returns {Object} Constructor de URL optimizado por Sanity.
 */
export function urlFor(source) {
  return builder.image(source);
}
