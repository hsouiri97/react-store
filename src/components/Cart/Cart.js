import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const cart = value.cart;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="mb-5">
                    <Title name="Mon" title="Panier" />
                    <div className="table-responsive">
                      <table className="table table-bordered text-center">
                        <CartColumns />
                        <CartList value={value} />
                      </table>
                    </div>
                    <CartTotal value={value} history={this.props.history} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
