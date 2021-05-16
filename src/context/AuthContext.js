import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const history = useHistory();

    // state voor de gebruikersdata
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending'
    })

    async function fetchUserData(accesToken) {
        // gebruikersdata ophalen met behulp van een JWT token
        // axios, async, try catch, request maken
        try {
            const response = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accesToken}`,
                }
            })
            console.log(response.data)

            // die data gebruiken om de context te vullen
            setAuthState({
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id

                },
                status: 'done'
            });
        } catch (e) {
            console.log(e)
        }
    }

    // wanneer de applicatie gelaten wordt willen we checken of er een token is, en als die er is maar er is geen gebruiker
    // dan willen we alsnog de gebruikersdata ophalen

    useEffect(() => {
        // is er een token in local storage?
        const token = localStorage.getItem('token')

        // is er geen user aanwezig in de context?
        if (token !== undefined && authState.user === null) {
            // haal dan gebruikersdata op zoals bij de login
            fetchUserData(token);

        } else {
            // zo nee dan geen user, maar wel status op done
            setAuthState({
                user: null,
                status: 'done'
            });
        }
    }, []);

    // inlog functie
    function signIn(accessToken) {
        console.log(accessToken)

        // JWT token in de local storage zetten
        localStorage.setItem('token', accessToken)

        // Gebruikersdata ophalen
        fetchUserData(accessToken)

        // doorlinken naar de home page
        history.push("/home")

        }

    // uitlog functie
    function signOut() {
        // leeghalen van de local storage met localStorage.clear()
        localStorage.clear();
        // user in de context weer op 'null' zetten
        setAuthState ({
            user: null,
            status: 'done'
        })
        history.push("/")
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