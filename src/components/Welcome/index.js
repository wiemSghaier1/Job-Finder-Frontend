import React, { useState, useContext, useEffect } from 'react'
import Quiz from '../Quiz'
import Loader from '../Loader/'
import "../../assets/css/sty.css";

const Welcome = props => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false);
    }, 1000);
    return (
        <div>
            {loading && <Loader
                loadingMsg={"Loading ..."}
                styling={{ textAlign: 'center' }}
            />}
            {!loading && <div className="quiz-bg">
                <div className="cont">
                    <Quiz />
                </div>
            </div>}
        </div>
    )
}

export default Welcome
