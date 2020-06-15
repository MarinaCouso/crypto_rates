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
    <ul className='section__form__list' id={props.id}>
      <FormListItem id='BTC' src={Bitcoins} name='Bitcoins' handleList={props.handleList} />
      <FormListItem id='USDT' src={Tether} name='Tether' handleList={props.handleList} />
      <FormListItem id='ETH' src={Ethereum} name='Ethereum' handleList={props.handleList} />
      <FormListItem id='USDC' src={USDCoin} name='USDCoin' handleList={props.handleList} />
      <FormListItem id='LTC' src={Litecoin} name='Litecoin' handleList={props.handleList} />
      <FormListItem id='TUSD' src={TrueUSD} name='TrueUSD' handleList={props.handleList} />
      <FormListItem id='BCH' src={Bcash} name='Bcash' handleList={props.handleList} />
    </ul>
  );
}

export default FormList;
