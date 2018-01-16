import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/index';
import Popular from './Popular/index';
import GameInfo from './GameInfo/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

require('./index.css');

// state
// lifecycle event
// UI
// ^^ these are your actual concerns
// JS/HTML/CSS is a technology concern

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact component={Popular} />
            <Route path="/game/:gameId" component={GameInfo} />
          </Switch>
        </main>
      </Router>
    )
  }
}

module.exports = App;
