import React from "react";
import './UserInput.css';

function UserInput({ type, name, placeholderInput, icon, iconDescription, register }) {
    return (
        <div className="userSignIn">

            <input
                type={type}
                name={name}
                placeholder={placeholderInput}
                className="signIn-text"
                ref={register}
            />
        </div>
    );
}

export default UserInput;