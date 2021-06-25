import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Routes } from '../config/router/routes'


export default function App() {
    return (
        <Router>
            <Layout>
                <Routes/>
            </Layout>
        </Router>

    )
}
