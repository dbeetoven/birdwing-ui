import React from 'react'
// import { default as ROUTES } from 'config/router/paths'
import NavBarContainer from './NavBarContainer'
import PropTypes from 'prop-types'
import { NavItemLink, StyledBrandName, StyledNavList, StyledNavListItem } from './styles'

const NavBar = ({ sticky }) => {
    return (
        <NavBarContainer sticky={sticky}>
            <div className="navbar--logo-holder">
                <StyledBrandName>Birdwing</StyledBrandName>
            </div>
            <StyledNavList>
                <StyledNavListItem>
                    <NavItemLink to={'/'}>Home</NavItemLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <NavItemLink to={'/'}>About</NavItemLink>
                </StyledNavListItem>
                <StyledNavListItem>
                    <NavItemLink to={'/'}>Blog</NavItemLink>
                </StyledNavListItem>
            </StyledNavList>
        </NavBarContainer>
    )
}

NavBar.propTypes = {
    sticky: PropTypes.bool,
}
export default NavBar
