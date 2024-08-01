import React, { useState } from 'react';
import './App.css';
import { QRScanner } from './components/qr-scanner';
import { QRGenerator } from './components/qr-generator';

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
        <p className='Title'>QR Code handler</p>

        <div className='QR-Section'>
          <button className='QR-Button' onClick={() => setMode(Mode.Generate)}>Generator</button>
          <button className='QR-Button' onClick={() => setMode(Mode.Scan)}>Scanner</button>
        </div>
      </header>


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
