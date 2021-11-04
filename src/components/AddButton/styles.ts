import styled from 'styled-components';

export const AddButtonContainer = styled.button`
  padding: 16px 16px;
  width: 72px;
  height: 72px;

  line-height: 0;

  background: transparent;
  color: ${(props) => props.theme.color.darkRed};
  border: 2px solid ${(props) => props.theme.color.darkRed};

  border-radius: 50%;

  outline: none;

  transition: all ease 0.2s;

  :hover {
    filter: brightness(1.1);
    transform: scale(1.1);
  }
`;
