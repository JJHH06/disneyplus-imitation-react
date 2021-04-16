import React from 'react';
import logo from '../assets/disneyplus-logo.svg';

const Footer = () => (
  <div className="page-footer">
    <img className="imagen-logo-footer footer-item" src={logo} alt="logo" />
    <p className="footer-item">

      Politica de privacidad
      &nbsp;&nbsp;&nbsp;&nbsp;
      Acuerdo de suscripcion
      &nbsp;&nbsp;&nbsp;&nbsp;
      Ayuda
      &nbsp;&nbsp;&nbsp;&nbsp;
      Dispositivos compatibles
    </p>
    <p className="footer-item">Acerca de Disney+&nbsp;&nbsp;&nbsp;&nbsp;Publicidad personalizada</p>
    <p className="footer-item">El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda Ave., Burbank CA 91521 y Tax ID 75-3016153.</p>
    <p className="footer-item">© Disney. Todos los derechos reservados.</p>
  </div>
);

export default Footer;
