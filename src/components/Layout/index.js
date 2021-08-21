import React from 'react'
import PropTypes from 'prop-types'
import Theme from 'styles/theme'
import NavBar from '../Navbar'
import {Container} from './styles'

const Layout = ({children}) => {
    return (
        <Theme>
            <Container>
                <NavBar sticky={false}/>
                <main>{children}</main>
            </Container>
        </Theme>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
}
export default Layout
