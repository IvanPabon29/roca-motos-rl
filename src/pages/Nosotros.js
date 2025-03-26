// Nosotros.js
import React from "react";
import "../Styles/Nosotros.css";
import Equipo from "../assets/img/equipo.webp";

/**
 * Componente Nosotros
 *
 * Muestra la sección "Sobre Nosotros" que incluye información de la empresa,
 * su historia, equipo, valores corporativos y compromiso. La imagen del equipo se
 * carga de manera perezosa para optimizar el rendimiento.
 */
const Nosotros = () => {
  return (
    <section className="nosotros-container">
      <div className="overlay-nosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          En Domicilios Express, somos una empresa joven y dinámica comprometida
          con la excelencia en el servicio de entregas rápidas en Ibagué. Nuestra
          misión es facilitar la vida de nuestros clientes, garantizando que sus
          pedidos lleguen a tiempo y en perfectas condiciones.
        </p>

        <h3>Nuestra Historia</h3>
        <p>
          Nacimos con la idea de ofrecer un servicio de calidad que se adapte a las
          necesidades modernas de entrega. Con años de experiencia en logística, hemos
          desarrollado un sistema eficiente que nos permite responder a las demandas del
          mercado actual.
        </p>

        <h3>Nuestro Equipo</h3>
        <p>
          Contamos con un equipo de profesionales altamente capacitados que se dedican
          a ofrecer el mejor servicio posible. Desde nuestros mensajeros hasta nuestro
          equipo de atención al cliente, todos trabajamos juntos para superar las expectativas
          de nuestros clientes.
        </p>

        <img
          src={Equipo}
          alt="Equipo de Domicilios Express"
          className="img-nosotros"
          title="Equipo"
          loading="lazy"
        />

        <h3>Valores Corporativos</h3>
        <ul>
          <li>
            <strong>Compromiso:</strong> Estamos dedicados a cumplir con cada entrega de manera
            eficiente y segura.
          </li>
          <li>
            <strong>Innovación:</strong> Constantemente buscamos maneras de mejorar nuestros
            servicios utilizando la última tecnología.
          </li>
          <li>
            <strong>Responsabilidad:</strong> Nos tomamos en serio nuestra responsabilidad con el
            medio ambiente y usamos vehículos ecológicos siempre que es posible.
          </li>
        </ul>

        <h3>Nuestro Compromiso</h3>
        <p>
          En Domicilios Express, nos comprometemos a brindar un servicio excepcional. Ya sea
          que necesites una entrega rápida para un evento especial o un servicio regular para tu
          negocio, estamos aquí para ayudarte.
        </p>
      </div>
    </section>
  );
};

export default Nosotros;
