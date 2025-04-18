import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
            {/* <Route path="/" exact component={Signin} />
            <Redirect to="/" /> */}
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
