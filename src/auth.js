// import firebase from 'firebase/app'
import 'firebase/auth'

class Auth {
    constructor() {
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         this.authenticated=true
        //     } else {
        //         this.authenticated=false
        //     }
        //   });
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        callback();
    }

    logout(callback) {
        this.authenticated = false;
        callback();
    }

    isAuthenticated() {
        return this.authenticated;

    }
}

export default new Auth();