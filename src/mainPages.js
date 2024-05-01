import React from 'react';
import SimpleContainer from './Container';
import logo from './logo.svg';
const MainPages = () => {
  return (
    <SimpleContainer>
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Это главная страница</h1>
    </div>
    </SimpleContainer>
  );
};

export default MainPages;