import styled from 'styled-components';

export const IconButtonContainer = styled.button`
  padding: 8px;

  background: ${(props) => props.theme.color.darkRed};
  color: ${(props) => props.theme.color.white};

  border-radius: 4px;
  font-size: 16px;
  line-height: 0;
  outline: none;

  transition: all ease 0.2s;

  :hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }
`;
