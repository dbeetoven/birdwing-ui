import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ onclick }) => {
    return <StyledButton onclick={onclick} role="button" />
}
Button.propTypes={
    onclick:PropTypes.func.isRequired
}
export default Button
