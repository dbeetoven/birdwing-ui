import React from 'react'
import styled from 'styled-components'
import Products from '../../components/Products/Products'


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Home = () => {
    return (
        <>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>

            <Wrapper>
                <Products/>
            </Wrapper>
        </>
    )
}

export default Home



