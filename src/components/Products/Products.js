import React from 'react'
import Product from './Product/Product'
import PropTypes from 'prop-types'
import { Wrapper, WrapperContent, WrapperHeader, WrapperHeaderTitle } from './ProductsStyles'



// eslint-disable-next-line react/prop-types
export default  function Products({productsTitle}) {
    return (
        <Wrapper>
            <WrapperHeader>
                <WrapperHeaderTitle>{productsTitle}</WrapperHeaderTitle>
            </WrapperHeader>
            <WrapperContent>
                <Product key={1}/>
                <Product key={2}/>
            </WrapperContent>
        </Wrapper>
    )
}

Product.productsTitle={
    productsTitle: PropTypes.string
}
