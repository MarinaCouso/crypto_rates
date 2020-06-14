import React from 'react';

function HeaderMenu() {
  return (
    <ul className='header__nav__menu__open'>
      <li className='header__nav__items'>
        <a className='header__nav__links' href='https://www.monedero.com/seguridad'>
          Seguridad
        </a>
      </li>
      <li className='header__nav__items'>
        <a className='header__nav__links' href='https://www.monedero.com/sobre-nosotros'>
          Sobre nosotros
        </a>
      </li>
      <li className='header__nav__items'>
        <a className='header__nav__links' href='https://www.monedero.com/faq'>
          FAQ
        </a>
      </li>
      <li className='header__nav__items'>
        <a className='header__nav__links' href='https://blog.monedero.com/'>
          Blog
        </a>
      </li>
    </ul>
  );
}

export default HeaderMenu;
