import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductsContainer from "./components/ProductsContainer";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Suppliers from "./components/Suppliers";
import About from "./components/About";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <ScrollTop>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductsContainer} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/suppliers" component={Suppliers} />
          <Route path="/about" component={About} />
          <Route component={Default} />
        </Switch>
        <Modal />

        <Footer />
      </React.Fragment>
    </ScrollTop>
  );
}

export default App;
