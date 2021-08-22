import React from 'react'
import About from 'components/About'
import Hero from 'components/Hero'
import Products from 'components/Products'
import SectionDivider from 'components/SectionDivider'


const Home = () => {
    return (
        <>
            <Hero/>
            <SectionDivider title="Our Story" subTitle="About Us"/>
            <About/>
            <Products productsTitle="Burgers"/>
            <Products productsTitle="Bebidas"/>
        </>
    )
}

export default Home
