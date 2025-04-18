import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
