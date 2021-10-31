import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  padding: 48px;
  background: ${(props) => props.theme.color.background};

  display: flex;
  justify-content: center;

  section {
    width: 100%;
    max-width: 428px;
    height: fit-content;

    padding: 48px 24px 32px;
    background: ${(props) => props.theme.color.gray};
    border-radius: 16px;

    h1 {
      font-size: 24px;
      text-align:center;

      margin-bottom: 24px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: 14px;
        margin-bottom: 8px;
        color: ${(props) => props.theme.color.text};
      }

      label + input {
        margin-bottom: 24px;
      }

      button {
        margin-top: 16px;
        align-self: center;
      }
    }
  }
`;
