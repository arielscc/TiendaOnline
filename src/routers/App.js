import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import * as Pages from '../pages';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Pages.Home} />
            <Route exact path="/checkout" component={Pages.Checkout} />
            <Route
              exact
              path="/checkout/information"
              component={Pages.Information}
            />
            <Route exact path="/checkout/payment" component={Pages.Payment} />
            <Route exact path="/checkout/success" component={Pages.Success} />
            <Route component={Pages.Notfound} />
          </Switch>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
