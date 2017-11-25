import React, {Component} from 'react'
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {BorderView} from './views/Border'
import {ComponentsView} from './views/Components'
import logo from './logo.svg'
import './App.css'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/borders">Border</Link>
        <Link to="/components">Components</Link>
        <Switch>
          <Route path="/borders" component={BorderView} />
          <Route path="/components" component={ComponentsView} />
        </Switch>
      </div>
    )
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)
