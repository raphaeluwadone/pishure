import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --text: 'Heebo', sans-serif;
    --black-900: #060813;
    --white: #fff;
    --radius: 0.3125rem;
  }


  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  html, body{
    background: var(--black-900);
    font-family: var(--text);
    padding: 0 1rem;
    color: var(--white)
  }

  img{
    display: block;
    max-width: 100%
  }

  input,
  button{
    border: none;
    outline: none;
    box-shadow: none;
  }
  
`