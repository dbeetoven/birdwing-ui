import { ThemeProvider } from 'styled-components'
import React from 'react'
// import PropTypes from  'prop-types'

import theme from '../themes/default'
import GlobalStyles from './globalStyles'

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
)

// Theme.PropTypes ={
//     children: PropTypes.any
// }

export default Theme