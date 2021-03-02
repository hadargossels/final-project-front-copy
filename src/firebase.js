import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
})

export const auth = app.auth()
export const db = app.database();
export default firebase;
