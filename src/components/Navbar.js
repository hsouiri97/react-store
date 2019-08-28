import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button.js";
import { FaAlignRight, FaShoppingCart } from "react-icons/fa";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-inverse bg-info sticky-top">
        <div className="container">
          <Link to="/">
            <div className="navbar-brand">MON SMARTPHONE</div>
          </Link>
          <div className="d-flex flex-row order-2 order-lg-3">
            <ul className="navbar-nav flex-row">
              <li className="nav-item ml-3">
                <Link to="/cart">
                  <span className="cart-icon">
                    <FaShoppingCart />
                  </span>
                </Link>
              </li>
            </ul>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaAlignRight />
            </button>
          </div>
          <div
            className="collapse navbar-collapse order-3 order-lg-2"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/">
                  <div className="nav-link">Accueil</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products">
                  <div className="nav-link">Smartphones</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products">
                  <div className="nav-link">Accessoires</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/suppliers">
                  <div className="nav-link">Nos Fournisseurs</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <div className="nav-link">A Propos</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <div className="nav-link">Contact</div>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>

      /*<NavWrapper className="navbar navbar-dark navbar-expand-sm px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fa fa-cart-plus mr-2" />
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>*/
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link: {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
