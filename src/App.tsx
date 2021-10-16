import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
