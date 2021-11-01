import { Button, Input } from '../../components';
import { Container } from './styles';

export const Login = (): JSX.Element => (
  <Container>
    <section>
      <h1>Faça seu login</h1>

      <form>
        <label htmlFor="username">Usuário</label>
        <Input id="username" itemType="text" />

        <label htmlFor="password">Senha</label>
        <Input id="password" itemType="password" />

        <Button>Login</Button>
      </form>
    </section>
  </Container>
);
