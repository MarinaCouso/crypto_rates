import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
// import getDataFromApi from './service/Api';
function App() {
  let [calculation, setCalculation] = useState([]);
  // let [search, setSearch] = useState({});
  // setSearch({ pair: 'BTC-LTC', amount: 1 })
  let search = { pair: 'BTC-LTC', amount: 1 };
  console.log('Search at APP', search);

  const getDataFromApi = async () => {
    console.log('Search at API', search);
    const response = await fetch('http://compare.monedero.com/api/getPrice?pair=' + search.pair + '&amount=' + search.amount);
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    console.log('Search at API', search);
    getDataFromApi().then((data) => {
      console.log('Data', data);
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

  function handleList(ev) {
    console.log(ev.currentTarget.id);
  }
  const handleQuantity = (ev) => {
    console.log('Quantity', ev.currentTarget.value);
  };
  const handleCalculate = (ev) => {
    console.log('Calculate');
    // getDataFromApi(search).then((data) => {
    //   setCalculation(data);
    // });
    // return calculation;
  };
  return (
    <>
      <Header handleMenu={handleMenu} />
      <Form handleList={handleList} handleQuantity={handleQuantity} handleCalculate={handleCalculate} />
      <Footer />
    </>
  );
}

export default App;
