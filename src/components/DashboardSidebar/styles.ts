import styled from 'styled-components';

export const DashboardSidebarContainer = styled.aside`

  width: 17%;
  transition: all ease-in-out 0.5s;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.color.gray};
  border-radius: 0 12px 12px 0;

  position: relative;

  nav {
    height: 56px;
    max-width: 320px;
    display: flex;
    justify-content: space-between;
    padding: 64px 0 0 0;
    align-items: center;

    position: fixed;

    ul {
      width: 100%;
      padding-top: 64px;

      li {
        list-style: none;
        width: 100%;
        transition: all ease-in-out 0.5s;
        border-left: 2px solid transparent;

        :hover {
          filter: brightness(0.9);
          border-left: 2px solid ${(props) => props.theme.color.darkRed};
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
