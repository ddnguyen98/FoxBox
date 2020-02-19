import React, { Component } from 'react';
import { HashRouter, Switch, Link} from 'react-router-dom'

import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <main>
            <Link exact to ="/" component={Home}/>
          </main>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
