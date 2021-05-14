import React, { useState } from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";

function Profile() {

    return (
        <>
            <Header
                userStatus="profile"
            />
            <section className="introduction-container">
                <h3>Hi, username</h3>
            </section>
            <div className="personal-details-form">
                <div className="personal-details-title">
                    <h1>Personal details</h1>
                    <button type="button" className="edit-button">edit profile</button>
                </div>
            </div>
        </>
    )
}

export default Profile