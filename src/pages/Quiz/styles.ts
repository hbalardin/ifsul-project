import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  height: 100%;
  width: 100%;

  display: flex;

  > section {
    width: 100%;
  }
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
  padding: 24px 48px;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 100%;

    > h1 {
      font-size: 32px;
    }
  }

  > section {
    width: 100%;
    display: flex;
    justify-content: center;

    padding: 12px 0;

    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px;
    }

    p {
      text-align: center;
    }
  }

  > footer {
    display: flex;
    justify-content: center;

    padding: 24px 0;
  }
`;
