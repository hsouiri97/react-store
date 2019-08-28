import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  return (
    <tbody>
      {value.cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </tbody>
  );
}
