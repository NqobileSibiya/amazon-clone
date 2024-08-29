import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firebase";

// / Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq0S_XrQkIDBuV-T8EllewloaoMDbjsKA",
  authDomain: "clone-2ef21.firebaseapp.com",
  projectId: "clone-2ef21",
  storageBucket: "clone-2ef21.appspot.com",
  messagingSenderId: "991983858598",
  appId: "1:991983858598:web:0fa6ae8f93f4371e10d567"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebase();
const auth = firebase.auth();

export {db, auth};