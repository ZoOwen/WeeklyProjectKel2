import React from "react";
import "../App.css";

function Navbar() {
  return (
  <div>
  <header>
  <img src={require('./images/header.png')} />
  </header>
  <ul className="navs">
  <li className="nav"><a href="/">Home</a></li>
  <li className="nav"><a href="/dresses">Dresses</a></li>
  <li className="nav"><a href="#contact">Top</a></li>
  <li className="nav"><a href="#about">Skirts</a></li>
  <li className="nav"><a href="#about">Sale</a></li>
  <li className="nav"><a href="/contact">Contacts</a></li>
</ul>
  </div>
  );
}

export default Navbar;