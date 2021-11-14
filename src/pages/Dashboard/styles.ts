import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  height: 100%;
  width: 100%;

  display: flex;
`;

export const Content = styled.article`
  width: 100%;
  padding: 48px 72px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 48px;

    margin-bottom: 72px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 56px;

    > section {
      width: 100%;
      max-width: 624px;
      height: 480px;
    }
  }
`;
