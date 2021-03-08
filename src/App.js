import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import ProductDetails from "./ProductDetails";

function App() {
  return (<BrowserRouter>

    <Navbar />

    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/products">
      <Products />
    </Route>
    <Route exact path="/cart">
      <Cart />
    </Route>
    <Route path="/products/:id">
      <ProductDetails />
    </Route>
    </Switch>
  </BrowserRouter>);
}

export default App;
