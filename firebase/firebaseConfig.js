// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmjDvgXokpfHlvPbrMFwAqePqKyIeHY14",
  authDomain: "sanskriti-darpan.firebaseapp.com",
  projectId: "sanskriti-darpan",
  storageBucket: "sanskriti-darpan.firebasestorage.app",
  messagingSenderId: "298621521438",
  appId: "1:298621521438:web:18739314459e2d3814a80f",
  measurementId: "G-XKFM7BXSKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);