import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline/ScopedCssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import store from '../state';
import App from './App';
import theme from '../theme';
import About from './About';
import FourOhFour from './FourOhFour';

const Main: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <ScopedCssBaseline>
      <ReduxProvider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/?q=:name" component={App} />
            <Route path="/about" component={About} />
            <Route path="*" component={FourOhFour} />
          </Switch>
        </Router>
      </ReduxProvider>
    </ScopedCssBaseline>
  </ThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('content'));
