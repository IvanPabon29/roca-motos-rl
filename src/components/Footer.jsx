// Footer.js
import './Footer.css'; 
import facebook from "../assets/icon/facebook.svg";
import whatsapp from "../assets/icon/whatsapp.svg";
import instagram from "../assets/icon/instagram.svg";
import { Link } from 'react-router-dom';

/**
 * Componente Footer
 * 
 * Muestra la información de contacto de la empresa, enlaces rápidos y redes sociales.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Sección: Acerca de Nosotros */}
          <div className="col-md-4 footer-section">
            <h4>Acerca de Nosotros</h4>
            <p>Todo lo que necesites, donde lo necesites, ¡en minutos!</p>
            <p>Contacto: info@domiciliosexpress.com</p>
            <p>Teléfono: +57 312 456 7890</p>
          </div>
          
          {/* Sección: Enlaces Rápidos */}
          <div className="col-md-4 footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="enlaces">
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/domicilios">Domicilios</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          {/* Sección: Redes Sociales */}
          <div className="col-md-4 footer-section">
            <h4>Síguenos</h4>
            <ul className="social-icons">
              <li>
                <a href="#" aria-label="Facebook">
                  <img src={facebook} alt="Icono Facebook" title="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <img src={instagram} alt="Icono Instagram" title="Instagram" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Whatsapp">
                  <img src={whatsapp} alt="Icono Whatsapp" title="Whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sección: Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} Domicilios Express. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
