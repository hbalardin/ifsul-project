import styled from 'styled-components';

export const InputContainer = styled.input`
  padding: 8px 4px;

  background: transparent;
  color: ${(props) => props.theme.color.white};

  font-size: 14px;

  outline: none;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.color.darkRed};

  transition: all 0.2s ease;

  :focus-within {
    transform: translate(4px, -4px);
  }
`;
