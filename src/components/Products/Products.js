import React from 'react'
import Product from './Product/Product'
import { Wrapper, WrapperContent, WrapperHeader, WrapperHeaderTitle } from './ProductsStyles'



export default  function Products() {
    return (
        <Wrapper>
            <WrapperHeader>
                <WrapperHeaderTitle>Burger</WrapperHeaderTitle>
            </WrapperHeader>
            <WrapperContent>
                <Product key={1}/>
                <Product key={2}/>
                <Product key={3}/>
                <Product key={4}/>
                <Product key={5}/>
                <Product key={6}/>
                <Product key={7}/>
                <Product key={8}/>
            </WrapperContent>
            <hr/>
            <WrapperHeader>
                <WrapperHeaderTitle>Popular Products</WrapperHeaderTitle>
            </WrapperHeader>
        </Wrapper>
    )
}
