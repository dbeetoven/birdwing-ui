import React from 'react'
import PropTypes from 'prop-types'
import { StyledNav, StyledNavSticky } from './styles'

const NavBarContainer = ({ sticky, children }) => {
    return sticky ? <StyledNavSticky>{children}</StyledNavSticky> : <StyledNav>{children}</StyledNav>
}

NavBarContainer.propTypes = {
    sticky: PropTypes.bool,
    children: PropTypes.element.isRequired,
}
export default NavBarContainer
