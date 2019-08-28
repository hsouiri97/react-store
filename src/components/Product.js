import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context"; //for getting the product methods from the context
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container p5"
                  onClick={() => {
                    value.handleDetail(id);
                  }}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button
                    className="card-btn"
                    disabled={inCart}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="mb-0">Ajouté au panier</p>
                    ) : (
                      <i className="fa fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          {/*card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-itlaic mb-0">
              {price} <span className="ml-1">DH</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s ease-out;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.4s linear;
  }
  .card-btn:focus {
    outline: none;
  }

  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }

  .card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    .card-btn {
      transform: translate(0, 0);
    }
  }
`;
