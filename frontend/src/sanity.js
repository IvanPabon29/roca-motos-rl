import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Configuración del cliente oficial de Sanity para el Frontend.
 * Permite realizar consultas GROQ a la base de datos en la nube.
 */
export const client = createClient({
  projectId: '2ue8c30w', 
  dataset: 'production',
  apiVersion: '2026-07-07', // Cambia a la fecha actual del desarrollo para evitar avisos de obsolescencia
  useCdn: true, // true usa la caché global de Sanity (respuestas en milisegundos, ideal para producción)
});

// Inicializador del constructor de URLs para archivos multimedia
const builder = imageUrlBuilder(client);

/**
 * Helper para transformar las referencias de imágenes de Sanity en URLs HTTP legibles.
 * @param {Object} source - Objeto de la imagen retornado por la base de datos.
 * @returns {Object} Constructor de URL optimizado por Sanity.
 */
export function urlFor(source) {
  return builder.image(source);
}
