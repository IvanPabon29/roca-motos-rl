/** Configuración de PostCSS.
 * Este archivo define los plugins de PostCSS que se utilizarán para procesar los estilos CSS del proyecto.
 * En este caso, se incluyen '@tailwindcss/postcss' para integrar Tailwind CSS y 'autoprefixer' para agregar prefijos de navegador automáticamente.
 */

export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}