import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Quiz, QuizDashboard } from '../pages';

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
  </Switch>
);
