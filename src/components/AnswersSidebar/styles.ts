import styled, { css } from 'styled-components';

interface SidebarContainerProps {
  isVisible: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  width: 0;
  padding: 48px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.color.gray};
  border-radius: 0 12px 12px 0;

  transition: all ease-in-out 0.5s;
  opacity: 0;

  ${(props) => {
    if (!props.isVisible) return '';

    return css`
      width: 33%;
      opacity: 1;
    `;
  }};

  h1 {
    margin-bottom: 24px;
    text-align: center;
  }

  p {
    margin-top: 32px;
    text-align: center;
  }
`;
