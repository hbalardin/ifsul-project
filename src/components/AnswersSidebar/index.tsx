import { GoLaw } from 'react-icons/go';

import { theme } from '../../styles/theme';

import { Answer } from '../../models';
import { SidebarContainer } from './styles';

interface AnswersSidebarProps {
  showSidebar: boolean
  answer?: Answer
}

export const AnswersSidebar = ({ showSidebar, answer }: AnswersSidebarProps): JSX.Element => (
  <SidebarContainer isVisible={showSidebar}>
    <h1>{answer?.title}</h1>

    {showSidebar && <GoLaw size={128} color={theme.color.darkRed} />}

    <p>{answer?.description}</p>
  </SidebarContainer>
);
