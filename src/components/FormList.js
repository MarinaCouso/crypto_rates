import React from 'react';
import FormListItem from './FormListItem';
import Bitcoins from '../images/btc.svg';
import Tether from '../images/usdt.svg';
import Ethereum from '../images/eth.svg';
import USDCoin from '../images/usdc.svg';
import Litecoin from '../images/ltc.svg';
import TrueUSD from '../images/tusd.svg';
import Bcash from '../images/bch.svg';

function FormList(props) {
  return (
    <ul className='section__form__list'>
      <FormListItem src={Bitcoins} name='Bitcoins' handleList={props.handleList} />
      <FormListItem src={Tether} name='Tether' handleList={props.handleList} />
      <FormListItem src={Ethereum} name='Ethereum' handleList={props.handleList} />
      <FormListItem src={USDCoin} name='USDCoin' handleList={props.handleList} />
      <FormListItem src={Litecoin} name='Litecoin' handleList={props.handleList} />
      <FormListItem src={TrueUSD} name='TrueUSD' handleList={props.handleList} />
      <FormListItem src={Bcash} name='Bcash' handleList={props.handleList} />
    </ul>
  );
}

export default FormList;
