// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIkEPsi-pZCpZJWt2KUA5ORdgQJodKFQI",
    authDomain: "monisha-s-kitchen.firebaseapp.com",
    projectId: "monisha-s-kitchen",
    storageBucket: "monisha-s-kitchen.appspot.com",
    messagingSenderId: "89324961919",
    appId: "1:89324961919:web:0ba8100ce91c5875c87f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;