import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj0qWUBm_WOOmf5uOY_TeTmsqpD-mXqIA",
  authDomain: "linkedin-clone-14d31.firebaseapp.com",
  projectId: "linkedin-clone-14d31",
  storageBucket: "linkedin-clone-14d31.appspot.com",
  messagingSenderId: "603175947539",
  appId: "1:603175947539:web:782f3c3e085d6080df9ee6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, auth, db };
