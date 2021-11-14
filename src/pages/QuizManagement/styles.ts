import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  height: 100%;
  width: 100%;

  display: flex;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 16px 72px;

  border-bottom: 2px solid ${(props) => props.theme.color.gray};

  display: flex;
  justify-content: end;
  gap: 16px;
`;

export const Content = styled.article`
  width: 100%;

  > section{
    padding: 48px 72px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > header {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  ul {
    margin: 40px 0 16px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    gap: 32px;

    > button {
      margin: 24px 8px;
      align-self: center;
    }
  }
`;

export const ButtonsContainer = styled.footer`
    width: 100%;
    padding: 24px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 24px;
`;
