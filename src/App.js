import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
// import getDataFromApi from './service/Api';
function App() {
  let [calculation, setCalculation] = useState([]);
  let [initialSearch, setInitialSearch] = useState({ pair: 'BTC-LTC', amount: 1 });
  let [userSearch, setUserSearch] = useState({ pair: 'BTC-LTC', amount: 1 });

  // setSearch({ pair: 'BTC-LTC', amount: 1 })
  // let search = { pair: 'BTC-LTC', amount: 1 };

  const getDataFromApi = async (search) => {
    const response = await fetch('http://compare.monedero.com/api/getPrice?pair=' + search.pair + '&amount=' + search.amount);
    const data = await response.json();
    console.log('***Data after change search', data);
    setCalculation(data);
    return data;
  };
  useEffect(() => {
    getDataFromApi(initialSearch).then((data) => {
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
      setUserSearch((userSearch.pair = pair));
      return getDataFromApi();
    }
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
    setUserSearch((userSearch.amount = parseInt(ev.currentTarget.value)));
    console.log(userSearch);
  };
  const handleCalculate = (ev) => {
    console.log('Calculate');
    getDataFromApi(userSearch).then((data) => {
      setCalculation(data);
    });
    return calculation;
  };
  return (
    <>
      <Header handleMenu={handleMenu} />
      <Form userSearch={userSearch} calculation={calculation} handleList={handleList} handleQuantity={handleQuantity} handleCalculate={handleCalculate} />
      <Footer />
    </>
  );
}

export default App;
