// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPXZDuGeLGW6wkHDY-IW4O4dShvAglVm4",
  authDomain: "fashion-392610.firebaseapp.com",
  projectId: "fashion-392610",
  storageBucket: "ashion-392610.appspot.com",
  messagingSenderId: "327888129436",
  appId: "1:327888129436:web:e54a80727649870d06cc59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase=()=> app