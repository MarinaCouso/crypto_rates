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
    <ul>
      <li>
        <img src={Bitcoins} alt='Bitcoins' title='Bitcocoins' />
        Bitcoin
      </li>
      <li>
        <img src={Tether} alt='Tether' title='Tether' />
        Tether
      </li>
      <li>
        <img src={Ethereum} alt='Ethereum' title='Ethereum' />
        Ethereum
      </li>
      <li>
        <img src={USDCoin} alt='USDCoin' title='USDCoin' />
        USD Coin
      </li>
      <li>
        <img src={Litecoin} alt='Litecoin' title='Litecoin' />
        Litecoin
      </li>
      <li>
        <img src={TrueUSD} alt='TrueUSD' title='TrueUSD' />
        TrueUSD
      </li>
      <li>
        <img src={Bcash} alt='logo' />
        Bcash
      </li>
    </ul>
  );
}

export default FormList;
