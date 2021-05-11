import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --text: 'Heebo', sans-serif;
    
    --black-900: #060813;
    --black-700: #12141D;
    --white: #fff;
    --radius: 0.3125rem;
    --grey-90%: ;
    --twitter-blue: #1DA1F2;
    --pishure-red: #E21F3B;
    --pishure-light-red: #F3A4AF;
    --border-color: #3D416C;

    --font-1: 3rem;
    --font-1: 3rem;
    --font-1: 3rem;
    --font-1: 3rem;
    --font-1: 3rem;
    --font-1: 3rem;
    --font-1: 3rem;
    --font-1: 3rem;
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
    color: var(--white);
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

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
  
`