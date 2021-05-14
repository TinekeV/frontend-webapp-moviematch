import './Header.css';
import { NavLink } from "react-router-dom";

function Header({ userStatus }) {
    return (
        <div className="header">
            <NavLink to="/home" exact className="logo-link"><h1>MovieMatch</h1></NavLink>
            <div className="links">
            <NavLink to="/discover-movies" className="header-link"><h3>discover movies</h3></NavLink>
            <NavLink to="/discover-tv" className="header-link"><h3>discover tv</h3></NavLink>
            <NavLink to="/search-results" className="header-link"><h3>search</h3></NavLink>
            </div>

            {userStatus === "sign in" ? <NavLink to="/sign-in" className="header-link"><h3>{userStatus}</h3></NavLink> : <NavLink to="/profile" className="header-link">{userStatus}</NavLink>}

        </div>
    );
}

export default Header;