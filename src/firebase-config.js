// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5R-8YId3dDaUqePOujN020zsDiSqkdw8",
  authDomain: "github-3f87e.firebaseapp.com",
  projectId: "github-3f87e",
  storageBucket: "github-3f87e.appspot.com",
  messagingSenderId: "803775226229",
  appId: "1:803775226229:web:508b80832a2ea3b967b33c",
  measurementId: "G-E42TCPCPVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };