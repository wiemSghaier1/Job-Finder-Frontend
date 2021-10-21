import './App.css';
import './assets/css/bootstrap.min.css';
// import './assets/css/owl.carousel.min.css'
import './assets/css/flaticon.css'
import './assets/css/price_rangs.css'
import './assets/css/slicknav.css'
import './assets/css/animate.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/themify-icons.css'
import './assets/css/slick.css'
import './assets/css/style.css';
import './assets/css/nice-select.css'
import { useEffect, useState } from "react"
import AppRouter from "./routers/AppRouter";
import { useDispatch } from 'react-redux';
import { setUser } from './store/authSlice'
import Lottie from "lottie-react";
import spinner from "./assets/loading.json";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/me");
        if (res.status = '200') {
          dispatch(setUser(res.data))
        }
      } catch (error) {

      }
      finally {
        setLoading(false);

      }
      setLoading(false);

    }
    fetchUser();


    // const jQuery = document.getElementById("jquery");
    const niceSelect = document.createElement("script");
    const scrollUp = document.createElement("script");
    scrollUp.src = "/js/jquery.scrollUp.min.js";
    document.body.appendChild(scrollUp);
    niceSelect.src = "/js/jquery.nice-select.min.js";
    document.body.appendChild(niceSelect);
    const sticky = document.createElement("script");
    sticky.src = "/js/jquery.sticky.js";
    document.body.appendChild(sticky);
    const nav = document.createElement("script");
    nav.src = "/js/jquery.slicknav.min.js";
    document.body.appendChild(nav);
    const slick = document.createElement("script");
    slick.src = "/js/slick.min.js";
    document.body.appendChild(slick);
    const animatedHeadLine = document.createElement("script");
    animatedHeadLine.src = "/js/animated.headline.js";
    document.body.appendChild(animatedHeadLine);
    const paroller = document.createElement("script");
    paroller.src = "/js/jquery.paroller.min.js";
    document.body.appendChild(paroller);

    const onePageNav = document.createElement("script");
    onePageNav.src = "/js/one-page-nav-min.js";
    document.body.appendChild(onePageNav);
    const popper = document.createElement("script");
    popper.src = "/js/popper.min.js";
    document.body.appendChild(popper);
    const wow = document.createElement("script");
    wow.src = "/js/wow.min.js";
    document.body.appendChild(wow);


    const main = document.createElement("script");
    main.src = "/js/main.js";
    //  main.defer = true;
    document.body.appendChild(main);

    return () => {
      document.body.removeChild(niceSelect);
    }
  }, [

  ])
  return (
    (loading) ? <div className="loading" >  <Lottie animationData={spinner} /></div> : <>
      <AppRouter />
    </>
  );
}

export default App;
