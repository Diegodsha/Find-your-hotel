/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hotels from './Hotels';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hotels" component={Hotels} />
        {/* <Route exact path="/hotels/:id" component={Home} />
        <Route exact path="/favourites" component={Home} /> */}
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
