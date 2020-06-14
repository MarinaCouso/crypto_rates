import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <nav className='header__nav'>
        <div className='header__nav__logo'>
          <img src={Logo} alt="Monerdero's logo" title="Monerdero's logo" />
        </div>
        <ul className='header__nav__menu'>
          <li>
            <a href='https://www.monedero.com/seguridad' target='_blank'>
              Seguridad
            </a>
          </li>
          <li>
            <a href='https://www.monedero.com/sobre-nosotros' target='_blank'>
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href='https://www.monedero.com/faq' target='_blank'>
              FAQ
            </a>
          </li>
          <li>
            <a href='https://blog.monedero.com/' target='_blank'>
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className='header__hero'>
        <div className='header__hero__text'>
          <h1>Compara precios rápido y fácil</h1>
          <p>Elige las monedas que quieres comparar y la cantidad que quieres calcular.</p>
          <p>Así de sencillo.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
