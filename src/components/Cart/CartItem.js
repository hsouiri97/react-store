import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, images, price, total, count, quantity } = item;
  const { changeCount, removeFromCart } = value;
  return (
    <tr>
      <td className="align-middle">
        <img
          src={images[0]}
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
          className="img-fluid"
        />
      </td>
      <td className="align-middle">{title}</td>
      <td className="align-middle">{price}</td>
      <td className="align-middle">
        <p className="text-muted">{quantity} disponibles</p>
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              changeCount(id, "decrement");
            }}
          >
            &#8722;
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              changeCount(id, "increment");
            }}
          >
            &#43;
          </span>
        </div>
      </td>
      <td className="align-middle">
        <div
          className="cart-icon text-danger"
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <i className="fa fa-trash" />
        </div>
      </td>
      <td className="align-middle">
        <strong>{total} DH</strong>
      </td>
    </tr>
  );
}

/**
 * <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-lg-2">
        <span className="d-lg-none">price: </span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 mt-lg-2">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +
          </span>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 mt-lg-2">
        <div
          className="cart-icon text-danger"
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <i className="fa fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-lg-2">
        <strong>item total ${total}</strong>
      </div>
    </div>
 */
