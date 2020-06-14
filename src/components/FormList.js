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
        <img src={Bitcoins} />
        Bitcoin
      </li>
      <li>
        <img src={Tether} />
        Tether
      </li>
      <li>
        <img src={Ethereum} />
        Ethereum
      </li>
      <li>
        <img src={USDCoin} />
        USD Coin
      </li>
      <li>
        <img src={Litecoin} />
        Litecoin
      </li>
      <li>
        <img src={TrueUSD} />
        TrueUSD
      </li>
      <li>
        <img src={Bcash} />
        Bcash
      </li>
    </ul>
  );
}

export default FormList;
