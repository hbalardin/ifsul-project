import { Button } from '../../components/Button';
import { Container } from './styles';

export const Login = (): JSX.Element => (
  <Container>
    <section>
      <h1>Faça seu login</h1>

      <form>
        <label htmlFor="userLogin">Usuário</label>
        <input id="userLogin" type="text" />

        <label htmlFor="userPassword">Senha</label>
        <input id="userPassword" type="password" />

        <Button>Login</Button>
      </form>

    </section>
  </Container>
);
