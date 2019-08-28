import React from "react";
import { Link, Redirect } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotal({ value, history }) {
  const { cart, cartSubTotal, cartShipping, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-sm-center text-md-right text-lg-right text-xl-right">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => {
                value.clearAlert();
              }}
            >
              vider le panier
            </button>

            <h5>
              <span className="text-title">sous-total: </span>
              {cartSubTotal} DH
            </h5>
            <h5>
              <span className="text-title">livraison: </span>
              {cartShipping} DH
            </h5>
            <h5>
              <span className="text-title">total: </span>
              {cartTotal} DH
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
              cart={cart}
            ></PayPalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
