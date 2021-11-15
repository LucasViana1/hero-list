import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Character from './pages/Character';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/personagem">
        <Character />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
