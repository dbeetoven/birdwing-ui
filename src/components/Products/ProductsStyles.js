import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: 10rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
  grid-template-rows: 1fr;
  gap: 1rem;
  background: papayawhip;
`
