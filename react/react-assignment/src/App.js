import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonCounter from './components/ButtonCounter';

function App() {
  
  return (
    <div className="App">
      <ButtonCounter />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
