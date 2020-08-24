import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  
  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  #root {
    --green: #acf25e;
    --green-darken: #8BB03E;
  }

  ul {
    list-style: none;
  }

  body {
    background: #acf25e;
  }

`;
