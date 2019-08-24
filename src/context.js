import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import { db } from "./firebase";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    virginProducts: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartShipping: 0,
    cartTotal: 0
  };
  componentDidMount() {
    //this.setProducts();
    this.getData();
    this.setState(() => {
      return {
        detailProduct: !localStorage.getItem("detailProduct")
          ? {}
          : JSON.parse(localStorage.getItem("detailProduct")),
        cart: !localStorage.getItem("cart")
          ? []
          : JSON.parse(localStorage.getItem("cart"))
      };
    });
  }

  getData = () => {
    let tempProducts = [];
    let virgins = [];
    db.collection("products")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(item => {
          //console.log(`${doc.id} => ${JSON.stringify(doc.data(), null, 8)}`);
          const singleItem = { ...item.data() };
          //virgins = [...virgins, singleItem];//warning do not go with this shitty line
          //virgins = [...virgins, item.data()];
          virgins = [...virgins, { ...singleItem }];
          tempProducts = [...tempProducts, singleItem];
        });
        this.setState(
          () => {
            return {
              products: !localStorage.getItem("products")
                ? tempProducts
                : JSON.parse(localStorage.getItem("products")),
              virginProducts: virgins
            };
          },
          () => {
            console.log(
              "this.state.products[0].inCart: " + this.state.products[0].inCart
            );
            console.log("tempProducts[0].inCart: " + tempProducts[0].inCart);
            console.log("virgins[0].inCart: " + virgins[0].inCart);
            console.log(
              "virginsProducts[0].inCart: " +
                this.state.virginProducts[0].inCart
            );
          }
        );
      });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(
      () => {
        return { detailProduct: product };
      },
      () => {
        localStorage.setItem(
          "detailProduct",
          JSON.stringify(this.state.detailProduct)
        );
      }
    );
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        localStorage.setItem("products", JSON.stringify(this.state.products));
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalProduct: {}, modalOpen: false };
    });
  };

  increment = id => {
    console.log("this is increment method");
  };

  decrement = id => {
    console.log("this is decrementb method");
  };

  removeFromCart = id => {
    console.log("this is remove from cart method");
  };

  clearCart = id => {
    console.log("this is clear cart method");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          //getting all the propreties with their values in the state
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
