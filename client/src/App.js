import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

function App() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Customer />
    </div>
  );
}

export default App;
