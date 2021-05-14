import React from "react";
import app from "../../modules/Firebase";

function SignOut() {
    return (
        <>
            <button type="button" onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    )
}

export default