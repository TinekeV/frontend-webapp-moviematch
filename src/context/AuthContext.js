import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    // state voor de gebruikersdata
    const [authState, setAuthState] = useState({
        user: null,
    })

    // inlogfunctie
    function signIn() {
        console.log('Sign In')
    }

    // uitlogfunctie
    function signOut() {
        console.log('Sign Out')
    }

    const data = {
        ...authState,
        login: signIn,
        logout: signOut,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;