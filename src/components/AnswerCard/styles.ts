import styled from 'styled-components';

export const Container = styled.li`
    width: 100%;
    max-width: 360px;
    padding: 48px 32px;

    background: ${(props) => props.theme.color.gray};
    border-radius: 16px;

    list-style: none;

    button {
        border: 0;
        width: 100%;
        background: transparent;
    }

    transition: all ease 0.2s;

    :hover {
      filter: brightness(0.9);
      transform: scale(1.05);
    }
`;

export const Title = styled.h2`
  margin-top: 24px;
  font-size: 24px;
  color: ${(props) => props.theme.color.white};
`;
