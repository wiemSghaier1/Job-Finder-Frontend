import React, { useState, useEffect } from "react";

import Select from "react-select";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import Subscriptions from "../components/Subscriptions";

import Hero from "../assets/img/hero/h1_hero.jpg";
import Test from "../assets/img/gallery/cv_bg.jpg";
import Job from "../components/Job";
import axios from "axios";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const history = useHistory();

  let user = useSelector((state) => state.auth.user);
  let content;

  const { t, i18n } = useTranslation("homePage");
  const [category, setCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const [recommanded, setRecommanded] = useState([]);

  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");

  const options = [
    { value: "Tunis", label: "Tunis" },
    { value: "Sousse", label: "Sousse" },
    { value: "Sfax", label: "Sfax" },
    { value: "Monastir", label: "Monastir" },
    { value: "Mahdia", label: "Mahdia" },
    { value: "Gabes", label: "Gabes" },
  ];
  const fetchjobs = async () => {
    const res = await axios.get(`/posts `);
    console.log(res.data);
    setJobs(res.data);
  };
  const fetchRecommanded = async () => {
    const res = await axios.get(`/postsRecomanded `);
    console.log(res.data);
    setRecommanded(res.data);
  }
  const handlecategory = (category) => {
    // setCategory(category);
    // if (user){
    //   const res = axios.get(`/jobseekerInterest/${category}`);
    // }
    //if (category)
    //history.push(`/jobListing?category=${category}`); ///3aweni ya wael ma7abetch temchi thezni toul
  };


  useEffect(() => {
    fetchjobs();
    if (user) {
      fetchRecommanded();
    }
  }, []);

  const handlelocation = (selectedOption) => {
    setLocation(selectedOption.value.toLowerCase());
  };

  const handlechange = (e) => {
    setInterest(e.target.value);
    console.log(e.target.value);
  };

  const handleclick = () => {
    if (user) {
      const res = axios.get(`/jobseekerInterest/${interest}`);
    }
    history.push(`/jobListing?query=${interest}&location=${location}`);
  };

  return (
    <div>
      <main>
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center"
              style={{ backgroundImage: `url(${Hero}` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <h1>{t("title")} </h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <input
                          type="text"
                          placeholder="Job Tittle or keyword"
                          onChange={handlechange}
                        />
                      </div>
                      <div className="select-form">
                        <Select
                          className="react-select"
                          classNamePrefix="react-select"
                          placeholder="Location"
                          isClearable
                          options={options}
                          onChange={handlelocation}
                        />
                      </div>
                      <div className="search-form">
                        <a onClick={handleclick}>Find job</a>
                      </div>
                    </form>
                  </div>
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
                  <h2>Browse Categories </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-brain"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=machine learning">
                        Machine Learning
                      </Link>

                    </h5>
                    <span>(653)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-laptop"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-chart-bar"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=data science">
                        Data Science
                      </Link>

                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=mobile development">
                        Mobile Developement
                      </Link>

                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-user-secret"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=cyber security">
                        Cyber Security
                      </Link>


                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-cogs"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=information technology">
                        Information Technology
                      </Link>

                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fab fa-chromecast"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=networking">
                        Networking
                      </Link>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <i class="fas fa-tasks"></i>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <Link to="/jobListing?category=management it">
                        Management IT
                      </Link>

                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <Link to="/jobListing" className="border-btn2">
                    Browse All Sectors
                  </Link>
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
                  <p className="pera1">FEATURED TOURS Packages</p>
                  <p className="pera2">
                    {" "}
                    Make a Difference with Your Verified Resume!
                  </p>
                  <Link to="/exp" className="border-btn2 border-btn4">
                    Verify Your Skills
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
                {user ? (
                  <div className="section-tittle text-center">
                    <span>Your fit Jobs</span>
                    <h2>Recomanded Jobs</h2>
                  </div>
                ) : (
                  <div className="section-tittle text-center">
                    <span>Recent Job</span>
                    <h2>Featured Jobs</h2>
                  </div>
                )}
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-xl-10">
                <Job jobs={user ? recommanded : jobs} />
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
                    <h5>1. Search a job</h5>
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
                    <h5>2. Apply for job</h5>
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
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Get your job</h5>
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
                          <span>Wiem Sghaier</span>
                          <p>Software Engineer Student</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Never give up on a dream just because of the time it
                          will take to accomplish it. The time will pass
                          anyway.” —Earl Nightingale
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Wael Lataoui</span>
                          <p>Software Engineer Student</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “You get to decide where your time goes. You can
                          either spend it moving forward, or you can spend it
                          putting out fires. You decide. And if you don’t
                          decide, others will decide for you.” —Tony Morgan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Koussay Lahwel</span>
                          <p>Software Engineer Student</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “If you don’t design your own life plan, chances are
                          you’ll fall into someone else’s plan and guess what
                          they have planned for you? Not much.” —Jim Rohn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Hamida Tlili</span>
                          <p>Software Engineer Student</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Don’t aim for success if you want it, just do what
                          you love and believe in and it will come naturally.”
                          —David Frost
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscriptions">
          <Subscriptions></Subscriptions>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
