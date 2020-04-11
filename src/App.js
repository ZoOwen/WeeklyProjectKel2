import React, {Fragment} from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

//pages
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
    <Router>
          <Fragment>
          <div>
          <Navbar />
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          </Fragment>
    </Router>
        </div>
  );
}

export default App;