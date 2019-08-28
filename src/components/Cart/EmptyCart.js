import React from "react";

export default function EmptyCart() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-10 mx-auto text-center text-title"
            style={{ height: "100vh", padding: "5rem 0 0 0" }}
          >
            <h1>VOTRE CARTE EST ACTUELLEMENT VIDE.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
