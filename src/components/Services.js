import React, { Component } from "react";
import {
  FaThumbsUp,
  FaShippingFast,
  FaMoneyBillAlt,
  FaPaypal
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaThumbsUp />,
        title: "Produits de Qualité",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eveniet"
      },
      {
        icon: <FaShippingFast />,
        title: "Livraison Rapide",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eveniet"
      },
      {
        icon: <FaMoneyBillAlt />,
        title: "Meilleur Rapport Qualité-Prix",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eveniet"
      },
      {
        icon: <FaPaypal />,
        title: "Paiment Sécurisé avec PayPal",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eveniet"
      }
    ]
  };
  render() {
    return (
      <>
        <Title name="nos" title="services" />
        <div className="row text-center ">
          {this.state.services.map((item, index) => {
            return (
              <div className="col-9 col-md-3 mx-auto service">
                <article key={index}>
                  <span>{item.icon}</span>
                  <h6 className="mb-3">{item.title}</h6>
                  <p className="gray-text">{item.info}</p>
                </article>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
