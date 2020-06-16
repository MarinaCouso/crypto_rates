import React from 'react';
import FormList from './FormList';
import Chart from './Chart';

function Form(props) {
  const handleChange = (ev) => {
    props.handleQuantity(ev);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.handleCalculate(ev);
  };
  return (
    <section>
      <form className='section__form'>
        <div className='section__form__quantity'>
          <label className='section__form__quantity__label'>¿Qué cantidad quieres calcular?</label>
          <div className='section__form__quantity__calculate'>
            <input className='section__form__quantity__input' type='number' onChange={handleChange} placeholder='Indicate amount' value={props.userSearch.amount}></input>
            <button className='section__form__quantity__button' onClick={handleSubmit}>
              Calcula
            </button>
          </div>
        </div>
        <div className='section__form__coin'>
          <div className='section__form__coin__box'>
            <label className='section__form__coin__label'>De</label>
            <FormList id='From' handleList={props.handleList} />
          </div>
          <Chart calculation={props.calculation} />
          <div className='section__form__coin__box'>
            <label className='section__form__coin__label'>A</label>
            <FormList id='To' handleList={props.handleList} />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
