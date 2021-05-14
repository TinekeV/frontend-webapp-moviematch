import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"
import axios from "axios";
import "./SignUp.css";

// components
import Header from "../../components/Header/Header";

// images
import userIcon from './../../assets/icons/user-icon.svg'
import padlockIcon from './../../assets/icons/padlock-icon.svg'
import emailIcon from './../../assets/icons/email-icon.svg'


function SignUp() {
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [signUpSuccess, toggleSignUpSuccess] = useState(false)
    const { handleSubmit, register } = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);

        try {
            const response = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signup`, {
                username: data.username,
                email: data.email,
                password: data.password,
            })
            console.log(response)
            console.log(data)
            toggleSignUpSuccess(true)
            setTimeout(() => {history.push("/sign-in")}, 2000)

        } catch (e) {
            setError('Something went wrong while trying to create your account, please try again')
            console.error(e)
        }
        toggleLoading(false)
    }

    return (
        <>
            <Header
                userStatus="sign in"
            />
            <div className="signUp">
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                    <h1>MovieMatch</h1>
                    <label htmlFor="username-field">
                        <div className="userSignIn">
                            <img src={userIcon} alt="user-icon" className="signIn-icon"/>
                            <input
                                type="text"
                                name="username"
                                className="signIn-text"
                                placeholder="username"
                                {...register("username")}
                            />
                        </div>
                    </label>
                    <label htmlFor="email-field">
                        <div className="userSignIn">
                            <img src={emailIcon} alt="email-icon" className="signIn-icon"/>
                            <input
                                type="email"
                                name="email"
                                className="signIn-text"
                                placeholder="email address"
                                {...register("email")}
                            />
                        </div>
                    </label>
                    <label htmlFor="password-field">
                        <div className="userSignIn">
                            <img src={padlockIcon} alt="password-icon" className="signIn-icon"/>
                            <input
                                type="password"
                                name="password"
                                className="signIn-text"
                                placeholder="password"
                                {...register("password")}
                            />
                        </div>
                    </label>
                    <button
                        type="submit"
                        className="submit-button"
                    >Sign Up</button>

                    {loading && <p>Your account is being created, a moment please.</p>}
                    {signUpSuccess === true && <p>Your account has been created. Hooray! You will be redirected so you can sign in.</p>}
                    {error && <p>{error}</p>}

                </form>
            </div>
        </>
    );
}

export default SignUp;