import React from 'react';

function FormListItem(props) {
  function handleClick(ev) {
    // ev.currentTarget.classList.toogle('borderBlue');
    props.handleList(ev);
  }
  return (
    <li className='section__form__list__option' onClick={handleClick} id={props.id}>
      <img className='section__form__list__icon' src={props.src} alt='Bitcoins' title='Bitcocoins' />
      {props.name}
    </li>
  );
}

export default FormListItem;
