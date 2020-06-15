import React from 'react';
import Logo from '../images/logo.svg';
import MenuClosed from '../images/menu-icon.png';
import HeaderMenu from './HeaderMenu';
import HeroImage from '../images/wallet-resized.jpg';

function Header(props) {
  function handleClick(ev) {
    props.handleMenu(ev);
  }
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img className='header__nav__logo' src={Logo} alt='Monedero' title="Monedero's logo" />
        <div className='header__nav__menu'>
          <img className='header__nav__menu__hamburguer closed' src={MenuClosed} alt='Menú' title='Menú' onClick={handleClick} />
        </div>
      </nav>
      <div className='js-menu hidden'>
        <HeaderMenu />
      </div>
      <div className='header__hero'>
        <div className='header__hero__text'>
          <h1 className='header__hero__text__title'>Compara precios rápido y fácil</h1>
          <p className='header__hero__text__p'>Elige las monedas que quieres comparar y la cantidad que quieres calcular. Así de sencillo.</p>
          <p className='header__hero__text__p'></p>
        </div>
        {/* <img className='header__hero__image' src={HeroImage} alt='Data graphic' title='Data graphic' /> */}
      </div>
    </header>
  );
}

export default Header;
