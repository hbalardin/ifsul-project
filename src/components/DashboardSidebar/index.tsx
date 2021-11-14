import { FaUserTie } from 'react-icons/fa';
import { MdQuiz, MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DashboardSidebarContainer } from './styles';
import { theme } from '../../styles/theme';

export const DashboardSidebar = (): JSX.Element => (
  <DashboardSidebarContainer>
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">
            <MdSpaceDashboard size={28} color={theme.color.darkRed} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/quiz/management">
            <MdQuiz size={28} color={theme.color.darkRed} />
            Manage Quiz
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUserTie size={28} color={theme.color.darkRed} />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  </DashboardSidebarContainer>
);
