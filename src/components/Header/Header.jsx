import React from 'react'
import logo from './logo.svg'

const Header = () => 
    <nav className="navbar navbar-light bg-light mb-5">
        <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top pr-1" alt="" />
            React-Tac-Toe
        </a>
    </nav>


export default Header;