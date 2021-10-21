import React, { useState, useEffect } from "react";

import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Footer from './../components/Footer';
import JobInterview from "../assets/img/recruter/job-interview.jpg"

import Test from "../assets/img/gallery/cv_bg.jpg";
import Job from "../components/Job";
import { Link } from "react-router-dom";

const RecruterHome = () => {
  const history = useHistory();

  let user = useSelector((state) => state.auth.user);
  let content;

  const { t, i18n } = useTranslation("homePage");
  const [category, setCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");

  const options = [
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Developement", label: "Mobile Developement" },
    { value: "Data Science", label: "Data Science" },
    { value: "Networking", label: "Networking" },
    { value: "deep learning", label: "deep learning" },
    { value: "Backend", label: "Backend" },
    { value: "Frontend", label: "Frontend" },
  ];

  const handlelocation = (selectedOption) => {
    setLocation(selectedOption.value.toLowerCase());
  };

  const handlechange = (e) => {
    setInterest(e.target.value);
    console.log(e.target.value);
  };


  const handlecategory = (category) => {
    // setCategory(category);
    // if (user){
    //   const res = axios.get(`/jobseekerInterest/${category}`);
    // }
    //if (category)
  };
  return (
    <div>
      <main>
        <div className="slider-area ">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center"
            style={{ backgroundImage: `url(${JobInterview}` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-10">
                  <div className="hero__caption">
                    <h1 style={{ color: "#eeeeee " }}>{t("titleRecruter")} </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <form action="#" className="search-box" style={{ position: "relative", top: "-30px" }}>
                    <div className="input-form">
                      <input
                        type="text"
                        placeholder="skills"
                        onChange={handlechange}
                      />
                    </div>
                    <div className="select-form">
                      <Select
                        className="react-select"
                        classNamePrefix="react-select"
                        placeholder="keywords"
                        isClearable
                        options={options}
                        onChange={handlelocation}
                      />
                    </div>
                    <div className="search-form">
                      <a >Search</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services section-pad-t30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>FEATURED TOURS Packages</span>
                  <h2>Browse Categories </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-brain"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("machine learning")}>
                        Machine Learning
                      </a>
                    </h5>
                    <span>(653)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-cms"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("web development")}>
                        Web Development
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-report"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("data science")}>
                        Data Science
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-app"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("mobile development")}>
                        Mobile Developement
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-helmet"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("cyber security")}>
                        Cyber Security
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-high-tech"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("information technology")}>
                        Information Technology
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-real-estate"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("networking")}>Networking</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-content"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("management it")}>
                        Management IT
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a href="job_listing.html" className="border-btn2">
                    Browse All Sectors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          style={{ backgroundImage: `url(${Test}` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera2">
                    {" "}
                    choose wisely your employees
                  </p>
                  <Link to="/exp" className="border-btn2 border-btn4">
                    See more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // featured jobs
        }
        <section className="featured-job-area feature-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {
                  //3aweni ya wael
                }
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-xl-10">
                <Job jobs={jobs} />
              </div>
            </div>
          </div>
        </section>

        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          data-background="assets/img/gallery/how-applybg.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>Apply process</span>
                  <h2> How it works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Publish a post</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Get a recommendation table for the applied jobSeekers</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur , seddo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Choose  the most skilled </h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
export default RecruterHome;