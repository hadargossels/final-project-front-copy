import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZE8Gm_4PkvUnXjdd6en75ECZzy9ZtOqc",
  authDomain: "my-react-store.firebaseapp.com",
  projectId: "my-react-store",
  storageBucket: "my-react-store.appspot.com",
  messagingSenderId: "1068840250479",
  appId: "1:1068840250479:web:d1e058e5875454b509b19a",
  measurementId: "G-YSZXR75F0N",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
