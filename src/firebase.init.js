// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-PWHFIM5FrDsefbHEpwrjXgNcPOIIu9k",
  authDomain: "router-firebase-intregrations.firebaseapp.com",
  projectId: "router-firebase-intregrations",
  storageBucket: "router-firebase-intregrations.appspot.com",
  messagingSenderId: "446112284006",
  appId: "1:446112284006:web:a3d086a5f6ae1e952e5ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;