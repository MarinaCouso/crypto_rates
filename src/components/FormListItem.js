import React from 'react';

function FormListItem(props) {
  function handleClick(ev) {
    ev.preventDefault();
    // ev.currentTarget.classList.toggle('selected');
    props.handleList(ev);
  }

  const selectedCurrency = props.searchCurrency === props.id ? 'selected' : '';
  return (
    <li className={`section__form__list__option ${selectedCurrency}`} onClick={handleClick} id={props.id}>
      <img className='section__form__list__icon' src={props.src} alt='Bitcoins' title='Bitcoins' />
      {props.name}
    </li>
  );
}

export default FormListItem;
