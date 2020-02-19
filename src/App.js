import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Members from './components/Members'
import Schedule from './components/Schedule'
import Contact from './components/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';


// Hashrouter hashes url
class App extends Component {
  render() {
    return (
      <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/members" component={Members}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
