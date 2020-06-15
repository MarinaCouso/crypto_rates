import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import { useEffect } from 'react';
import getDataFromApi from './service/Api';
function App() {
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
  useEffect(() => {
    getDataFromApi().then((data) => {
      console.log(data);
    });
  }, []);
  function handleList(ev) {
    console.log(ev.currentTarget.id);
  }
  const handleQuantity = (ev) => {
    console.log('Quantity', ev.currentTarget.value);
  };
  const handleCalculate = (ev) => {
    console.log('Calculate');
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
