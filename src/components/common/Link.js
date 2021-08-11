import React from 'react'
// import {Link} from 'wouter'

// eslint-disable-next-line react/prop-types
export  default  function LinkRouter({path,children}) {
    return (<a href={path}>{children}</a>)

}
