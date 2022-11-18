// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM",
  authDomain: "airbnb-367901.firebaseapp.com",
  projectId: "airbnb-367901",
  storageBucket: "airbnb-367901.appspot.com",
  messagingSenderId: "177736670407",
  appId: "1:177736670407:web:6f036dea248ede8d50f2e2",
  measurementId: "G-VJW27D6WM2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
