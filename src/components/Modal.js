import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, company, price, quantity } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container cotainer-modal">
                  {/* modal header */}
                  <div className="row" id="modal-header">
                    <div className="col-10 col-md-10 col-lg-12 text-center">
                      <h2 className="text-uppercase">
                        Votre article a bien été ajouté à votre panier
                      </h2>
                      <p>ATTTENTION ! LIVRAISON AU MAROC UNIQUEMENT.</p>
                    </div>
                  </div>
                  {/* end modal header */}
                  {/* modal content */}
                  <div className="row" id="modal-content">
                    <div className="col-8 mx-auto col-md-4 col-lg-4 p-5">
                      <img src={img} alt="product" className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto col-md-8 col-lg-8 text-left text-capitalize p-5">
                      <h3 className="text-info">{company}</h3>
                      <h4 className="text-primary">{title}</h4>
                      <h5 className="text-muted">
                        <del>{(price + price * 0.3).toFixed(2)} DH</del>
                      </h5>
                      <h3 className="text-danger">{price.toFixed(2)} DH</h3>
                      <p className="lead">
                        ( Vous économiserez : {(price * 0.3).toFixed(2)} DH )
                      </p>
                      <p className="text-muted">{quantity} disponibles</p>
                      <h4>
                        Garantie Légale
                        <i className="fa fa-question-circle ml-1" />
                      </h4>
                      <p className="text-muted">
                        Le bénéficiaire de la garantie dispose d’un délai de 2
                        ans à compter de la délivrance (livraison ou remise à
                        l’achat) du bien pour réclamer la mise en œuvre de la
                        garantie.
                      </p>
                    </div>
                  </div>
                  {/* end modal content */}
                  {/* modal footer */}
                  <div className="row py-3 px-2" id="modal-footer">
                    <div className="col-0 col-md-2 col-lg-6" />
                    <div className="col-6 col-md-5 col-lg-3">
                      <Link to="/products">
                        <ButtonContainer
                          className="text-uppercase"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continuer vos achats
                        </ButtonContainer>
                      </Link>
                    </div>
                    <div className="col-6 col-md-5 col-lg-3">
                      <Link to="/cart">
                        <ButtonContainer
                          className="text-uppercase"
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Voir votre panier
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                  {/* end modal footer */}
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  #modal-content {
    background-color: #fff;
    border: 1.5rem solid var(--mainWhite);
    border-bottom: 0.5rem solid var(--mainWhite);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
  }

  #modal-header {
    color: var(--mainWhite);
    background-color: var(--mainBlue);
    padding-top: 1.1rem;
    align-items: center;
    justify-content: center;
  }

  #modal-footer {
    background-color: var(--mainBlue);
  }

  /* Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @media (max-width: 1026px) {
    display: inline;
  }
`;
