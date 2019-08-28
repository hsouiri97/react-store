import React, { Component } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobeAfrica,
  FaLink
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-10 col-md-3 mx-auto">
                <div className="single-footer">
                  <h3 className="footer-h3 text-uppercase mb-4">
                    qui sommes nous
                  </h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    nesciunt molestiae ipsa ad rem, blanditiis laudantium totam
                    aliquid quibusdam fugiat. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                  <ul className="footer-social list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com">
                        <span className="footer-icons">
                          <FaFacebookF />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com">
                        <span className="footer-icons">
                          <FaInstagram />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.twitter.com">
                        <span className="footer-icons">
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://aboutme.google.com/u/0/?referer=gplus">
                        <span className="footer-icons">
                          <FaGooglePlusG />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-10 col-md-3 mx-auto">
                <div className="single-footer">
                  <h3 className="footer-h3 text-uppercase mb-4">
                    liens utiles
                  </h3>
                  <ul className="link-area">
                    <li>
                      <Link to="/products">
                        <span className="footer-icons">
                          <FaLink />
                        </span>
                        <span className="text-capitalize">nos produits</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/suppliers">
                        <span className="footer-icons">
                          <FaLink />
                        </span>
                        <span className="text-capitalize">
                          nos fournisseurs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <span className="footer-icons">
                          <FaLink />
                        </span>
                        <span className="text-capitalize">
                          a propos de nous
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span className="footer-icons">
                        <FaLink />
                      </span>
                      <Link to="/contact">
                        <span className="text-capitalize">contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-10 col-md-3 mx-auto">
                <div className="single-footer">
                  <h3 className="footer-h3 text-uppercase mb-4">
                    contactez nous
                  </h3>
                  <ul className="link-area">
                    <li>
                      <span className="contact-icons">
                        <FaPhone />
                      </span>
                      +212 12345678
                    </li>
                    <li>
                      <span className="contact-icons">
                        <FaEnvelope />
                      </span>{" "}
                      example@example.com
                    </li>
                    <li>
                      <span className="contact-icons">
                        <FaMapMarkerAlt />
                      </span>{" "}
                      1234, Av Mohammed V, Rabat, Maroc.
                    </li>
                    <li>
                      <span className="contact-icons">
                        <FaGlobeAfrica />
                      </span>{" "}
                      www.mon-smartphone.ma
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-10 col-md-3 mx-auto">
                <div className="single-footer">
                  <h3 className="footer-h3 text-uppercase mb-4">
                    paiment et livraison
                  </h3>
                  <img
                    src="img/paypal-logo.png"
                    className="img-fluid"
                    alt="paypal-logo"
                  />
                  <img
                    src="img/aramex-logo.png"
                    className="img-fluid"
                    alt="aramex-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-area text-center">
                  <p>&copy; 2019, Tous droits réservés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

/*
 */
