import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/home/home'

export const Routes =()=>{
    return (
        <Switch>
            <Route path='/' component={Home} />
        </Switch>
    )
}
