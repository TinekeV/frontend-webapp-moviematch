import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";
import Header from "../../components/Header/Header";

function Profile() {
    const { user } = useContext(AuthContext);
    console.log(user)

    return (
        <>
            <Header
                userStatus="profile"
            />
            <section className="introduction-container">
                <h3>Hi {user.username},</h3>
                <h3>welcome to your profile page.</h3>
            </section>
            <div className="profile-container">
            <section className="personal-details-form">
                <div className="personal-details-title">
                    <h1>Personal details</h1>
                    <button type="button" className="edit-button">edit profile</button>
                </div>
                <div>
                    <h3>Username: {user.username}</h3>
                    <h3>Email: {user.email}</h3>
                </div>
            </section>
            </div>
        </>
    )
}

export default Profile