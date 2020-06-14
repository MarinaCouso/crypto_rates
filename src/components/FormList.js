import React from 'react';
import Bitcoins from '../images/btc.svg';
import Tether from '../images/usdt.svg';
import Ethereum from '../images/eth.svg';
import USDCoin from '../images/usdc.svg';
import Litecoin from '../images/ltc.svg';
import TrueUSD from '../images/tusd.svg';
import Bcash from '../images/bch.svg';

function FormList() {
  return (
    <ul className='section__form__list'>
      <li className='section__form__list__option'>
        <img className='section__form__list__icon' className='section__form__list__icon' src={Bitcoins} alt='Bitcoins' title='Bitcocoins' />
        Bitcoin
      </li>
      <li className='section__form__list__option closed-list'>
        <img className='section__form__list__icon' src={Tether} alt='Tether' title='Tether' />
        Tether
      </li>
      <li className='section__form__list__option closed-list'>
        <img className='section__form__list__icon' src={Ethereum} alt='Ethereum' title='Ethereum' />
        Ethereum
      </li>
      <li className='section__form__list__option closed-list'>
        <img className='section__form__list__icon' src={USDCoin} alt='USDCoin' title='USDCoin' />
        USD Coin
      </li>
      <li className='section__form__list__option closed-list'>
        <img className='section__form__list__icon' src={Litecoin} alt='Litecoin' title='Litecoin' />
        Litecoin
      </li>
      <li className='section__form__list__option closed-list'>
        <img className='section__form__list__icon' src={TrueUSD} alt='TrueUSD' title='TrueUSD' />
        TrueUSD
      </li>
      <li className='section__form__list__option closed-list'>
        <img className='section__form__list__icon' src={Bcash} alt='logo' />
        Bcash
      </li>
    </ul>
  );
}

export default FormList;
