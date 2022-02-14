import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  html, body {
    width: 1080px;
    height: 820px;
    background: #C6ECED;
  }

`;

export default GlobalStyle;
