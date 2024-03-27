// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxXeoY7fqhEBq8BNhJOY3-6B7Ds1UScOs",
    authDomain: "portfolio-2f671.firebaseapp.com",
    projectId: "portfolio-2f671",
    storageBucket: "portfolio-2f671.appspot.com",
    messagingSenderId: "403149271358",
    appId: "1:403149271358:web:f4811d72c777d1b6687c6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
