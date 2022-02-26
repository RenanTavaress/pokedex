import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: #C6ECED;
    display: flex;
    justify-content: center;
  }

`;

export default GlobalStyle;
