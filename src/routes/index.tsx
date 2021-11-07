import { Switch, Route } from 'react-router-dom';

import { Login, Quiz, QuizDashboard } from '../pages';
import { DashboardSidebar } from '../components';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/quiz">
      <Quiz />
    </Route>
    <Route exact path="/dashboard/quiz">
      <QuizDashboard />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/dashboard">
      <DashboardSidebar />
    </Route>
    <Route exact path="/profile">
      <DashboardSidebar />
    </Route>
  </Switch>
);
