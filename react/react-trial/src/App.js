import React from 'react';
//  import logo from './logo.svg';
// import './App.css';
import MiniFormik from './components/formik/MiniFormik'
import Home from "./components/maps/Home";
import DemoApp from './components/maps/markerCluster';

function App() {
  return (
    <div className="App">
      <MiniFormik />
      <br />
      <br />
      <h1>Maps </h1>
      <Home />

<br /><br />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
      </header>



      <br></br>
      <DemoApp />
    </div>
  );
}

export default App;
