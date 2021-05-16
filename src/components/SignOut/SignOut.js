import React, { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import "./SignOut.css"
import {NavLink} from "react-router-dom";

function SignOut() {
    const { logout } = useContext(AuthContext)

    return (
        <>
            <button type="button" onClick={logout} className="sign-out-button">sign out</button>
            {/*<NavLink to={logout}>sign out</NavLink>*/}
        </>
    )
}

export default SignOut