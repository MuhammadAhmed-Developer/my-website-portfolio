// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4r2o6PkefWTiz3F-FRLy1xNrk6y5aCC0",
  authDomain: "m--ahmed.firebaseapp.com",
  projectId: "m--ahmed",
  storageBucket: "m--ahmed.appspot.com",
  messagingSenderId: "92367176359",
  appId: "1:92367176359:web:b26e068d7e661fa57a5182",
  measurementId: "G-RQG8MSXRQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {analytics, firestore}