import styled from 'styled-components';

export const DashboardSidebarContainer = styled.aside`

  width: 17%;
  transition: all ease-in-out 0.5s;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.color.gray};
  border-radius: 0 12px 12px 0;

  nav {
      height: 56px;
    display: flex;
    justify-content: space-between;
    padding: 64px 0 0 0;
    align-items: center;
    width: 100%;

    ul {
      width: 100%;
      padding-top: 64px;

      li {
        list-style: none;
        width: 100%;
        transition: all ease-in-out 0.5s;

        :hover {
          background-color: ${(props) => props.theme.color.background};
          filter: brightness(0.9);
        }

        a {
          padding: 12px;
          text-decoration: none;
          color: ${(props) => props.theme.color.white};
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    }
  }
`;
