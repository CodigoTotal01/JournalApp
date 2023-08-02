// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWfbh_GdEtmnlrkC9cMPtf3hFBsEDCb-0",
  authDomain: "react-cursos-570a8.firebaseapp.com",
  projectId: "react-cursos-570a8",
  storageBucket: "react-cursos-570a8.appspot.com",
  messagingSenderId: "751332921088",
  appId: "1:751332921088:web:91439933f7f6f36e956de5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore (FirebaseApp);