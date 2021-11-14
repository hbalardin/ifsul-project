import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/auth';

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const App = (): JSX.Element => (
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
