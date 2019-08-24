import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-lg-2 mx-auto">products</div>
        <div className="col-lg-2 mx-auto">name of products</div>
        <div className="col-lg-2 mx-auto">price</div>
        <div className="col-lg-2 mx-auto">quantity</div>
        <div className="col-lg-2 mx-auto">remove</div>
        <div className="col-lg-2 mx-auto">total</div>
      </div>
    </div>
  );
}
