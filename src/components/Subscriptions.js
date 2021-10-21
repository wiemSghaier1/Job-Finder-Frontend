import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios"

const Subscriptions = () => {
  const user = useSelector(state => state.auth.user)
  const history = useHistory()
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  const createCheckoutSession = async function (priceId) {
    const res = await axios.post("/create-checkout-session", { priceId: priceId })
    return res.data;
  };
  const checkout = async (e) => {
    e.preventDefault();
    if (!user) history.push("/login")
    const stripe = window.Stripe("pk_test_51Ij2HIATT51wmZKfQsjdQguiPaDBClVnWqKDnr8AwfEA7TnlLfXQdqtx5rVbSS7ZWPCGpS3YyiLCR43DvSVJu1VI00BzRnCIdo")
    try {
      const res = await createCheckoutSession(e.target.id)
      console.log(res);
      const handleResult = await stripe
        .redirectToCheckout({
          sessionId: res.sessionId
        })
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row cards-container">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Base </h5>
                <h6 className="card-price text-center">$5<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited job applications</li>
                  <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Best price value</li>
                </ul>
                <a onClick={checkout} id="price_1Ij2PbATT51wmZKfIrraj2I3" href="#" className="btn btn-block btn-primary text-uppercase">Get Plan</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">Base </h5>
                <h6 className="card-price text-center">$45<span className="period">/Year</span></h6>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited job applications</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Best price value</li>

                </ul>
                <a onClick={checkout} id="price_1Ij2PbATT51wmZKfTErv26vW" href="#" className="btn btn-block btn-primary text-uppercase">Get Plan</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Subscriptions;
