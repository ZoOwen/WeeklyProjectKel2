import React, {Fragment} from 'react';
import './App.css';
import Navbar from './pages/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Home from './pages/Home'

import Dresses from './pages/Dresses'
import Footer from './pages/Footer'

import Contact from './pages/Contact'
import Skirts from './pages/Skirts'
import Topss from './pages/Topss'
import Sale from './pages/Sale'
import Recipe from './pages/Recipe'


function App() {
  return (
    <Router>
    <div>
    <header>
  <img width="100%" src={require('./pages/images/header.png')} />
  </header>
     <Navbar />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dresses">
          <Dresses />
        </Route>
        <Route path="/topss">
          <Topss />
        </Route>
        <Route path="/skirts">
          <Skirts />
        </Route>
        <Route path="/sale">
        <Sale/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        
        <Route path="/recipe">
        <Recipe/>
      </Route>
      
      </Switch>
    </div>
    <Footer />
  </Router>
    
  );
}

export default App;