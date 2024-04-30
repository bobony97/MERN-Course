import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCVlgGWXCQdQIF6knExRgluEMKqCMdLipA",
  authDomain: "reac-journal-app.firebaseapp.com",
  projectId: "reac-journal-app",
  storageBucket: "reac-journal-app.appspot.com",
  messagingSenderId: "507332972739",
  appId: "1:507332972739:web:35780288611fe41ebe9276"
};

export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );