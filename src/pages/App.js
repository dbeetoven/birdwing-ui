import * as React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

export default function App (){
    return (
        <main>
            <div className="container">
                <Navbar/>
                <Layout children={<h1>Hello welcome to Birdwing</h1>}/>
            </div>

        </main>
    )
}
