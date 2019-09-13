import React from "react";
import Title from "./Title";
import Services from "./Services";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container mb-5">
          <div className="text-center mb-3">
            <Title name="qui sommes" title="nous ?" />
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos
              amet similique at officiis temporibus?
            </h6>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mx-auto my-sm-3 profile-img">
              <img
                src="/img/about-2.jpeg"
                alt="suppliers"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h2>Prénom NOM</h2>
              <h3 className="lead text-capitalize">directeur du site</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h2>Prénom NOM</h2>
              <h3 className="lead text-capitalize">
                responsable de communication
              </h3>
            </div>
            <div className="col-12 col-md-6 mx-auto my-sm-3 profile-img">
              <img
                src="/img/about-1.jpg"
                alt="suppliers"
                className="rounded-circle img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mx-auto my-sm-3 profile-img">
              <img
                src="/img/about-3.jpg"
                alt="suppliers"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h2>Prénom NOM</h2>
              <h3 className="lead text-capitalize">responsable commerciale</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 text-center my-auto py-3 py-md-0 py-lg-0">
              <h2>Prénom NOM</h2>
              <h3 className="lead text-capitalize">responsable logistique</h3>
            </div>
            <div className="col-12 col-md-6 mx-auto my-sm-3 profile-img">
              <img
                src="/img/about-4.jpg"
                alt="suppliers"
                className="rounded-circle img-fluid"
              />
            </div>
          </div>
          <div className="services">
            <Services />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
