import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
 <nav class="navbar navbar-expand-sm">
<ul className="navs navbar-nav" >
<li className="nav nav-item"><Link to="/">Home</Link></li>
<li className="nav nav-item"><Link to="/dresses">Dresses</Link></li>
<li className="nav nav-item"><Link to="/topss">Top</Link></li>
<li className="nav nav-item"><Link to="/skirts">Skirts</Link></li>
<li className="nav nav-item" ><Link to="/sale">Sale</Link></li>
<li className="nav nav-item" ><Link to="/contact">Contacts</Link></li>
<li className="nav nav-item"><Link to="/recipe">Special</Link></li>
</ul>
</nav>
  );
}

export default Navbar;