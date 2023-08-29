import React from 'react'
import "../Styles/Navbar.css"

import loginLogo from "../Images/login-logo.svg";
import logo from "../Images/logo.svg";
import searchIcon from "../Images/search-icon.svg";
export const Navbar = () => {
    return (
        <div>
            <div className='nav-container'>

                <div className='logo'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <p>INVEST TO PAY. INVEST TO SPEND</p>
                    </div>
                </div>

                <div className='input-container'>
                    <img src={searchIcon} alt="search-icon" />
                    <input type="text" placeholder='Search stocks, ETFs, indices' />
                </div>

                <div className='login-btn'>
                    <div>
                        <img src={loginLogo} alt="login-logo" />
                    </div>
                    <div>
                        <p>Login</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
