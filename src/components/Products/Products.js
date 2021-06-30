import React from 'react'
import Product from './Product/Product'
import { Wrapper } from './ProductsStyles'



export default  function Products() {
    return (
        <Wrapper>
            <Product key={1}/>
            <Product key={2}/>
            <Product key={3}/>
            <Product key={4}/>
            <Product key={5}/>
            <Product key={6}/>
        </Wrapper>
    )
}
