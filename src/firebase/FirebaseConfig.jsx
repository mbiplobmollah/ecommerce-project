// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXaJahY_BPrzTcrcf0fY3G7QLqjJmB2Xo",
  authDomain: "ecommerceapp-fba4b.firebaseapp.com",
  projectId: "ecommerceapp-fba4b",
  storageBucket: "ecommerceapp-fba4b.firebasestorage.app",
  messagingSenderId: "132638989715",
  appId: "1:132638989715:web:5736368337a325824e1c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);


export {fireDB, auth}