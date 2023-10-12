// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTcZDmn4pumxsgi6Sv54pflfQauHAd5Sg",
  authDomain: "wisaque-haider.firebaseapp.com",
  projectId: "wisaque-haider",
  storageBucket: "wisaque-haider.appspot.com",
  messagingSenderId: "443947150547",
  appId: "1:443947150547:web:5b685951128fcee062f826",
  measurementId: "G-DK52XMFN2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);