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
  align-items: center;

  gap: 48px;
`;
