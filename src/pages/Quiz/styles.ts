import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  padding: 24px 48px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 100%;

    margin-bottom: 32px;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 24px;
    }
  }

`;
