import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyAeufCs9XM9UQGG5PBJJFmELKeCqh67otI",
    authDomain: "my-react-e-store.firebaseapp.com",
    projectId: "my-react-e-store",
    storageBucket: "my-react-e-store.appspot.com",
    messagingSenderId: "15830468181",
    appId: "1:15830468181:web:e08fbdab59f4dfed70b6dc",
    measurementId: "G-SWEBFY6J3M"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

