import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
