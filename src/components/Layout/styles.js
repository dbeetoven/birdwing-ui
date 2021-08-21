
import styled from 'styled-components'

const Container = styled.div`
/* max-width: 1280px; */
width: 100%;
margin: 0 auto;
`
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`


const StyledSmallContainer = styled(StyledContainer)`
  padding: 0 10px;
`
export {
    StyledContainer,
    StyledSmallContainer,
    Container
}
