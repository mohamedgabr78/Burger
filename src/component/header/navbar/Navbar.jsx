import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">burger logo</div>
        <div className="routes">
          <NavLink to="/burger">Make your Burger</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
