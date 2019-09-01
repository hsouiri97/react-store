import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { withProductContext } from "../context";

const ProductsContainer = ({ context }) => {
  const { products } = context;
  return (
    <>
      <ProductFilter products={products} />
      <ProductList />
    </>
  );
};

export default withProductContext(ProductsContainer);
