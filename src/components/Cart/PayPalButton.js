import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { db } from "../../firebase";

export default class MyApp extends React.Component {
  addOrder = (order, client) => {
    db.collection("orders")
      .add({
        order,
        dateCreated: new Date().toLocaleString(),
        accepted: false,
        archived: false,
        client,
        orderTotal: this.props.total
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      console.log("email: " + payment.email);
      console.log("address: " + JSON.stringify(payment.address));
      console.log("cart", JSON.stringify(this.props.cart));

      //const client = { email: payment.email, address: payment.address };
      //const cart = { cart: this.props.cart };

      let order = this.props.cart.map(item => {
        return {
          id: item.id,
          name: item.title,
          quantity: item.count,
          totalQuantity: item.quantity,
          unitPrice: item.price,
          total: item.total
        };
      });

      console.log("order", order);

      this.addOrder(order, {
        email: payment.email,
        address: payment.address
      });

      this.props.clearCart();
      this.props.history.push("/");
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    let total = parseFloat((this.props.total / 9).toFixed(2)); // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: process.env.REACT_APP_SANDBOX_ID,
      production: "YOUR-PRODUCTION-APP-ID"
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
