import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: var(--font-family);
  }
  *:focus {
    outline: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.bgColorPrimary};
    color: ${props => props.theme.colors.textColor};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    -webkit-line-clamp: 5;
  }

  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`

export default GlobalStyles
