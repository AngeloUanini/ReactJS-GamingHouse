// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRtN6NLgJ1QNxjTsCBlJAGqJ6qwIzkzPs",
  authDomain: "react-gaminghouse.firebaseapp.com",
  projectId: "react-gaminghouse",
  storageBucket: "react-gaminghouse.firebasestorage.app",
  messagingSenderId: "741048917451",
  appId: "1:741048917451:web:d81c9db07c03ef0460ea4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);