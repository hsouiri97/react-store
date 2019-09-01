import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";
import Title from "./Title";

const ProductFilter = ({ products }) => {
  const context = useContext(ProductContext);

  function getUnique(items, value) {
    return [...new Set(items.map(item => item[value]))];
  }

  const { handleChange, type, company, price, minPrice, maxPrice } = context;

  let types = getUnique(products, "type");
  types = ["tout", ...types];
  //returning JSX
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let companies = getUnique(products, "company");
  companies = ["tout", ...companies];
  //returning JSX
  companies = companies.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <div className="container">
      <Title title="nos produits" />
      <form>
        <div className="row text-center text-capitalize align-items-center">
          <div className="col-9 col-md-3 col-lg-3 mx-auto">
            <div className="form-group">
              <label htmlFor="type">type du produit</label>
              <select
                name="type"
                id="type"
                value={type}
                className="form-control"
                onChange={handleChange}
              >
                {types}
              </select>
            </div>
          </div>
          <div className="col-9 col-md-6 col-lg-6 mx-auto">
            <div className="form-group">
              <label htmlFor="type">
                {price >= 0 && price < 1
                  ? "prix du produit"
                  : `prix du produit: ${price} DH`}
              </label>
              <input
                type="range"
                name="price"
                id="price"
                className="form-control custom-range"
                min={minPrice}
                max={maxPrice}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-9 col-md-3 col-lg-3 mx-auto">
            <div className="form-group">
              <label htmlFor="company">marque du produit</label>
              <select
                name="company"
                id="company"
                value={company}
                className="form-control"
                onChange={handleChange}
              >
                {companies}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
