import React from 'react';
import './IntroPage.css';
import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';

function IntroPage() {
    return (
        <>
            <Header
                userStatus="sign in"
            />
            <div className="description">
            <h1>Discover new movies and TV shows and search where to stream. Sign in and get searching!</h1>
            <h1>Are you new to MovieMatch? Create an <NavLink to="/sign-up" className="signup-link">account</NavLink> for free.</h1>
            </div>
        </>
    )
};

export default IntroPage;