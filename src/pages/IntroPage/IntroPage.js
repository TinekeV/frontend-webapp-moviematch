import "./IntroPage.css";
import Header from "../../components/Header/Header";
import {NavLink} from "react-router-dom";

function IntroPage() {
    return (
        <>
            <Header
                userStatus="sign in"
            />
            <div className="description">
            <h1>Discover your new favorite movie or TV show and search where to stream. Sign in and get searching!</h1>
            <h1>Are you new to MovieMatch? Create an <NavLink to="/sign-up" className="signup-link">account</NavLink> for free.</h1>
            </div>
        </>
    )
};

export default IntroPage;