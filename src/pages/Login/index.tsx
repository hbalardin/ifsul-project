import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';

export const Login = (): JSX.Element => (
  <Container>
    <section>
      <h1>Faça seu login</h1>

      <form>
        <label htmlFor="userLogin">Usuário</label>
        <Input id="userLogin" itemType="text" />

        <label htmlFor="userPassword">Senha</label>
        <Input id="userPassword" itemType="password" />

        <Button>Login</Button>
      </form>

    </section>
  </Container>
);
