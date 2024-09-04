// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQiH5o6i-PBowc0lo7Rcokby7rFuPnn1E",
  authDomain: "flixpro-f3194.firebaseapp.com",
  projectId: "flixpro-f3194",
  storageBucket: "flixpro-f3194.appspot.com",
  messagingSenderId: "766829343991",
  appId: "1:766829343991:web:c3f80e44f4737ce9670ff2",
  measurementId: "G-F0DL8WNY7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);