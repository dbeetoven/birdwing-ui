import React from 'react'
import './index.css'
import BirdwingLogo from '../../assets/images/logo.png'

export default function Navbar() {
    // if (user===null){
    //     user.nomber='Test'
    // }
    return (
        <>
            <nav className="navbar">
                <a href="https://freecodecamp.org" className="logo">
                    <img src={BirdwingLogo} alt='logo' />
                </a>
                <ul className="nav-links">
                    <li className="nav-item"><a href="#">Contact</a></li>
                    <li className="nav-item"><a href="#">Shopping Cart</a></li>
                </ul>
            </nav>
        </>
    )
}