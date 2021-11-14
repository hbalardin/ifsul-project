import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 8px 16px;

  background: ${(props) => props.theme.color.darkRed};
  color: ${(props) => props.theme.color.white};

  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  outline: none;

  width: 100%;
  max-width: 212px;

  transition: all ease 0.2s;

  ::not(:disabled):hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }

  :disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }
`;
