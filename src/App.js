import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import getDataFromApi from './service/Api';
function App() {
  const [calculation, setCalculation] = useState([]);
  const [search, setSearch] = useState({ pair: 'BTC-LTC', amount: 1 });

  useEffect(() => {
    getDataFromApi(search).then((data) => {
      setCalculation(data);
    });
  }, [search]);

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

  function handleList(ev) {
    let newPair = search.pair.split('-');
    let currencyType = ev.currentTarget.id;
    let currencyList = ev.currentTarget.parentNode.id;
    if (currencyList === 'From') {
      newPair[0] = currencyType;
    } else if (currencyList === 'To') {
      newPair[1] = currencyType;
    }
    setSearch((prevState) => ({ ...prevState, pair: newPair.join('-') }));
  }

  const handleQuantity = (ev) => {
    setSearch((prevState) => ({ ...prevState, amount: parseInt(ev.currentTarget.value) }));
  };

  return (
    <>
      <Header handleMenu={handleMenu} />
      <Form search={search} calculation={calculation} handleList={handleList} handleQuantity={handleQuantity} />
      <Footer />
    </>
  );
}

export default App;
