import React,{useContext} from "react";
import {NavLink} from "react-router-dom";
import {AppContext} from "./AppContext";

export default function Navbar() {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" activeClassName="active">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({value.cartNum})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}