import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import './SignIn.css';
import Header from '../../components/Header/Header';
import userIcon from './../../assets/icons/user-icon.svg';
import padlockIcon from './../../assets/icons/padlock-icon.svg';

function SignIn() {
    const { login } = useContext(AuthContext);

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const { handleSubmit, register } = useForm();

    async function Login(data) {
        setError('');
        toggleLoading(true);

        try {
            const response = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password,
            })
            login(response.data.accessToken);
        } catch (e) {
            setError('Something went wrong while trying to log into your account, please try again');
            console.error(e);
        }
        toggleLoading(false);
    }

    return (
        <>
            <Header
                userStatus="sign in"
            />
            <div className="sign-in">
                <form onSubmit={handleSubmit(Login)} className="form-container">
                    <h1>MovieMatch</h1>
                        <label htmlFor="email-field">
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
                    {error && <p>{error}</p>}
                    {loading && <p>You're being logged in, a moment please.</p>}
                    <button
                        type="submit"
                        className="submit-button"
                    >Sign In</button>
                    <h3>No account yet? Sign up <NavLink to="/sign-up" className="signUpHere-link">here</NavLink> for free!</h3>
                </form>
            </div>
        </>
    );
}

export default SignIn;