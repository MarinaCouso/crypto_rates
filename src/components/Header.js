import React from 'react';
import Logo from '../images/logo.svg';
import MenuClosed from '../images/menu-icon.png';

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img className='header__nav__logo' src={Logo} alt='Monedero' title="Monedero's logo" />
        <img className='header__nav__menu-closed' src={MenuClosed} alt='Menú' title='Menú' />
        <ul className='header__nav__menu-open hidden'>
          <li>
            <a href='https://www.monedero.com/seguridad'>Seguridad</a>
          </li>
          <li>
            <a href='https://www.monedero.com/sobre-nosotros'>Sobre nosotros</a>
          </li>
          <li>
            <a href='https://www.monedero.com/faq'>FAQ</a>
          </li>
          <li>
            <a href='https://blog.monedero.com/'>Blog</a>
          </li>
        </ul>
      </nav>
      <div className='header__hero'>
        <div className='header__hero__text'>
          <h1 className='header__hero__text__title'>Compara precios rápido y fácil</h1>
          <p className='header__hero__text__p'>Elige las monedas que quieres comparar y la cantidad que quieres calcular.</p>
          <p className='header__hero__text__p'>Así de sencillo.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
