import react, { useEffect, useState } from "react";
import About from "../assets/img/hero/about.jpg";
import Footer from "../components/Footer";
import axios from "axios";
//import { useParams } from "react-router";

const JobDetails = (props) => {
  //let {jobId} = useParams();
  const params = props.match.params;
  const [job, setJob] = useState("");

  const fetchJobById = async (id = "") => {
    const res = await axios.get(`/post/${id}`);
    console.log(res.data[0].tags);
    setJob(res.data[0]);
  };

  useEffect(() => {
    console.log(params.id);
    fetchJobById(params.id);
  }, []);
  return (
    <div>
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
                    <h2>{job.category}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="job-post-company pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-8">
                <div className="single-job-items mb-50">
                  <div className="job-items">
                    <div className="company-img company-img-details">
                      <a href="#">
                        <img src="assets/img/icon/job-list1.png" alt="" />{//fazet l imagee ma 3raftech kifeh
                                                                          }
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href="#">
                        <h4>{job.title} </h4>
                      </a>
                      <ul>
                        <li>{job.employeur ? job.employeur.fullname : " "}</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>{job.location}
                        </li>
                        <li>{job.price}Dt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="job-post-details">
                  <div className="post-details1 mb-50">
                    <div className="small-section-tittle">
                      <h4>Job Description</h4>
                    </div>
                    <p>
                     {job.description}
                    </p>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Required Knowledge, Skills, and Abilities</h4>
                    </div>
                    <ul>
                      {job.tags ? job.tags.map((tag, index) => (
                        <li>{tag}</li>
                      )): ""}
                    </ul>
                  </div>
                 
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  <div className="small-section-tittle">
                    <h4>Job Overview</h4>
                  </div>
                  <ul>
                    <li>
                      Posted date : <span>{new Date(job.createdAt * 1000).toDateString()}</span>
                    </li>
                    <li>
                      Location : <span>{job.location}</span>
                    </li>
                    <li>
                      Job nature : <span>{job.jobType}</span>
                    </li>
                    <li>
                      Salary : <span>{job.price}</span>
                    </li>
                    
                  </ul>
                  <div className="apply-btn2">
                    <a href="#" className="btn">
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="post-details4  mb-50">
                  <div className="small-section-tittle">
                    <h4>Company Information</h4>
                  </div>
                  <span>{job.employeur ? job.employeur.fullname : " "}</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <ul>
                    <li>
                      Name: <span>{job.employeur ? job.employeur.fullname : " "} </span>
                    </li>
                    <li>
                      Email: <span>{job.employeur ? job.employeur.email : " "}</span>
                    </li>
                    <li>
                      Phone: <span>{job.employeur ? job.employeur.phoneNumber : " "}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default JobDetails;
