// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzWBs2PW0UuwTJgKX2vA_OWweZ7vvSiLY",
  authDomain: "hackathon-f99bd.firebaseapp.com",
  projectId: "hackathon-f99bd",
  storageBucket: "hackathon-f99bd.appspot.com",
  messagingSenderId: "248836246903",
  appId: "1:248836246903:web:2d12eb5a541d31f96ea572",
  measurementId: "G-RKHG7MNNTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage=getStorage(app)
export { firestore, auth ,storage}
