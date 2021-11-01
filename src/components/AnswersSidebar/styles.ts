import styled, { css } from 'styled-components';

interface SidebarContainerProps {
  isVisible: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  ${(props) => {
    if (props.isVisible) {
      return css`
        width: 33%;
        padding: 48px 24px;
        opacity: 1;
      `;
    }
    return css`
      width: 0;
      padding: 0;
      opacity: 0;
    `;
  }};

  transition: all ease-in-out 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.color.gray};
  border-radius: 0 12px 12px 0;

  h1 {
    margin-bottom: 24px;
    text-align: center;
  }

  p {
    margin-top: 32px;
    text-align: center;
  }
`;
