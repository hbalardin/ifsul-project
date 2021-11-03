import { Step } from '..';
import { StepProps } from '../../models';

import { StepsNavbarContainer } from './styles';

interface StepsNavbarProps {
  steps: StepProps[]
}

export const StepsNavbar = ({ steps }: StepsNavbarProps): JSX.Element => (
  <StepsNavbarContainer>
    <ul>
      {steps.map((step, index) => (
        <li key={step.id}>
          <Step isActive={index === steps.length - 1}>{index + 1}</Step>
        </li>
      ))}
    </ul>
  </StepsNavbarContainer>
);
