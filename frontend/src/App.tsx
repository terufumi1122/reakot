import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ParentsPage from "./components/pages/ParentsPage"
import HomePage from "./components/pages/HomePage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/parents" component={ParentsPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
