import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})
// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCwyaRd9SJywVQpdKLbZPji10nimegZWwg",
//     authDomain: "final-project-react-dev.firebaseapp.com",
//     projectId: "final-project-react-dev",
//     storageBucket: "final-project-react-dev.appspot.com",
//     messagingSenderId: "938789805437",
//     appId: "1:938789805437:web:83830fd6e24b1d83958014"
// })
export const auth = app.auth()
export default app