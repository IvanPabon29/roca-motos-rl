import React from 'react';
import Hero from '../components/Hero';

/**
 * Página de Inicio (Landing Page)
 */
const Inicio = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      {/* Aquí se podría agregar un adelanto de productos destacados más adelante */}
    </div>
  );
};

export default Inicio;
