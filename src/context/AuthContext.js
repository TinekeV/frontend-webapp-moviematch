import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;