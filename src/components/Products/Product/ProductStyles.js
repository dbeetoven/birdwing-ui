import styled from 'styled-components'

export const  Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: rgba( 255, 255, 255, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.4 );
  backdrop-filter: blur( 3.0px );
  -webkit-backdrop-filter: blur( 3.0px );
  border-radius: 1.5rem;
  border: 1px solid rgba( 255, 255, 255, 0.2 );
`

export const CardContent =styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-row: 1fr;
grid-gap: 10px;
margin:1rem;
`
export const CardImg= styled.img`
object-position: 100% 0;
border-radius: 2rem;
object-fit: cover;
backdrop-filter: blur( 3.0px );
  -webkit-backdrop-filter: blur( 3.0px );
`
export const CardDescription =styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const CardDescriptionTitle = styled.h4`
margin-bottom: 1rem;
`
export const CardDescriptionDetail = styled.p`
margin-bottom: 1rem;
`

export const CardDescriptionPrice = styled.p`
margin-bottom: 1rem;
font-weight: 800;
font-size:2rem;
`
export const Button = styled.button`
border-radius: 5px;
text-align:center;
text-transform: uppercase;
width: 152px;
height: 40px;
    background-color: #edb026;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`
export const CardFoooter = styled.div`
padding: 1.5rem;

`
