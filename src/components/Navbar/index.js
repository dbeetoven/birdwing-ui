import React from 'react'
import BirdwingLogo from '../../assets/images/logo.png'

export default function Navbar({user=null}){
    // if (user===null){
    //     user.nomber='Test'
    // }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={BirdwingLogo} alt="Birdwing Logo" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true">Home</span>
                    <span aria-hidden="true">Contact</span>
                    <span aria-hidden="true">Shopping</span>
                </a>
            </div>
        </nav>
    )
}