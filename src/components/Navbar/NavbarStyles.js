
import styled from 'styled-components'
import {Link} from '../common'


export const WrapperNav =styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  background-color: #edb026;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`

export const Logo =styled.a`
  
  
     img {
       height: 26px;
       width: 175px;
       object-fit: cover;
       border-radius: 8px;
   }
`
export const NavList = styled.ul`
    display: flex;
`

export const NavItemLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  color: var(--theme-color);
  
  :hover  {
    transform: scale(0.98);
    border-bottom: 2px ${props => props.theme.colors.textColor} solid;
  }
`

export  const NavListItem=styled.li`
margin: 5px;
  &:hover {
    background-color: white;
  }
  
`
