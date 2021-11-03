import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean
}

export const Container = styled.li<ContainerProps>`
    width: 100%;
    max-width: 264px;

    background: ${(props) => props.theme.color.gray};
    border-radius: 16px;

    list-style: none;
    cursor: pointer;

    button {
        padding: 48px 32px;
        border: 0;
        width: 100%;
        background: transparent;

        input {
          margin-top: 24px;
        }
    }

    transition: all ease 0.2s;

    :hover {
      filter: brightness(1.1);
    }

    ${(props) => {
    if (!props.isSelected) {
      return css`
        border: 2px solid transparent;
      `;
    }

    return css`
        border: 2px solid ${props.theme.color.darkRed};
        transform: scale(1.05);

        -webkit-box-shadow: 0px 0px 24px 4px rgba(153,0,0,0.25);
        box-shadow: 0px 0px 24px 4px rgba(153,0,0,0.25);
      `;
  }};
`;
