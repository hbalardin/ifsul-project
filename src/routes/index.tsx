import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Quiz } from '../pages';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/quiz">
      <Quiz />
    </Route>
  </Switch>
);
