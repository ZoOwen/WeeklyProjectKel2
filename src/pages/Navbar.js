import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
  <div>
  <header class="header">
  <img width="100%" src={require('./images/header.png')} />
  </header>
 <nav>
 <ul className="navs">
 <li className="nav"><Link to="/">Home</Link></li>
 <li className="nav"><Link to="/dresses">Dresses</Link></li>
 <li className="nav"><Link to="/topss">Top</Link></li>
 <li className="nav"><Link to="/skirts">Skirts</Link></li>
 <li className="nav"><Link to="#about">Sale</Link></li>
 <li className="nav"><Link to="/contact">Contacts</Link></li>
</ul>
</nav>
  </div>
  );
}

export default Navbar;