import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

export default function Navbar() {
    return (
        <nav class="navbar-expand-sm bg-primary navbar-dark px-sm-5">
            
            <ul class="navbar-nav align-item-center ml-5">
                <li className="nav-item">
                    <Link to="/">
                        <img src={logo} className="navbar-brand"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-capitalize">
                        watches
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
