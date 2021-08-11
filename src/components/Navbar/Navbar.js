import React from 'react'
import BirdwingLogo from '../../assets/images/logo.png'
import { WrapperNav, Logo, NavList, NavListItem, NavItemLink } from './NavbarStyles'
import {default as ROUTES} from '../../config/router/paths'
import {FiShoppingCart} from 'react-icons/fi'

export default function Navbar() {
    return (
        <WrapperNav>
            <Logo to={`${ROUTES['home'].path}`}
                aria-label="Home"
                rel="noopener noreferrer">
                <img src={BirdwingLogo} alt='Birdwing Boutique' />
            </Logo>
            <NavList>
                <NavListItem className="nav-item"><NavItemLink to={`${ROUTES['home'].path}`}>Shopping Cart</NavItemLink></NavListItem>
                <NavListItem className="nav-item"><NavItemLink to={`${ROUTES['home'].path}`}>Contact</NavItemLink></NavListItem>
            </NavList>
            <NavList>
                <NavListItem className="nav-item"><NavItemLink to={`${ROUTES['home'].path}`}><FiShoppingCart/></NavItemLink></NavListItem>
                <NavListItem className="nav-item"><NavItemLink to={`${ROUTES['login'].path}`}>Login</NavItemLink></NavListItem>
            </NavList>
        </WrapperNav>
    )
}
