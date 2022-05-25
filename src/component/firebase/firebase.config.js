// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEB6SoeSh5n2X95Tq2BFNY5MiTzW4EfkI",
  authDomain: "inner-autonomy-300814.firebaseapp.com",
  databaseURL: "https://inner-autonomy-300814-default-rtdb.firebaseio.com",
  projectId: "inner-autonomy-300814",
  storageBucket: "inner-autonomy-300814.appspot.com",
  messagingSenderId: "667307141613",
  appId: "1:667307141613:web:13c886bfa5c731653f9fe4"
});

// Initialize Firebase
const db=firebaseApp.firestore();

export {db};