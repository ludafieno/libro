// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAopDmZwrOPi0SUoTVSOx9XG8QN6LOgF9k",
  authDomain: "libro-b9aed.firebaseapp.com",
  projectId: "libro-b9aed",
  storageBucket: "libro-b9aed.appspot.com",
  messagingSenderId: "611215104345",
  appId: "1:611215104345:web:717a38911b72d5afe7d448",
  measurementId: "G-VX4NSSSZS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
