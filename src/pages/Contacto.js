// Contacto.js
import React from 'react';
import '../Styles/Contacto.css';
import ImgContacto from '../assets/img/img-contacto.webp';

/**
 * Componente de Contacto.
 * Muestra la información de contacto, un formulario, una imagen y la ubicación en un mapa.
 */
const Contacto = () => {
  return (
    <section className="contacto-container">
      <h2>Contacto</h2>
      <p>
        ¿Tienes alguna duda o consulta? Contáctanos a través del siguiente formulario o visítanos en
        nuestra ubicación. Estamos aquí para ayudarte con cualquier solicitud o pregunta que puedas tener.
      </p>

      <img src={ImgContacto} title="Img-Contacto" alt="Contacto" loading="lazy" />

      <h3>Formulario de Contacto</h3>
      <form className="contact-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Nombre" required autoComplete="name" />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" placeholder="Correo electrónico" required autoComplete="email" />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" placeholder="Tu mensaje" required autoComplete="off"></textarea>

        <button type="submit">Enviar</button>
      </form>

      <h3>Información de Contacto</h3>
      <p><strong>Teléfono:</strong> +57 312 456 7890</p>
      <p><strong>Email:</strong> info@domiciliosexpress.com</p>
      <p><strong>Dirección:</strong> Manzana H Casa 17, Barrio Vasconia Reservado, Ibagué, Tolima</p>

      <h3>Nuestra Ubicación</h3>
      <div className="map-container">
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9894394741954!2d-75.2188674!3d4.4303279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e1384c37f5f%3A0x4e6d83d9a0df045f!2sManzana%20H%20Casa%2017%2C%20Vasconia%20Reservado%2C%20Ibagué%2C%20Tolima!5e0!3m2!1ses!2sco!4v1692024381602!5m2!1ses!2sco"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacto;
