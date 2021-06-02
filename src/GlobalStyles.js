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
    --font-2: 2.25rem;
    --font-3: 1.875rem;
    --font-4: 1.5rem;
    --font-5: 1.25rem;
    --font-6: 1rem;
    --font-7: 0.875rem;
    --font-8: 0.75rem;
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