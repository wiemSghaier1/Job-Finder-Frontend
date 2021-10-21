import React, { useEffect, useState } from 'react'
import axios from "axios"
import About from "../assets/img/hero/about.jpg"
import Jobs from '../components/Jobs'
import { useLocation } from "react-router-dom";
const JobListing = () => {
    const searchParams = new URLSearchParams(useLocation().search);
    const query = searchParams.get("query");
    const location = searchParams.get("location");
    const category = searchParams.get("category");
    return (
        <div>
            <header />
            <main>

                <div className="slider-area ">
                    <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={{ backgroundImage: `url(${About}` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Get your job</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Jobs query={query} loc={location} categ={category}></Jobs>


            </main>
        </div>
    )
}
export default JobListing;