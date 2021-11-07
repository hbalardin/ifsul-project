import styled, { css } from 'styled-components';

interface DescriptionContainerProps {
  showDescription: boolean
}

export const Container = styled.li`
    width: 100%;
    max-width: 264px;
    height: fit-content;

    background: ${(props) => props.theme.color.gray};
    border-radius: 16px;

    list-style: none;
    cursor: pointer;

    > button {
        padding: 32px 24px;
        width: 100%;
        background: transparent;
    }

    transition: all ease 0.2s;

    :hover {
      filter: brightness(1.1);
    }
`;

export const DescriptionContainer = styled.section<DescriptionContainerProps>`
  width: 100%;

  margin-top: 16px;

  span {
    display: flex;
    align-items: center;

    gap: 4px;

    button {
      background: transparent;
      line-height: 0;

      transition: all ease 0.3s;
    }
  }

  textarea {
    width: 100%;
    padding: 4px;
    margin-top: 8px;

    color: ${(props) => props.theme.color.white};

    background: transparent;
    border: 1px dashed ${(props) => props.theme.color.darkRed};
    outline: none;

    transition: all ease 0.3s;
  }

  ${(props) => (props.showDescription
    ? css`
      button {
        transform: rotate(180deg);
      }
      textarea {
        height: 0;
        padding: 0;
        border: 0 dashed ${props.theme.color.darkRed};
      }
    `
    : '')}
`;

export const NextQuestionContainer = styled.footer`
  margin-top: 16px;

  button {
    width: 100%;
    padding: 8px 8px 8px 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${(props) => props.theme.color.darkRed};
    border-radius: 8px;

    transition: all ease 0.3s;
  }
`;
