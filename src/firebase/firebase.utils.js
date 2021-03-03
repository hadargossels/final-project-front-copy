import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import {db} from database

import "firebase/database";

const config = {
  apiKey: "AIzaSyCWoQa6kXdCKNaOveQ8eSrwt0rgKwS08CM",
  authDomain: "dog-store-db.firebaseapp.com",
  projectId: "dog-store-db",
  storageBucket: "dog-store-db.appspot.com",
  messagingSenderId: "736078134737",
  appId: "1:736078134737:web:960d0671bace265d1174f0",
  measurementId: "G-N8LSB8GGRK",
  databaseUrl: "https://dog-store-db-default-rtdb.firebaseio.com",
};

// const config = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
//   // databaseUrl: process.env.REACT_APP_DATABASEURL,
// };

// var config = {
//   apiKey: "AIzaSyBsF8fX_IKimmuEfK_wMXuq3kVXu2jovXI",
//   authDomain: "dog-best-friends.firebaseapp.com",
//   databaseURL: "https://dog-best-friends-default-rtdb.firebaseio.com",
//   projectId: "dog-best-friends",
//   storageBucket: "dog-best-friends.appspot.com",
//   messagingSenderId: "745050923074",
//   appId: "1:745050923074:web:216a24b29f764e05080ddb",
//   measurementId: "G-C2LNTPE40C",
// };

// const config = {
//   apiKey: "AIzaSyC9y0OT7eSHZWkIysBtPhlZWjqswZ4Cm1s",
//   authDomain: "dog-shop-3245f.firebaseapp.com",
//   projectId: "dog-shop-3245f",
//   storageBucket: "dog-shop-3245f.appspot.com",
//   messagingSenderId: "69726010659",
//   appId: "1:69726010659:web:30542e469940569c306096",
//   measurementId: "G-LXVXG1VGG5",
// };

firebase.initializeApp(config);

export const fireInfo = firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

// export const convertCollectionsSnapshotToMap = (collections) => {
//   const transformedCollection = collections.docs.map((doc) => {
//     const { title, items } = doc.data();

//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items,
//     };
//   });

//   return transformedCollection.reduce((accumulator, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});
// };

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//       unsubscribe();
//       resolve(userAuth);
//     }, reject);
//   });
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const db = app.database().ref
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
// facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

const githubProvider = new firebase.auth.GithubAuthProvider();
// facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
// export const gitProvider = new firebase.auth.GithubAuthProvider();

export default firebase;
