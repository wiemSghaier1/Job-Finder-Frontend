import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginRecruter from "../pages/LoginRecruter";
import RecruterHome from "../pages/RecruterHome";
import RegisterRecruter from "../pages/RegisterRecruter"
import RegisterJobSeeker from "../pages/RegisterJobSeeker";
import Formation from "../pages/Formation";
import Skills from "../pages/Skills";
import SubscriptionSuccess from "../pages/SubscriptionSuccess";
import JobListing from "../pages/JobListing";
import JobDetails from "../pages/JobDetails";
import Experience from "../pages/Experience";
import Welcome from '../components/Welcome'
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {

  return (
    <Router>
      <>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <PrivateRoute path="/quiz" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/recruter" component={RecruterHome} exact={true} />
          <Route path="/recruter/login" component={LoginRecruter} />
          <Route path="/register" component={RegisterJobSeeker} />
          <Route path="/recruter/register" component={RegisterRecruter} />
          <PrivateRoute path="/subscription/success" component={SubscriptionSuccess} />
          <Route path="/JobListing" component={JobListing} />
          <Route path="/jobDetails/:id" component={JobDetails} />
          <PrivateRoute path="/formation" component={Formation} />
          <PrivateRoute path="/skill" component={Skills} />
          <PrivateRoute path="/exp" component={Experience} />
          {/* <Route path="/cv" component={CreateCV} /> */}


          {/* <Route path="/exp/:id" component={exp} /> */}

          {/* <Route component={NotFound} /> */}
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
