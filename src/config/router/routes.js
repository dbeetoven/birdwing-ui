import React from 'react'
import { Switch, Route } from 'wouter'
import Login from '../../pages/login'
import Home from '../../pages/home/home'

export const Routes =()=>{
    return (
        <Switch>
            <Route path='/' component={Home}/>
            <Route path='/login' component={Login} />
        </Switch>
    )
}
