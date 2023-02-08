import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Images/logo-kometa.png'
import '../../assets/styles/nav-login.css'

function NavLogin() {
    return (
        <div className="nav-login">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
        </div>
    )
}

export default NavLogin