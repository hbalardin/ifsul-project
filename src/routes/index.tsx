import { Switch, Route } from 'react-router-dom';

import {
  DashboardPage, LoginPage, ProfilePage, QuizManagementPage, QuizPage,
} from '../pages';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/login">
      <LoginPage />
    </Route>
    <Route exact path="/dashboard">
      <DashboardPage />
    </Route>
    <Route exact path="/quiz">
      <QuizPage />
    </Route>
    <Route exact path="/quiz/management">
      <QuizManagementPage />
    </Route>
    <Route exact path="/profile">
      <ProfilePage />
    </Route>
  </Switch>
);
