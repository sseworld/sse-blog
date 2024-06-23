// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "sse-world.firebaseapp.com",
  projectId: "sse-world",
  storageBucket: "sse-world.appspot.com",
  messagingSenderId: "862129086688",
  appId: "1:862129086688:web:a6eddc9614971b5d943085",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
