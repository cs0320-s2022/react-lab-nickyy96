import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Horoscope';
import Horoscope from './Horoscope';

function App() {
  return (
    <div className="Horoscope">
      <header className="App-header">
        Horoscope
        <Horoscope></Horoscope>
      </header>
    </div>
  );
}

export default App;
