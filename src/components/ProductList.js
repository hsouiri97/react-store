import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context"; //for getting all the products from the context
//the context get the data from the backend

export default class ProductList extends Component {
  state = {
    products: []
  };

  /*readData = () => {
    let tempProducts = [];
    db.collection("products")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //console.log(`${doc.id} => ${JSON.stringify(doc.data(), null, 8)}`);
          tempProducts.push(doc.data());
        });
        this.setState(
          () => {
            return { products: tempProducts };
          },
          () => {
            console.log("products: " + this.state.products);
            const {
              id,
              created_at,
              description,
              price,
              name
            } = this.state.products[0];
            console.log(
              "id: " +
                id +
                " created-at: " +
                created_at +
                " description: " +
                description +
                "\nprice: " +
                price +
                " name: " +
                name
            );
          }
        );
      });
  };*/
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <ProductConsumer>
              {value => {
                if (value.sortedProducts.length === 0) {
                  return (
                    <div className="text-uppercase col-9 col-md-9 col-lg-9 text-center mx-auto">
                      <h3>
                        Malheureusement, aucun produit ne correspond à vos
                        paramètres de recherche
                      </h3>
                    </div>
                  );
                }

                return value.sortedProducts.map(product => {
                  return <Product key={product.id} product={product} />;
                  //we could pass the methods also as props but instead we will acceess them in
                  //Product.js also with the ProductConsumer
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
