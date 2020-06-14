import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <nav class='header__nav'>
        <div class='header__nav__logo'>
          <img src={Logo} alt="Monerdero's logo" title="Monerdero's logo" />
        </div>
        <ul class='header__nav__menu'>
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
      <div class='header__hero'>
        <div class='header__hero__text'>
          <h1>Compara precios rápido y fácil</h1>
          <p>Elige las monedas que quieres comparar y la cantidad que quieres calcular.</p>
          <p>Así de sencillo.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
