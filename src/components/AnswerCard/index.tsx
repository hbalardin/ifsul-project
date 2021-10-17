import { Container, Title } from './styles';

interface AnswerCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export const AnswerCard = ({ title, description, onClick }: AnswerCardProps): JSX.Element => (

  <Container>
    {/* <img src="" alt="" /> */}
    <button
      type="button"
      onClick={onClick}
    >
      <Title>{title}</Title>
      <p>{description}</p>
    </button>
  </Container>
);
