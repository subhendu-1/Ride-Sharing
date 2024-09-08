// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe-uWBgAe-kIdkO0Q_lx4FbO91fMUg8qU",
  authDomain: "ride-sharing-1ce5f.firebaseapp.com",
  projectId: "ride-sharing-1ce5f",
  storageBucket: "ride-sharing-1ce5f.appspot.com",
  messagingSenderId: "648404247207",
  appId: "1:648404247207:web:97c8409bdbaad12cb07182",
  measurementId: "G-P0HZ526YLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);