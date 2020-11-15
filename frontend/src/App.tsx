import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BabiesPage from "./components/pages/BabiesPage"
import ParentsPage from "./components/pages/ParentsPage"
import HomePage from "./components/pages/HomePage"

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/parents" component={ParentsPage} exact />
        <Route path="/babies" component={BabiesPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
