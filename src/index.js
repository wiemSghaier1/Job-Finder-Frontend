import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Lottie from "lottie-react";
import spinner from "./assets/loading.json";
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import "./axiosConfig.js";
import './i18n';

import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="loading" >  <Lottie animationData={spinner} /></div>}>

      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
