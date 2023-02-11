// import firebase from "firebase/app";
// import "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBV4tKqTwWobCEqfHtyRjrP3IncoR6oiW4",
  authDomain: "imagication-ca3d7.firebaseapp.com",
  projectId: "imagication-ca3d7",
  storageBucket: "imagication-ca3d7.appspot.com",
  messagingSenderId: "954970607956",
  appId: "1:954970607956:web:0c6dcf599336004117f8c1",
  measurementId: "G-G425X852DH",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
