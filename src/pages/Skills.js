import React, { Component, useState } from "react";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
const Skills = () => {
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    // todo: logout user before loggin in again
    history.push("/quiz");
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
                    <h2>SKILL</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="text-center contact-title">Put Your Skills</h2>
          </div>
          <div className="col-lg-12">
            <form
              onSubmit={submit}
              className="form-contact contact_form"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="skill"
                      id="skill"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your skill'"
                      placeholder="Enter your skill"
                    />
                  </div>
                </div>

              </div>
              <div className=" text-center form-group mt-3">
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

export default Skills;
