import React from 'react';
import FormList from './FormList';
import Chart from './Chart';

function Form(props) {
  console.log('Form', props);
  return (
    <section>
      <form className='section__form'>
        <div className='section__form__quantity'>
          <label className='section__form__quantity__label'>¿Qué cantidad quieres calcular?</label>
          <input className='section__form__quantity__input' type='number' value={1}></input>
        </div>
        <div className='section__form__coin'>
          <div className='section__form__coin__box'>
            <label className='section__form__coin__label'>De</label>
            <FormList handleList={props.handleList} />
          </div>
          <Chart />
          <div className='section__form__coin__box'>
            <label className='section__form__coin__label'>A</label>
            <FormList handleList={props.handleList} />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
