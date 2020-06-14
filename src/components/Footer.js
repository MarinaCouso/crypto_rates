import React from 'react';
import Logo from '../images/logo.svg';
import Twitter from '../images/twitter.svg';

function Footer() {
  return (
    <footer>
      <div className='footer__text'>
        <img src={Logo} alt='Monedero' title="Monedero's logo" />
        <p>Recibe, envía e intercambia tus criptomonedas de la manera más sencilla. Sin líos ni comisiones. </p>
        <a href='https://twitter.com/monederodotcom'>
          <img src={Twitter} alt='Twitter' />
        </a>
      </div>
      <nav className='footer__nav'>
        <div className='footer__nav__1'>
          <h6>Navegación</h6>
          <ul>
            <li>Seguridad</li>
            <li>Sobre nosotros</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='footer__nav__2'>
          <h6>Legal</h6>
          <ul>
            <li>Términos y condiciones</li>
          </ul>
        </div>
        <div className='footer__nav__3'>
          <h6>Contacto</h6>
          <ul>
            <li>Soporte</li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
