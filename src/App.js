import React, {Fragment} from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

//pages
import Home from './pages/Home'

import Dresses from './pages/Dresses'
import Footer from './pages/Footer'

import Contact from './pages/Contact'
import Skirts from './pages/Skirts'
import Topss from './pages/Topss'


function App() {
  return (
    <div>
      <Navbar />




      <Router>
     <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/dresses" component={Dresses} />
      <Route path="/topss" component={Topss} />
      <Route path="/skirts" component={Skirts} />
      </Fragment>
</Router>

<Footer/>
    </div>
    
  );
}

export default App;