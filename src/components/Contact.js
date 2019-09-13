import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { FaEnvelope, FaPhoneVolume, FaMapMarkedAlt } from "react-icons/fa";
import validator from "validator";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: "",
      l_name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        f_name: "",
        l_name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "f_name":
        errors.f_name = validator.isEmpty(value.trim())
          ? "ce champs est requis!"
          : "";
        break;
      case "l_name":
        errors.l_name = validator.isEmpty(value.trim())
          ? "ce champs est requis!"
          : "";
        break;
      case "email":
        errors.email = !validator.isEmail(value.trim())
          ? "cet email n'est pas valide!"
          : "";
        break;
      case "subject":
        errors.subject = validator.isEmpty(value.trim())
          ? "ce champs est requis!"
          : "";
        break;
      case "message":
        errors.message = validator.isEmpty(value.trim())
          ? "ce champs est requis!"
          : "";
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  findKeyByValue = (object, value) => {
    return Object.keys(object).filter(key => object[key] === value);
  };

  checkFields = () => {
    let { email, errors, ...rest } = { ...this.state };
    let valid = true;
    console.log(this.findKeyByValue(rest, ""));
    this.findKeyByValue(rest, "").forEach(key => {
      errors[key] = "ce champs est requis!";
      this.setState(() => {
        return { errors };
      });
    });
    !validator.isEmail(email) && (errors.email = "cet email n'est pas valide!");
    this.setState(() => {
      return { errors };
    });
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));

    return valid;
  };

  validateForm = errors => {
    const { f_name, l_name, email, subject, message } = this.state;
    let valid = true;
    if (
      f_name.trim() === "" ||
      l_name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      valid = false;
    } else {
      Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    }

    return valid;

    // this.setState(() => {
    //   return { valid: v };
    // });
  };

  resetForm = () => {
    this.setState(() => {
      return {
        f_name: "",
        l_name: "",
        email: "",
        subject: "",
        message: "",
        errors: {
          f_name: "",
          l_name: "",
          email: "",
          subject: "",
          message: ""
        }
      };
    });
  };

  handleSubmit = () => {
    console.log("message sent");
    const { f_name, l_name, email, subject, message } = this.state;
    let winFeature = "location=no";
    let url =
      "https://us-central1-vue-firebase-ecommerce.cloudfunctions.net/contactMail" +
      "?f_name=" +
      f_name +
      "&l_name=" +
      l_name +
      "&email=" +
      email +
      "&subject=" +
      subject +
      "&message=" +
      message;
    window.open(url, "send message", winFeature);
    this.resetForm();
  };

  componentDidMount() {
    //this.validateForm(this.state.errors);
    //this.test();
  }

  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <div className="container mb-5">
          <div className="text-center mb-3">
            <Title name="contactez" title="nous" />
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos
              amet similique at officiis temporibus?
            </h6>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card text-center p-5">
                <div className="card-header">
                  <div className="card-icon ">
                    <FaMapMarkedAlt />
                  </div>
                </div>
                <div className="card-body pb-0">
                  <p className="card-text">
                    1234, Av Mohammed V, Rabat, Maroc.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card text-center p-5">
                <div className="card-header">
                  <div className="card-icon ">
                    <FaPhoneVolume />
                  </div>
                </div>
                <div className="card-body pb-0">
                  <p className="card-text">+212-612345678</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="card text-center p-5">
                <div className="card-header">
                  <div className="card-icon ">
                    <FaEnvelope />
                  </div>
                </div>
                <div className="card-body pb-0">
                  <a className="card-text" href="mailto:example@example.com">
                    contact@mon-smartphone.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
              <h5>Laissez-nous Un Message</h5>
              <p className="gray-text">
                Aenean massa diam, viverra vitae luctus sed, gravida eget est.
                Etiam nec ipsum porttitor, consequat libero eu, dignissim eros.
                Nulla auctor lacinia enim id mollis.
              </p>
              <div className="container p-0">
                <form>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="l_name">Nom*: </label>
                        <input
                          type="text"
                          id="l_name"
                          name="l_name"
                          value={this.state.l_name}
                          className={
                            this.state.errors.l_name === ""
                              ? "form-control"
                              : "form-control has-error"
                          }
                          onBlur={this.handleChange}
                          onChange={this.handleChange}
                        />
                        <p className="text-error gray-text">
                          {this.state.errors.l_name}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="f_name">Prénom*: </label>
                        <input
                          type="text"
                          id="f_name"
                          name="f_name"
                          value={this.state.f_name}
                          className={
                            this.state.errors.f_name === ""
                              ? "form-control"
                              : "form-control has-error"
                          }
                          onBlur={this.handleChange}
                          onChange={this.handleChange}
                        />
                        <p className="text-error gray-text">
                          {this.state.errors.f_name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="l_name">Email*: </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={this.state.email}
                          className={
                            this.state.errors.email === ""
                              ? "form-control"
                              : "form-control has-error"
                          }
                          onBlur={this.handleChange}
                          onChange={this.handleChange}
                        />
                        <p className="text-error gray-text">
                          {this.state.errors.email}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="subject">Sujet*: </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={this.state.subject}
                          className={
                            this.state.errors.subject === ""
                              ? "form-control"
                              : "form-control has-error"
                          }
                          onBlur={this.handleChange}
                          onChange={this.handleChange}
                        />
                        <p className="text-error gray-text">
                          {this.state.errors.subject}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="message">Votre message*:</label>
                        <textarea
                          name="message"
                          id="messsage"
                          value={this.state.message}
                          cols="30"
                          rows="10"
                          className={
                            this.state.errors.message === ""
                              ? "form-control"
                              : "form-control has-error"
                          }
                          onBlur={this.handleChange}
                          onChange={this.handleChange}
                        ></textarea>
                        <p className="text-error gray-text">
                          {this.state.errors.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      {/* <a
                        href="https://www.google.com"
                        target="blank"
                        className={
                          this.validateForm(this.state.errors)
                            ? "btn btn-outline-info text-uppercase float-right"
                            : "btn btn-outline-info text-uppercase float-right disabled-link"
                        }
                      >
                        envoyer le message
                      </a> */}
                      <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={() => {
                          if (this.checkFields()) {
                            this.handleSubmit();
                          }
                        }}
                      >
                        Envoyer le message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <h5>Heures d'ouverture</h5>
              <ul className="time-list gray-text">
                <li>
                  <span className="week-name">Lundi</span> <span>12-6 PM</span>
                </li>
                <li>
                  <span className="week-name">Mardi</span> <span>12-6 PM</span>
                </li>
                <li>
                  <span className="week-name">Mercredi</span>{" "}
                  <span>12-6 PM</span>
                </li>
                <li>
                  <span className="week-name">Jeudi</span> <span>12-6 PM</span>
                </li>
                <li>
                  <span className="week-name">Vendredi</span>{" "}
                  <span>12-6 PM</span>
                </li>
                <li>
                  <span className="week-name">Samedi</span> <span>12-6 PM</span>
                </li>
                <li>
                  <span className="week-name">Diamanche</span>{" "}
                  <span>Ferm&eacute;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
