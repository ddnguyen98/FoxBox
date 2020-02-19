import React, { Component } from 'react';
import { HashRouter, Switch, Link} from 'react-router-dom'

import Home from './components/Home'

// Hashrouter hashes url
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Link exact to ="/" component={Home}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
