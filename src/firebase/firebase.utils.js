import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

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
firebase.initializeApp(config);

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log("collectionRef:", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // console.log("newDocRef :", newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // console.log("transformedCollection :", transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    //                     clothing
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
