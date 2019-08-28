import React, { Component } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto my-sm-3">
              <img src="/img/home-6.png" alt="home-1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h3>Nouveaux téléphones de marques internationales</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores doloremque eaque praesentium porro molestiae alias
                voluptas ipsa earum in illum.
              </p>
              <Link to="/products">
                <button type="button" className="btn btn-outline-dark btn-home">
                  Voir tout
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h3>Téléphones d'occasion et reconditionnés en très bon état.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores doloremque eaque praesentium porro molestiae alias
                voluptas ipsa earum in illum.
              </p>
              <Link to="/products">
                <button type="button" className="btn btn-outline-dark btn-home">
                  Voir tout
                </button>
              </Link>
            </div>
            <div className="col-12 col-md-6 mx-auto py-3 py-md-0 py-lg-0">
              <img src="/img/home-2.png" alt="home-2" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mx-auto py-3 py-md-0 py-lg-0">
              <img src="/img/home-3.png" alt="home-3" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h3>Des accessoires de qualité et 100% originaux.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores doloremque eaque praesentium porro molestiae alias
                voluptas ipsa earum in illum.
              </p>
              <Link to="/products">
                <button type="button" className="btn btn-outline-dark btn-home">
                  Voir tout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
