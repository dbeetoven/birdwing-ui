import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products/Products'

const Home = () => {
    return (
        <>
            <Hero/>
            <Products productsTitle="Burgers"/>
            <Products productsTitle="Bebidas"/>
        </>
    )
}

export default Home
