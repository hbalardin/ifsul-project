import styled, { css } from 'styled-components';

interface StepContainerProps {
  isActive: boolean
}

export const StepContainer = styled.button<StepContainerProps>`
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.white};

  border: 2px solid ${(props) => props.theme.color.darkRed};
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  transition: all ease 0.2s;

  ${(props) => (
    props.isActive
      ? css`
        background: ${props.theme.color.darkRed};
      `
      : '')};
`;
