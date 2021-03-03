import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../firebase"
import firebase from "firebase/app"
import "firebase/auth"

const AuthContext = React.createContext()
let provider ;
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children, history }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  // function updateNewSingup(country,city,zip,address){
  //   var user = firebase.auth().currentUser;
  //     user.updateProfile({
  //       country: country,
  //       city: city,
  //       zip:zip,
  //       address,address
  //     }).then(function() {
  //       console.log("Update successful.") 
  //     }).catch(function(error) {
  //       // An error happened.
  //     });
  // }
  // function getProfileInfo(){
  //   var user = firebase.auth().currentUser;
  //   var country, city, zip, address;

  //   if (user != null) {
  //     country = user.country;
  //     city = user.city;
  //     zip = user.zip;
  //     address = user.address;
  //     console.log(country,city,zip,address)
  //   }

  // }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    console.log(provider)
      // var user = firebase.auth().currentUser;

      // user.delete().then(function() {
      //   // User deleted.
      // }).catch(function(error) {
      //   // An error happened.
      // });
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  
  function loginGoogle(){
    provider = new firebase.auth.GoogleAuthProvider();
    auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = "/" ;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  function loginFacebook(){

  provider = new firebase.auth.FacebookAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    window.location.href = "/" ;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }
  function loginGitHub(){
    provider = new firebase.auth.GithubAuthProvider();
    provider.addScope("repo");
   
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      
      var credential = result.credential;
  
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;
  
      // The signed-in user info.
      var user = result.user;
      // history.push( "/");
      window.location.href = "/" ;
      // ...
    }).catch((error) => {
      // Handle Errors here.

      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      
      // ...
    });
    }
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    loginGoogle,
    loginFacebook,
    loginGitHub,
    // updateNewSingup,
    // getProfileInfo
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

