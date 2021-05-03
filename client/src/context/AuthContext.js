import React, { useContext, useState, useEffect} from 'react';
import axios from 'axios';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    
    const getAuthHeaders = () => {
        const token = localStorage.getItem('token');
        return {'Content-Type': 'application/json', 'Authorization': token ? `Bearer ${token}` : ""};
    }

    function logout() {
        setCurrentUser(null);
    }

    // function resetPassword(email) {
    //     return auth.sendPasswordResetEmail(email) 
    // }
    

    const value = {
        currentUser,
        setCurrentUser,
        logout,
        getAuthHeaders
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
