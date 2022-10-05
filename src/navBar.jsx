import React from "react";
import logo from "./resources/codiGo.png";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id='nav'>
      <Link to='/'>
        <img src={logo}></img>
      </Link>
    </div>
  );
};

export default NavBar;
