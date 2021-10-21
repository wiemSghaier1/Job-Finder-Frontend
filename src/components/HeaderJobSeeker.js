import React from "react";
import Logo from "../assets/img/logo/logo.png";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";

const HeaderJobSeeker = () => {
  let user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const path = history.location.pathname.includes("recruter")
    ? "/"
    : "/recruter";
  const homePath = history.location.pathname.includes("recruter")
    ? "/recruter"
    : "/";
  if (path == "/") {
    if (user && user.username) user = null;
  }
  if (path == "/recruter") {
    if (user && user.full_name) user = null;
  }

  const changeSection = () => {
    console.log(path);
    window.location = path;
  };
  const logout = async () => {
    try {
      const res = await axios.post("/logout");
      dispatch(setUser(null));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <Link to={homePath}>
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        <li>
                          <Link to={homePath}>Home</Link>
                        </li>

                        {homePath == "/recruter" ? (
                          <li>
                            <Link to="#">Profil </Link>
                          </li>
                        ) : (
                          <li>
                            <Link to="#">Find Jobs </Link>
                          </li>
                        )}
                        <li>
                          <Link to="about.html">About</Link>
                        </li>
                        <li>
                          <a href="#">Page</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="elements.html">Elements</a>
                            </li>
                            <li>
                              <a href="job_details.html">job Details</a>
                            </li>
                          </ul>
                        </li>
                        {path == "/" ? (
                          <li>
                            <button
                              to={path}
                              onClick={changeSection}
                              className="btn head-btn2"
                            >
                              Get Hired
                            </button>
                          </li>
                        ) : (
                          <li>
                            {" "}
                            <button
                              to={path}
                              onClick={changeSection}
                              className="btn head-btn2"
                            >
                              I'm a recruter
                            </button>{" "}
                          </li>
                        )}
                        <div className="button-wrapper">
                          {user ? (
                            <button className="btn head-btn1" onClick={logout}>
                              logout
                            </button>
                          ) : (
                            <>
                              <Link
                                to={
                                  path == "/"
                                    ? "/recruter/register"
                                    : "/register"
                                }
                                className="btn head-btn1"
                              >
                                Register
                              </Link>
                              <Link
                                to={path == "/" ? "/recruter/login" : "/login"}
                                className="btn head-btn1"
                              >
                                Login
                              </Link>{" "}
                            </>
                          )}
                        </div>
                      </ul>
                    </nav>
                  </div>
                  {/* here */}
                  {/* <div className="header-btn d-none f-right d-lg-block">
                                        {user ? <button className="btn head-btn1" onClick={logout}>logout</button> :
                                            <><Link to={path=="/" ?
                                                "/recruter/register"
                                                : "/register"} className="btn head-btn1">Register</Link>
                                                <Link to={path=="/" ?
                                                    "/recruter/login"
                                                    : "/login"} className="btn head-btn1">Login</Link> </>}
                                    </div> */}
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderJobSeeker;
