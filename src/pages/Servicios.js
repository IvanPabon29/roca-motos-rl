// Servicios.js
import React from "react";
import "../Styles/Servicios.css";
import flota from "../assets/img/flota.webp";
import imgIbague from "../assets/img/ibague.webp";
import repartidor from "../assets/img/repartidor.webp";

/**
 * Componente Servicios
 *
 * Muestra información sobre los servicios que ofrece Domicilios Express, incluyendo:
 * - Descripción general de los servicios.
 * - Listado de servicios ofrecidos.
 * - Cobertura en la ciudad.
 * - Beneficios de elegir el servicio.
 *
 * Las imágenes se cargan de forma perezosa para optimizar el rendimiento.
 */
const Servicios = () => {
  return (
    <section className="servicios-container">
      <h2>Nuestros Servicios</h2>
      <p>
        En Domicilios Express, nos especializamos en ofrecer servicios de entrega
        rápida y eficiente en Ibagué. Contamos con una flota diversificada que
        incluye vehículos, motos y bicicletas para garantizar que tu paquete llegue
        a su destino de manera segura y puntual.
      </p>
      
      <h3>¿Qué Ofrecemos?</h3>
      <ul>
        <li>
          <strong>Entrega Express:</strong> Recogemos y entregamos tu pedido en menos de 60 minutos.
        </li>
        <li>
          <strong>Servicio de Mensajería:</strong> Realizamos envíos de documentos importantes con total confidencialidad.
        </li>
        <li>
          <strong>Entrega Programada:</strong> Puedes programar la entrega en el horario que más te convenga.
        </li>
        <li>
          <strong>Servicio Corporativo:</strong> Ofrecemos soluciones personalizadas para empresas con necesidades regulares de envíos.
        </li>
      </ul>

      <h3>Nuestra Flota</h3>
      <img 
        src={flota} 
        title="Imagen Flota" 
        alt="flota" 
        loading="lazy" 
      />
      
      <ul>
        <li>
          <strong>Vehículos:</strong> Ideales para entregas de gran tamaño o en zonas de difícil acceso.
        </li>
        <li>
          <strong>Motos:</strong> Perfectas para entregas rápidas y ágiles en el tráfico urbano.
        </li>
        <li>
          <strong>Bicicletas:</strong> Una opción ecológica para entregas en áreas cercanas.
        </li>
      </ul>

      <h3>Cobertura</h3>
      <p>
        Operamos en toda la ciudad de Ibagué, asegurando que cualquier rincón de la ciudad
        pueda beneficiarse de nuestros servicios.
      </p>

      <img 
        src={imgIbague} 
        title="Imagen Ibague" 
        alt="ibague" 
        loading="lazy" 
      />

      <h3>Beneficios de Elegirnos</h3>
      <p>
        En Domicilios Express, no solo nos enfocamos en la rapidez, sino también en la seguridad
        y la satisfacción del cliente. Contamos con un sistema de seguimiento en tiempo real,
        tarifas competitivas y un servicio al cliente disponible 24/7.
      </p>

      <img 
        src={repartidor} 
        title="Imagen Repartidor" 
        alt="repartidor" 
        loading="lazy" 
      />
    </section>
  );
};

export default Servicios;
