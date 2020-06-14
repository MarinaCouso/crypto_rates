import React from 'react';
import FormList from './FormList';

function Form() {
  return (
    <section>
      <form class='section__form'>
        <label>¿Qué cantidad quieres calcular?</label>
        <input type='number'></input>
        <label>De</label>
        <FormList />
        <label>A</label>
        <FormList />
      </form>
    </section>
  );
}

export default Form;
