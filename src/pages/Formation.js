import React, { Component, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Formation = () => {
  const [diplome, setDiplome] = useState("");
  const [etablissement, setEtablissement] = useState("");
  const [date, setDate] = useState("");

  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    history.push("/skill");

  };


  return (
    <div>
      <header />
      <main>
        <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center"
            style={{ backgroundImage: `url(${About}` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Your CV</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="text-center contact-title">Put Your Courses</h2>
          </div>
          <hr />
          <div className="col-lg-8">
            <form
              onSubmit={submit}
              className="form-contact contact_form"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => setDiplome(e.target.value)}
                      className="form-control"
                      name="diploma"
                      id="diploma"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your diploma'"
                      placeholder="Enter your diploma"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      onChange={(e) => setEtablissement(e.target.value)}
                      className="form-control w-100"
                      name="establishment"
                      id="establishment"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your establishment'"
                      placeholder=" Enter your establishment"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setDate(e.target.value)}
                      className="form-control valid"
                      name="date"
                      id="date"
                      type="date"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter  the date'"
                      placeholder="Enter the date"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="button button-contactForm boxed-btn"
                >
                  Save
                  </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );

};

export default Formation;
