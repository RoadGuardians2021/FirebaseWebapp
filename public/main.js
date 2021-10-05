// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRAzp00jlFqrMlHaBobfgw_ksLxs-0Vf0",
  authDomain: "icyroaddetection.firebaseapp.com",
  projectId: "icyroaddetection",
  storageBucket: "icyroaddetection.appspot.com",
  messagingSenderId: "1005688725909",
  appId: "1:1005688725909:web:9cadcefaf822c67903169c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById('date').innerHTML = new Date().toDateString();