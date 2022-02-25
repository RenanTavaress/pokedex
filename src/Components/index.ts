import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    background: #C6ECED;
  }

`;

export default GlobalStyle;
