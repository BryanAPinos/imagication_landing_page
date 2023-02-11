import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import reportWebVitals from "reportWebVitals";
import "typeface-lato";

// import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";

// import { firebaseConfig } from "./assets/firebaseConfig";
// // import { getAnalytics } from "firebase/analytics";

// // getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
