import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "vue-firebase-ecommerce.firebaseapp.com",
  databaseURL: "https://vue-firebase-ecommerce.firebaseio.com",
  projectId: "vue-firebase-ecommerce",
  storageBucket: "vue-firebase-ecommerce.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();

export { fb, db };
