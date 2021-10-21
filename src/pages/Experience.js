import React, { Component, useState } from "react";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Experience = () => {
  const [poste, setPoste] = useState("");
  const [description, setDescription] = useState("");
  const [duree, setDuree] = useState("");
  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post("/experience", {
    //     poste,
    //     description,
    //     duree,
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error.response.data);
    // }
    history.push("/formation");

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
            <h2 className="text-center contact-title">Put Your Experience</h2>
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
                      onChange={(e) => setPoste(e.target.value)}
                      className="form-control"
                      name="poste"
                      id="poste"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your working position'"
                      placeholder="Enter your working position"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control w-100"
                      name="description"
                      id="description"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter description'"
                      placeholder=" Enter description"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      onChange={(e) => setDuree(e.target.value)}
                      className="form-control valid"
                      name="dureet"
                      id="duree"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter  start date'"
                      placeholder="Enter Start date
"
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

export default Experience;
