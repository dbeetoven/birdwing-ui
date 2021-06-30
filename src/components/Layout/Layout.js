import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './LayoutStyles'
import Theme from '../../styles/theme'
import Navbar from '../Navbar/Navbar'

// eslint-disable-next-line react/prop-types
export const Layout = ({children}) => {
    return (
        <Theme>
            <Container>
                <Navbar/>
                <main>{children}</main>
            </Container>
        </Theme>
    )
}

Layout.prototype={
    children: PropTypes.element.isRequired
}
