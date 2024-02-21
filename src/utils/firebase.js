// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2M23mmdzdmSJx8UgUFEyI10p_JmBicBw",
  authDomain: "netflixgpt-455e8.firebaseapp.com",
  projectId: "netflixgpt-455e8",
  storageBucket: "netflixgpt-455e8.appspot.com",
  messagingSenderId: "426683928065",
  appId: "1:426683928065:web:67b68462494d1a596b7a00",
  measurementId: "G-60GWD0JSK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();