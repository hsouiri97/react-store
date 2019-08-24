import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCjHNAcbmKoByfz_b7k9__o9uS-06ixn0A",
  authDomain: "vue-firebase-ecommerce.firebaseapp.com",
  databaseURL: "https://vue-firebase-ecommerce.firebaseio.com",
  projectId: "vue-firebase-ecommerce",
  storageBucket: "vue-firebase-ecommerce.appspot.com",
  messagingSenderId: "1019118550352",
  appId: "1:1019118550352:web:e0531361f723354f"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();

export { fb, db };
