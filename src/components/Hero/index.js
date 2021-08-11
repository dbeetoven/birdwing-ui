import React from 'react'
import styled from 'styled-components'
import burger from '../../assets/images/burguer.png'
const Wrapper = styled.section`
width: 100%;
`
const Img = styled.img`
object-fit: cover;
object-position: 100% 0;
`

const Hero = ()=>{

    return (
        <Wrapper>
            <Img  src={burger} />
        </Wrapper>
    )
}

export default Hero
