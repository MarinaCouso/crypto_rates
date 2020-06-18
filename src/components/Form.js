import React from 'react';
import FormList from './FormList';
import Chart from './Chart';

function Form(props) {
  const handleChange = (ev) => {
    console.log(ev.currentTarget.value);
    props.handleQuantity(ev);
  };
  const currency = props.search.pair.split('-');
  return (
    <section>
      <form className='section__form'>
        <div className='section__form__quantity'>
          <label className='section__form__quantity__label'>¿Qué cantidad quieres calcular?</label>
          <div className='section__form__quantity__calculate'>
            <input className='section__form__quantity__input' type='number' onChange={handleChange} placeholder='Indicate amount' defaultValue={props.search.amount}></input>
          </div>
        </div>
        <div className='section__form__coin'>
          <div className='section__form__coin__box'>
            <label className='section__form__coin__label'>De</label>
            <FormList searchCurrency={currency[0]} id='From' handleList={props.handleList} />
          </div>
          <Chart calculation={props.calculation} />
          <div className='section__form__coin__box'>
            <label className='section__form__coin__label'>A</label>
            <FormList searchCurrency={currency[1]} id='To' handleList={props.handleList} />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
