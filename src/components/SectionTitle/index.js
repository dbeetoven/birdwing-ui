import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  height: 8vh;
  text-transform: uppercase;
  background-color: #edb026;
  display: flex;
  justify-items: center;
  align-items: center;
`

const Title = styled.h4`
  margin: auto;
  color: #fff;
  font-family: 'Barlow Condensed';
  font-size: 40px;
  font-weight: 700;
`

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
        </Wrapper>
    )
}
export default SectionTitle
