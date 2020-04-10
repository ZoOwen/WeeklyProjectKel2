import React from "react";
import "../App.css";

function Navbar() {
  return (
  <div>
  <header>
  <img src={require('./images/header.png')} />
  </header>
  <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">Dresses</a></li>
  <li><a href="#contact">Top</a></li>
  <li><a href="#about">Skirts</a></li>
  <li><a href="#about">Sale</a></li>
  <li><a href="#about">Contacts</a></li>
</ul>
  </div>
  );
}

export default Navbar;
