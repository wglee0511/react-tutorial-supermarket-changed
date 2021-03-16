import React from "react";
import "./App.css";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import ProductDetails from "./ProductDetails";
import {AppProvider} from "./AppContext";

function App() {
  return (
  <AppProvider>
  <Router>

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
  </Router>
  </AppProvider>);
}

export default App;
