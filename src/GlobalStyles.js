import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  html, body{
    --text: 'Heebo', sans-serif;
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