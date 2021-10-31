import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #0D0D0D;
        color: #fafafa;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
