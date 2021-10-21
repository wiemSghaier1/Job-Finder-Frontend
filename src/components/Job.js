import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Job = (props) => {
  /*     const fetchPosts =     async (min="",max=
    "",category="",location="") => {

        const res = await axios.get(`/posts?min=${min}&max=${max}&category=${category}&location=${location} `);
        console.log(res.data);
        setData(res.data);
      
        }
    useEffect(() => {
 
          fetchPosts();           
    }, []) */

  useEffect(() => {
    console.log("job list component", props.jobs);
  }, []);

  return (
    <div>
      {props.jobs.map((job, index) => (
        <Link to={{ pathname: `/jobDetails/${job.id}` }} key={index}>
          <div className="single-job-items mb-30">
            <div className="job-items">
              <div className="company-img">
                <img src={job.employeur.avatar} alt=""></img>
              </div>
              <div className="job-tittle job-tittle2">
                <h4> {job.title}</h4>
                <ul>
                  <li>{job.employeur.fullname}</li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {job.location}{" "}
                  </li>
                  <li>{job.price} </li>
                </ul>
              </div>
            </div>

            <div className="items-link items-link2 f-right">
              <Link to={{ pathname: `/jobDetails/${job.id}` }}>
                {job.jobType}{" "}
              </Link>
              <span>{new Date(job.createdAt * 1000).toDateString()}</span>
            </div>
            <br />
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Job;
