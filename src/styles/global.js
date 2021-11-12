import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: #fff;
    font-family: 'Work Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    line-height: 1.5;
  }
`;
