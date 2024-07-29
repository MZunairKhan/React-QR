import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>QR Code handler</p>
      </header>

      <div className='QR-Section'>
        <button className='QR-Button'>Generate QR</button>
        <button className='QR-Button'>Scan QR</button>
      </div>
    </div>
  );
}

export default App;
