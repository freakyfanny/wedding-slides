import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <nav className="header">
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/Instagram">
                Instagram
            </NavLink>
        </nav>
    );
}
    export default Header;