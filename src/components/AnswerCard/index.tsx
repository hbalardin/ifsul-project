import { GoLaw } from 'react-icons/go';

import { theme } from '../../styles/theme';

import { Container, Title } from './styles';

interface AnswerCardProps {
  title: string;
  isSelected: boolean
  onClick: () => void;
}

export const AnswerCard = ({ title, isSelected, onClick }: AnswerCardProps): JSX.Element => {
  const handleClick = (): void => {
    onClick();
  };

  return (
    <Container
      isSelected={isSelected}
    >
      <button
        type="button"
        onClick={handleClick}
      >
        <GoLaw size={88} color={theme.color.darkRed} />
        <Title>{title}</Title>
      </button>
    </Container>
  );
};
