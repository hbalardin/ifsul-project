import { Switch, Route } from 'react-router-dom';

import {
  Dashboard, Login, Profile, Quiz, QuizDashboard,
} from '../pages';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/quiz">
      <Quiz />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/dashboard">
      <Dashboard />
    </Route>
    <Route exact path="/dashboard/quiz">
      <QuizDashboard />
    </Route>
    <Route exact path="/profile">
      <Profile />
    </Route>
  </Switch>
);
