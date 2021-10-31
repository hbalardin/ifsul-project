import { GoLaw } from 'react-icons/go';

import { theme } from '../../styles/theme';

import { Container, Title } from './styles';

interface AnswerCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export const AnswerCard = ({ title, description, onClick }: AnswerCardProps): JSX.Element => (
  <Container>
    <button
      type="button"
      onClick={onClick}
    >
      <GoLaw size={88} color={theme.color.darkRed} />
      <Title>{title}</Title>
      {/* <p>{description}</p> */}
    </button>
  </Container>
);
