import React, { Component, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const RegisterJobSeeker = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    // todo: logout user before loggin in again
    console.log(email, password);
    try {
      const res = await axios.post("/jobseekers", {
        email,
        password,
        firstlastName,
        phoneNumber,
        username,
      });
      history.push("/login");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
    }
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
                    <h2>SIgn Up</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Inscription</h2>
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
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control w-100"
                    name="fullName"
                    id="fullName"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'fullName'"
                    placeholder="fullName"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control w-100"
                    name="lastName"
                    id="lastName"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'lastName'"
                    placeholder="lastName"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control w-100"
                    name="phonenumber"
                    id="phonenumber"
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'phone number'"
                    placeholder="phone number"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control w-100"
                    name="username"
                    id="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'username'"
                    placeholder="username"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control w-100"
                    name="Email"
                    id="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Email'"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="password"
                    id="password"
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'password'"
                    placeholder="password"
                  />
                </div>
              </div>


              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="button button-contactForm boxed-btn"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
};

export default EmployerRegister;
