import React from 'react'
import Lottie from "lottie-react";
import done from "../assets/ok-done.json";
import thanks from "../assets/thank-you.json";
import "../assets/css/success.css"
export const SubscriptionSuccess = () => {

    return (
        <div className="success-page">
            <Lottie className="done" animationData={done} />;
            <Lottie className="thank-you" animationData={thanks} />;

        </div>
    )
}
export default SubscriptionSuccess;