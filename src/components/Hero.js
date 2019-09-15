import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active item">
            <div
              className="banner"
              style={{
                backgroundImage: "url(" + "img/hero-1.png" + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <div className="carousel-caption text-center">
              <h2
                className="animated bounceInLeft"
                style={{ animationDelay: "1s" }}
              >
                mon <span>smartphone</span>
              </h2>
              <h3
                className="animated bounceInRight"
                style={{ animationDelay: "2s" }}
              >
                Lorem ipsum dolor sit amet.
              </h3>

              <Link
                to="/products"
                className="animated bounceInUp"
                style={{ animationDelay: "3s" }}
              >
                <div className="hero-link">obtenez le votre maintenant !</div>
              </Link>
            </div>
          </div>
          <div className="carousel-item item">
            <div
              className="banner"
              style={{
                backgroundImage: "url(" + "img/home-4.jpg" + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <div className="carousel-caption text-center align-self-center">
              <h2
                className="animated lightSpeedIn"
                style={{ animationDelay: "1s" }}
              >
                mon <span>smartphone</span>
              </h2>
              <h3
                className="animated lightSpeedIn"
                style={{ animationDelay: "2s" }}
              >
                Lorem ipsum dolor sit amet.
              </h3>

              <Link
                to="/products"
                className="animated lightSpeedIn"
                style={{ animationDelay: "3s" }}
              >
                <div className="hero-link">obtenez le votre maintenant !</div>
              </Link>
            </div>
          </div>
          <div className="carousel-item item">
            <div
              className="banner"
              style={{
                backgroundImage: "url(" + "img/home-5.png" + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
            <div className="carousel-caption text-center">
              <h2
                className="animated zoomInLeft"
                style={{ animationDelay: "1s" }}
              >
                mon <span>smartphone</span>
              </h2>
              <h3
                className="animated zoomInRight"
                style={{ animationDelay: "2s" }}
              >
                Lorem ipsum dolor sit amet.
              </h3>

              <Link
                to="/products"
                className="animated zoomInUp"
                style={{ animationDelay: "3s" }}
              >
                <div className="hero-link">obtenez le votre maintenant !</div>
              </Link>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
