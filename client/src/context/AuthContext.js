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

    const login = async (email, password) =>{
        try {
            const resp = await axios.post(`${process.env.REACT_APP_PROXY}/users/login`, {
                email, 
                password
            })
            localStorage.setItem("token", resp.data.token);
            setCurrentUser(resp.data.user)
            return resp;
        }
        catch(err) {
            console.log(err)
            return err
        }
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
        login,
        logout,
        getAuthHeaders
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
