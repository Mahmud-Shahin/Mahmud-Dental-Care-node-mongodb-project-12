// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJR8Af290CmoF3qCHBM6sFKOmvbg_OyIs",
    authDomain: "genious-car-services-6dd0b.firebaseapp.com",
    projectId: "genious-car-services-6dd0b",
    storageBucket: "genious-car-services-6dd0b.appspot.com",
    messagingSenderId: "63361894758",
    appId: "1:63361894758:web:c4db774a1def55911520a7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;