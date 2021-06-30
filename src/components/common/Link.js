import React from 'react'
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export  default  function LinkRouter({path,children}) {
    return (<Link to={path}>{children}</Link>)

}
