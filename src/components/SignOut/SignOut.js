import React, { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import "./SignOut.css"

function SignOut() {
    const { logout } = useContext(AuthContext)

    return (
        <>
            <button type="button" onClick={logout} className="sign-out-button">sign out</button>
        </>
    )
}

export default SignOut