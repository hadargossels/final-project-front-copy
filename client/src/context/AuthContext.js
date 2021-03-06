import React, { useContext, useState, useEffect} from 'react';
import {auth, firebasedb, emailAuthProvider} from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log('onAuthStateChanged');
            console.log(currentUser);
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const reauthenticate = (currentPassword) => {
        const user = auth.currentUser;
        const cred = emailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }


    async function updateMyEmail(currentPassword, newEmail) {
        try{
            await reauthenticate(currentPassword)
            const user = auth.currentUser;
            await user.updateEmail(newEmail)
        }   
        catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    async function updateMyPassword(currentPassword, newPassword) {
        try{
            await reauthenticate(currentPassword)
            const user = auth.currentUser;
            await user.updatePassword(newPassword)
        }   
        catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    async function updateDetails(currentPassword, updates) {
        try{
            await reauthenticate(currentPassword)
            await firebasedb.ref().update(updates)
        }   
        catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logout() {
        auth.signOut()
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
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateMyEmail,
        updateMyPassword,
        updateDetails
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
