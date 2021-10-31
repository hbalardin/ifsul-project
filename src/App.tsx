import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const App = (): JSX.Element => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
