import { createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family:  ${theme.fonts.pro.medium},
      sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    background-color:  ${theme.colors.dark};
    color:  ${theme.colors.white};
    font-size: 16px;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button,
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
