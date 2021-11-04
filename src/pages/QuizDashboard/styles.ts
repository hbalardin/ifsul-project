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
  padding: 48px 72px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin: 40px 0;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    gap: 32px;
  }

`;
