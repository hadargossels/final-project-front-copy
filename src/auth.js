import firebase from 'firebase/app'
import 'firebase/auth'

class Auth{
    constructor(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.authenticated=true
            } else {
                this.authenticated=false
            }
          });
    }
    login(cb){
        this.authenticated=true
        cb()
    }
    logout(cb){
        this.authenticated=false
        cb()
    }
    isAuthenticated(){
        return this.authenticated
    }
}
export default new Auth()