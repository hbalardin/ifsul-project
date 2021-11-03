import styled from 'styled-components';

interface TitleInputProps {
  size: number
  centered: boolean
}

export const TitleInput = styled.input<TitleInputProps>`
  width: 100%;
  background: transparent;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.theme.color.white};

  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  outline: none;
  border: 0;

  transition: all 0.2s ease;

  :not([readonly]):focus-within {
    border-bottom: 1px solid ${(props) => props.theme.color.darkRed};
  }
`;
