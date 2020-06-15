import React from 'react';

function FormListItem(props) {
  function handleClick(ev) {
    props.handleList(ev);
  }
  return (
    <li className='section__form__list__option' onClick={handleClick}>
      <img className='section__form__list__icon' src={props.src} alt='Bitcoins' title='Bitcocoins' />
      {props.name}
    </li>
  );
}

export default FormListItem;
