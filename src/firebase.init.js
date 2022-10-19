// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlH_LNJk6HqWDUCBlrVUWX-flmsUOxj4",
  authDomain: "ema-john-simple-18a7e.firebaseapp.com",
  projectId: "ema-john-simple-18a7e",
  storageBucket: "ema-john-simple-18a7e.appspot.com",
  messagingSenderId: "1054530094933",
  appId: "1:1054530094933:web:101636e9a29443064b51dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;