import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import { db } from "./firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect } from "react-router-dom";

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
    this._isMounted = true;
    this.getData();
    this.setState(() => {
      return {
        detailProduct: !localStorage.getItem("detailProduct")
          ? {}
          : JSON.parse(localStorage.getItem("detailProduct")),
        cart: !localStorage.getItem("cart")
          ? []
          : JSON.parse(localStorage.getItem("cart")),
        cartSubTotal: !localStorage.getItem("cartSubTotal")
          ? 0
          : JSON.parse(localStorage.getItem("cartSubTotal")),
        cartShipping: !localStorage.getItem("cartShipping")
          ? 0
          : JSON.parse(localStorage.getItem("cartShipping")),
        cartTotal: !localStorage.getItem("cartShipping")
          ? 0
          : JSON.parse(localStorage.getItem("cartTotal"))
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
            /*console.log(
              "this.state.products[0].inCart: " + this.state.products[0].inCart
            );
            console.log("tempProducts[0].inCart: " + tempProducts[0].inCart);
            console.log("virgins[0].inCart: " + virgins[0].inCart);
            console.log(
              "virginsProducts[0].inCart: " +
                this.state.virginProducts[0].inCart
            );*/
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
        this.addTotals();
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
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    if (product.count < product.quantity) {
      product.count += 1;
      product.total = product.count * product.price;
    }
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      }
    );
  };

  changeCount = (id, change) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    if (change === "increment") {
      if (product.count < product.quantity) {
        product.count += 1;
        product.total = product.count * product.price;
      }
    } else if (change === "decrement") {
      if (product.count > 1) {
        product.count -= 1;
        product.total = product.count * product.price;
      }
    }

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.count > 1) {
      product.count -= 1;
      product.total = product.count * product.price;
    }
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      }
    );
  };

  removeFromCart = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    console.log("here is the index: " + index);
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    console.log(removedProduct);
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: tempCart
        };
      },
      () => {
        localStorage.setItem("products", JSON.stringify(this.state.products));
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        this.addTotals();
      }
    );
    console.log("ha remove");
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        localStorage.removeItem("cart");
        localStorage.removeItem("products");
        this.getData();
        this.addTotals();
      }
    );
  };

  clearAlert = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.clearCart();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempShipping = subTotal * 0.14;
    const shipping = parseFloat(tempShipping.toFixed(2));
    const tempTotal = subTotal + shipping;
    const total = parseFloat(tempTotal.toFixed(2));
    this.setState(
      () => {
        return {
          cartSubTotal: subTotal,
          cartShipping: shipping,
          cartTotal: total
        };
      },
      () => {
        localStorage.setItem(
          "cartSubTotal",
          JSON.stringify(this.state.cartSubTotal)
        );
        localStorage.setItem(
          "cartShipping",
          JSON.stringify(this.state.cartShipping)
        );
        localStorage.setItem("cartTotal", JSON.stringify(this.state.cartTotal));
      }
    );
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
          changeCount: this.changeCount,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
          clearAlert: this.clearAlert
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
