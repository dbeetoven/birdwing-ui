import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ onclick, children }) => {
    return (
        <StyledButton onclick={onclick} role="button">
            {children}
        </StyledButton>
    )
}
Button.propTypes = {
    onclick: PropTypes.func.isRequired,
    children: PropTypes.element,
}
export default Button
