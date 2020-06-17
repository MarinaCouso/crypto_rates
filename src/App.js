import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
function App() {
  const [calculation, setCalculation] = useState([]);
  const [search, setSearch] = useState({ pair: 'BTC-LTC', amount: 1 });

  const getDataFromApi = async (search) => {
    const response = await fetch('http://compare.monedero.com/api/getPrice?pair=' + search.pair + '&amount=' + search.amount);
    const data = await response.json();
    setCalculation(data);
    return data;
  };
  useEffect(() => {
    getDataFromApi(search).then((data) => {
      setCalculation(data);
    });
  }, []);

  function handleMenu(ev) {
    const deployMenu = document.querySelector('.js-menu');
    if (ev.currentTarget.classList.contains('closed')) {
      deployMenu.classList.remove('hidden');
      ev.currentTarget.classList.remove('closed');
      ev.currentTarget.classList.add('open');
    } else if (ev.currentTarget.classList.contains('open')) {
      deployMenu.classList.add('hidden');
      ev.currentTarget.classList.remove('open');
      ev.currentTarget.classList.add('closed');
    }
  }
  let fromCurrency = '';
  let toCurrency = '';

  const getSearch = () => {
    if (fromCurrency !== '' && toCurrency !== '') {
      let pair = fromCurrency + '-' + toCurrency;
      setSearch((search.pair = pair));
    }
    return getDataFromApi(search);
  };
  function handleList(ev) {
    let currencyType = ev.currentTarget.id;
    let currencyList = ev.currentTarget.parentNode.id;
    if (currencyList === 'From') {
      fromCurrency = currencyType;
      return getSearch();
    } else if (currencyList === 'To') {
      toCurrency = currencyType;
      return getSearch();
    }
  }

  const handleQuantity = (ev) => {
    setSearch((search.amount = parseInt(ev.currentTarget.value)));
  };
  const handleCalculate = (ev) => {
    getDataFromApi(search).then((data) => {
      setCalculation(data);
    });
    return calculation;
  };
  return (
    <>
      <Header handleMenu={handleMenu} />
      <Form search={search} calculation={calculation} handleList={handleList} handleQuantity={handleQuantity} handleCalculate={handleCalculate} />
      <Footer />
    </>
  );
}

export default App;
