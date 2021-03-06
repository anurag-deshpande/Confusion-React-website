import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
    </div>
  );
}

export default App;
