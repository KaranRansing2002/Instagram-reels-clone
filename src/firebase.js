// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import Firebase from './components/Firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL97UuRLw1sLxhFh1IfMOWqmhZvaQNvmU",
    authDomain: "reels-25049.firebaseapp.com",
    projectId: "reels-25049",
    storageBucket: "reels-25049.appspot.com",
    messagingSenderId: "714945200930",
    appId: "1:714945200930:web:4b0db06c846fe4eb60db7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();

const firestore=firebase.firestore();

export const database={
  users : firestore.collection('users'),
  getTimeStamp : firebase.firestore.serverTimestamp,
}

export const storage=firebase.storage();