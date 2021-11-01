import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;

  display: flex;
`;

export const Content = styled.article`
  width: 100%;
  padding: 24px 48px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 100%;

    > h1 {
      font-size: 32px;
    }
  }

  section {
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

  footer {
    display: flex;
    justify-content: center;

    padding: 24px 0;
  }
`;
