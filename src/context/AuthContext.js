import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending'
    });

    async function fetchUserData(accesToken) {

        try {
            const response = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accesToken}`,
                }
            });

            setAuthState({
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id

                },
                status: 'done'
            });
        } catch (e) {
            console.log(e);
        }
        history.push("/home");
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== undefined && authState.user === null) {
            fetchUserData(token);
        } else {
            setAuthState({
                user: null,
                status: 'done'
            });
        }
    }, []);

    function signIn(accessToken) {
        localStorage.setItem('token', accessToken);
        fetchUserData(accessToken);
        setTimeout(() => {history.push("/home")}, 1000);
        };

    function signOut() {
        localStorage.clear();
        setAuthState ({
            user: null,
            status: 'done'
        });
        history.push("/");
    };

    const data = {
        ...authState,
        login: signIn,
        logout: signOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;