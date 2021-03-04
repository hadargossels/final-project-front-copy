import React, { useContext, useState, useEffect } from "react"
import { db, auth } from "../layout/Firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function register(email, password, fullName) {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((currentUser) => {
                if (currentUser.user) {
                    currentUser.user.updateProfile({
                        displayName: fullName
                    })
                    db.ref('users/' + currentUser.user.uid).set({ 'id': currentUser.user.uid, 'roll': 'User', 'name': fullName, 'email': email, 'active': true })
                }
            })
    }

    function login(email, password) {
        console.log(auth)
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
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

    function updateDisplayName(userName) {
        return currentUser.updateProfile({ displayName: userName })
    }

    function updateDataBase(userName, userEmail, userPhoneNum, addrCountry, addrCity, addrStreet, addrZipcode) {
        const address = {
            country: addrCountry,
            city: addrCity,
            street: addrStreet,
            zipcode: addrZipcode
        }
        db.ref('users/' + currentUser.uid).set({ 'id': currentUser.uid, 'roll': 'User', 'active': true, 'name': userName, 'email': userEmail, 'phone': userPhoneNum, 'address': address })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        register,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateDisplayName,
        updateDataBase
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}