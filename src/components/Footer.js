import React from 'react';
import Logo from '../images/logo.svg';
import Twitter from '../images/twitter.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__text'>
        <img className='footer__text__logo' src={Logo} alt='Monedero' title="Monedero's logo" />
        <p className='footer__text__p'>Recibe, envía e intercambia tus criptomonedas de la manera más sencilla. Sin líos ni comisiones. </p>
        <a href='https://twitter.com/monederodotcom'>
          <img className='footer__text__twitter' src={Twitter} alt='Twitter' />
        </a>
      </div>
      <nav className='footer__nav'>
        <div className='footer__nav__box'>
          <h6 className='footer__nav__title'>Navegación</h6>
          <ul className='footer__nav__list'>
            <li>
              <a className='footer__nav__links' href='https://www.monedero.com/seguridad'>
                Seguridad
              </a>
            </li>
            <li>
              <a className='footer__nav__links' href='https://www.monedero.com/sobre-nosotros'>
                Sobre nosotros
              </a>
            </li>
            <li>
              <a className='footer__nav__links' href='https://www.monedero.com/faq'>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__nav__box'>
          <h6 className='footer__nav__title'>Legal</h6>
          <ul className='footer__nav__list'>
            <li>
              <a className='footer__nav__links' href='https://www.monedero.com/terms'>
                Términos y condiciones
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__nav__box'>
          <h6 className='footer__nav__title'>Contacto</h6>
          <ul className='footer__nav__list'>
            <li>
              <a className='footer__nav__links' href='https://support.monedero.com/'>
                Soporte
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
