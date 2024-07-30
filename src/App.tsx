import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QRScanner from './components/qr-scanner';
import QRGenerator from './components/qr-generator';

enum Mode {
  'None',
  'Generate',
  'Scan'
}

function App() {

  const [mode, setMode] = useState<Mode>(Mode.None);

  return (
    <div className="App">
      <header className="App-header">
        <p>QR Code handler</p>
      </header>

      <div className='QR-Section'>
        <button className='QR-Button' onClick={() => setMode(Mode.Generate)}>Generate QR</button>
        <button className='QR-Button' onClick={() => setMode(Mode.Scan)}>Scan QR</button>
      </div>

      {
        mode === Mode.Scan && 
        <QRScanner/>
      }

      {
        mode === Mode.Generate && 
        <QRGenerator/>
      }
    </div>
  );
}

export default App;
