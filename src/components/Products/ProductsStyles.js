import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
`

export const WrapperContent = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 47rem), 1fr));
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 5rem;
`
export const WrapperHeader = styled.div`
  width: 100%;
  height: 8vh;
  text-transform: uppercase;
  background-color: #edb026;
  display: flex;
  justify-items: center;
  align-items: center;
 `

export const WrapperHeaderTitle= styled.h4`
 font-size: 1.5em;
 text-align: center;
 margin: auto;
  color: #fff;
  font-family: 'Barlow Condensed';
  font-size: 40px;
  font-weight: 700;
`
