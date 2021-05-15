import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './home/home'

export default function App() {
    return (
        <>
            <main>
                <Navbar />
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </main>

        </>

    )
}
