import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --text: 'Heebo', sans-serif;
    --black: #060813;
  }


  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  html, body{
    background: var(--black);
    font-family: var(--text);
    padding: 0 1rem;
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