import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from './pages/Home'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
