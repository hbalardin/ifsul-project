import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 8px 16px;

  background: ${(props) => props.theme.color.darkRed};
  color: ${(props) => props.theme.color.white};

  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  outline: none;

  width: 100%;
  max-width: 212px;

  transition: all ease 0.2s;

  :hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }
`;