import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            images,
            info,
            price,
            title,
            type,
            inCart,
            quantity
          } = value.detailProduct;
          //creating carousel

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5">
                  <h1>{title}</h1>
                  <p className="lead text-capitalize">{type}</p>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                {/* product img */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  {/* <img
                    src={
                      images ? images[0] : "http://via.placeholder.com/640x360"
                    }
                    alt="product"
                    className="img-fluid"
                  /> */}

                  <Carousel>
                    {images ? (
                      images.map((image, index) => {
                        return (
                          <div key={index}>
                            <img src={image} alt="product image" />
                          </div>
                        );
                      })
                    ) : (
                      <div>
                        <img
                          src={
                            images
                              ? images[0]
                              : "http://via.placeholder.com/640x360"
                          }
                          alt="product"
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </Carousel>
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 img-fluid my-3 text-capitalize">
                  <h2>modèle: {title}</h2>
                  <h4 className="text-title text-muted mt-3 mb-2">
                    Fabriqué par:
                    <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      prix:<span> </span>
                      {price} <span>DH</span>
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Spécifications du produit:
                  </p>
                  <p
                    className="text-muted lead"
                    dangerouslySetInnerHTML={{
                      __html: info
                    }}
                  ></p>
                  {/* buttons */}
                  <div>
                    <Link to="/products">
                      <ButtonContainer>Retour aux produits</ButtonContainer>
                    </Link>
                    {quantity > 0 ? (
                      <ButtonContainer
                        cart
                        disabled={inCart}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "Ajouté au panier" : "Ajouter au panier"}
                      </ButtonContainer>
                    ) : (
                      <ButtonContainer cart disabled={true}>
                        en rupture de stock
                      </ButtonContainer>
                    )}
                  </div>
                </div>
              </div>
              {/* end product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
