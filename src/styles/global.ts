import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.color.background};
  }

  body, button, textarea, span, h1, h2, h3, h4, h5, h6 {
    color: ${theme.color.white};
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
