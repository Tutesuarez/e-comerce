
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD86g-jo7V0quACtnX1glVuCP86uVc28wo",
  authDomain: "fashion-ecomerce.firebaseapp.com",
  projectId: "fashion-ecomerce",
  storageBucket: "fashion-ecomerce.appspot.com",
  messagingSenderId: "657718174770",
  appId: "1:657718174770:web:31827e9f2d7581e90a082b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase=()=> app