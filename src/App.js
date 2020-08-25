import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
