// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7XbjclqFAK49klQa2AH9370ieoxdySFs",
  authDomain: "proyectoecommerce-3f506.firebaseapp.com",
  projectId: "proyectoecommerce-3f506",
  storageBucket: "proyectoecommerce-3f506.appspot.com",
  messagingSenderId: "400678439490",
  appId: "1:400678439490:web:8f84a1288b325f9f4abbdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app