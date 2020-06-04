import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//  import logo from './logo.svg';
// import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


import MiniFormik from './components/formik/MiniFormik'
import Map from './components/maps';
import Hooks from './components/hooks'


function App() {
  return (
    <div className="App">
      <Container>

     
      <Router>
      <Nav>       
        <Nav.Item>
          <Nav.Link href='/formik'>Formik</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/map'>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/hooks">hooks</Nav.Link>
        </Nav.Item>
      </Nav>
        <switch>
          <Route path='/formik' >
            <MiniFormik />
          </Route>
          <Route path='/map' >
            <Map />
          </Route>
          <Route path='/hooks' >
            <Hooks />
          </Route>          
        </switch>
         
      </Router>
      </Container>
    </div>
  );
}

export default App;
