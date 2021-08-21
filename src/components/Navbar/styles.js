import styled from 'styled-components'
import { Link } from '../common'
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: #edb026;
  color: var(--white);

  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(360deg);
    }
    100% {
      transform: rotateY(0rem);
    }
  }
`
export const StyledNavSticky = styled.nav`
  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 1px #222;
  animation: moveDown 0.5s ease-in-out;
`

export const StyledLogo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  animation: rotate 0.7s ease-in-out 0.5s;
`

export const StyledBrandName = styled.h1`
  font-weight: 600;
  cursor: pointer;
  margin: 0;
`
export const StyledNavList = styled.ul`
  list-style: none;
  display: inline-flex;
  gap: 1.2rem;
`
export const StyledNavListItem = styled.li`
cursor: pointer;
font-weight: 600;
margin: 5px;
  &:hover {
    border-color:  color: var(--state);
  }
`

export const NavItemLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  color: var(--white);

  :hover {
    transform: scale(0.98);
    border-bottom: 2px ${(props) => props.theme.colors.textColor} solid;
  }
`
