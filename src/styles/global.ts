import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
  }
`;

export default GlobalStyle;
