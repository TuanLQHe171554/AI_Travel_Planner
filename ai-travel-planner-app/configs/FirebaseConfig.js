// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXsmnDAHKbYkraK363SmLcaSUxodOgeJw",
  authDomain: "lqt2873.firebaseapp.com",
  projectId: "lqt2873",
  storageBucket: "lqt2873.firebasestorage.app",
  messagingSenderId: "516191831239",
  appId: "1:516191831239:web:9cefb8e3976a197da66ae2",
  measurementId: "G-83YJ7P1GY8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);